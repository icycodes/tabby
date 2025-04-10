import type { Feature } from "./feature";
import { createConnection as nodeCreateConnection } from "vscode-languageserver/node";
import {
  createConnection as browserCreateConnection,
  BrowserMessageReader,
  BrowserMessageWriter,
} from "vscode-languageserver/browser";
import { ProposedFeatures, TextDocumentSyncKind, NotebookDocuments } from "vscode-languageserver";
import {
  InitializeParams,
  InitializeResult,
  ClientInfo,
  ClientCapabilities,
  ServerCapabilities,
  ClientProvidedConfig,
  DataStoreRecords,
} from "./protocol";
import { TextDocuments } from "./lsp/textDocuments";
import { TextDocument } from "vscode-languageserver-textdocument";
import { deepmerge } from "deepmerge-ts";
import { isBrowser } from "./env";
import { getLogger, LoggerManager } from "./logger";
import { DataStore } from "./dataStore";
import { Configurations } from "./config";
import { CertsLoader } from "./certsLoader";
import { AnonymousUsageLogger } from "./telemetry";
import { TabbyApiClient } from "./http/tabbyApiClient";
import { GitContextProvider } from "./git";
import { RecentlyChangedCodeSearch } from "./codeSearch/recentlyChanged";
import { CodeLensProvider } from "./codeLens";
import { CompletionProvider } from "./codeCompletion";
import { ChatFeature } from "./chat";
import { ChatEditProvider } from "./chat/inlineEdit";
import { CommitMessageGenerator } from "./chat/generateCommitMessage";
import { BranchNameGenerator } from "./chat/generateBranchName";
import { StatusProvider } from "./status";
import { CommandProvider } from "./command";
import { name as serverName, version as serverVersion } from "../package.json";
import "./utils/array";
import { SmartApplyFeature } from "./chat/smartApply";
import { FileTracker } from "./codeSearch/fileTracker";

export class Server {
  private readonly logger = getLogger("TabbyLSP");
  private readonly connection = isBrowser
    ? browserCreateConnection(ProposedFeatures.all, new BrowserMessageReader(self), new BrowserMessageWriter(self))
    : nodeCreateConnection(ProposedFeatures.all);

  private readonly documents = new TextDocuments(TextDocument);
  private readonly notebooks = new NotebookDocuments(this.documents);

  private readonly dataStore = new DataStore();
  private readonly configurations = new Configurations(this.dataStore);

  private readonly certsLoader = new CertsLoader(this.configurations);
  private readonly anonymousUsageLogger = new AnonymousUsageLogger(this.dataStore, this.configurations);
  private readonly tabbyApiClient = new TabbyApiClient(this.configurations, this.anonymousUsageLogger);

  private readonly gitContextProvider = new GitContextProvider();
  private readonly recentlyChangedCodeSearch = new RecentlyChangedCodeSearch(this.configurations, this.documents);
  private readonly fileTracker = new FileTracker(this.configurations);

  private readonly codeLensProvider = new CodeLensProvider(this.documents);
  private readonly completionProvider = new CompletionProvider(
    this.configurations,
    this.tabbyApiClient,
    this.documents,
    this.notebooks,
    this.anonymousUsageLogger,
    this.gitContextProvider,
    this.recentlyChangedCodeSearch,
    this.fileTracker,
  );
  private readonly chatFeature = new ChatFeature(this.tabbyApiClient);
  private readonly chatEditProvider = new ChatEditProvider(this.configurations, this.tabbyApiClient, this.documents);
  private readonly commitMessageGenerator = new CommitMessageGenerator(
    this.configurations,
    this.tabbyApiClient,
    this.gitContextProvider,
  );
  private readonly branchNameGenerator = new BranchNameGenerator(
    this.configurations,
    this.tabbyApiClient,
    this.gitContextProvider,
  );
  private readonly smartApplyFeature = new SmartApplyFeature(this.configurations, this.tabbyApiClient, this.documents);

  private readonly statusProvider = new StatusProvider(this.dataStore, this.configurations, this.tabbyApiClient);
  private readonly commandProvider = new CommandProvider(this.chatEditProvider, this.statusProvider);

  async listen() {
    await this.preInitialize();
    this.documents.listen(this.connection);
    this.notebooks.listen(this.connection);
    this.connection.listen();
  }

  private async preInitialize() {
    // pre-initialize components
    const loggerManager = LoggerManager.getInstance();
    loggerManager.preInitialize(this.configurations);
    loggerManager.attachLspConnection(this.connection);

    await this.dataStore.preInitialize();
    await this.configurations.preInitialize();
    await this.certsLoader.preInitialize();

    // Lifecycle methods
    this.connection.onInitialize(async (params) => {
      return this.initialize(params);
    });
    this.connection.onInitialized(async () => {
      return this.initialized();
    });
    this.connection.onShutdown(async () => {
      return this.shutdown();
    });
    this.connection.onExit(async () => {
      return this.exit();
    });
  }

  private async initialize(params: InitializeParams): Promise<InitializeResult> {
    this.logger.info("Initializing...");
    const clientInfo: ClientInfo | undefined = deepmerge(
      params.clientInfo,
      params.initializationOptions?.clientInfo ?? {},
    );
    const clientCapabilities: ClientCapabilities = deepmerge(
      params.capabilities,
      params.initializationOptions?.clientCapabilities ?? {},
    );

    const clientProvidedConfig: ClientProvidedConfig = params.initializationOptions?.config ?? {};
    const dataStoreRecords: DataStoreRecords | undefined = params.initializationOptions?.dataStoreRecords;

    const baseCapabilities: ServerCapabilities = {
      textDocumentSync: {
        openClose: true,
        change: TextDocumentSyncKind.Incremental,
      },
      notebookDocumentSync: {
        notebookSelector: [
          {
            notebook: "*",
          },
        ],
      },
      workspace: {
        workspaceFolders: {
          supported: true,
          changeNotifications: true,
        },
      },
    };

    this.logger.debug("Initializing internal components...");
    await this.dataStore.initialize(this.connection, clientCapabilities, clientProvidedConfig, dataStoreRecords);
    await this.configurations.initialize(this.connection, clientCapabilities, clientProvidedConfig);
    await this.anonymousUsageLogger.initialize(clientInfo);
    await this.tabbyApiClient.initialize(clientInfo);
    this.logger.debug("Internal components initialized.");

    this.logger.debug("Initializing feature components...");
    const capabilities: ServerCapabilities[] = await [
      this.gitContextProvider,
      this.recentlyChangedCodeSearch,
      this.codeLensProvider,
      this.completionProvider,
      this.chatFeature,
      this.chatEditProvider,
      this.commitMessageGenerator,
      this.branchNameGenerator,
      this.smartApplyFeature,
      this.statusProvider,
      this.commandProvider,
      this.fileTracker,
    ].mapAsync((feature: Feature) => {
      return feature.initialize(this.connection, clientCapabilities, clientProvidedConfig, dataStoreRecords);
    });
    this.logger.debug("Feature components initialized.");

    const serverCapabilities: ServerCapabilities = deepmerge(baseCapabilities, ...capabilities);

    const result: InitializeResult = {
      capabilities: serverCapabilities,
      serverInfo: {
        name: serverName,
        version: serverVersion,
      },
    };

    this.logger.info("Initialize done.");
    this.anonymousUsageLogger.uniqueEvent("AgentInitialized"); // telemetry event, no wait
    return result;
  }

  private async initialized(): Promise<void> {
    this.logger.info("Received initialized notification.");
    await [
      this.dataStore,
      this.configurations,
      this.statusProvider,
      this.completionProvider,
      this.chatFeature,
    ].mapAsync((feature: Feature) => {
      return feature.initialized?.(this.connection);
    });
  }

  private async shutdown() {
    this.logger.info("Shutting down...");
    await [this.recentlyChangedCodeSearch, this.completionProvider].mapAsync((feature: Feature) => {
      return feature.shutdown?.();
    });
    await this.tabbyApiClient.shutdown();
    this.logger.info("Shutdown done.");
  }

  private exit() {
    return process.exit(0);
  }
}
