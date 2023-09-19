import { StatusBarAlignment, ThemeColor, window } from "vscode";
import { createMachine, interpret } from "@xstate/fsm";
import { agent } from "./agent";
import { notifications } from "./notifications";
import { TabbyCompletionProvider } from "./TabbyCompletionProvider";

const label = "Tabby";
const iconLoading = "$(loading~spin)";
const iconAutomatic = "$(check)";
const iconManual = "$(chevron-right)";
const iconDisabled = "$(x)";
const iconDisconnected = "$(plug)";
const iconUnauthorized = "$(key)";
const iconIssueExist = "$(warning)";
const colorNormal = new ThemeColor("statusBar.foreground");
const colorWarning = new ThemeColor("statusBarItem.warningForeground");
const backgroundColorNormal = new ThemeColor("statusBar.background");
const backgroundColorWarning = new ThemeColor("statusBarItem.warningBackground");

export class TabbyStatusBarItem {
  private item = window.createStatusBarItem(StatusBarAlignment.Right);
  private completionProvider: TabbyCompletionProvider;

  private transitionsForCompletionProviderStatus = [
    {
      target: "automatic",
      cond: () => this.completionProvider.getTriggerMode() === "automatic",
    },
    {
      target: "manual",
      cond: () => this.completionProvider.getTriggerMode() === "manual" && !this.completionProvider.isLoading(),
    },
    {
      target: "loading",
      cond: () => this.completionProvider.getTriggerMode() === "manual" && this.completionProvider.isLoading(),
    },
    {
      target: "disabled",
      cond: () => this.completionProvider.getTriggerMode() === "disabled",
    },
  ];

  private fsm = createMachine({
    id: "statusBarItem",
    initial: "initializing",
    states: {
      initializing: {
        on: {
          ready: this.transitionsForCompletionProviderStatus,
          disconnected: "disconnected",
          unauthorized: "unauthorized",
          issuesExist: "issuesExist",
        },
        entry: () => this.toInitializing(),
      },
      automatic: {
        on: {
          completionStatusChanged: this.transitionsForCompletionProviderStatus,
          ready: this.transitionsForCompletionProviderStatus,
          disconnected: "disconnected",
          unauthorized: "unauthorized",
          issuesExist: "issuesExist",
        },
        entry: () => this.toAutomatic(),
      },
      manual: {
        on: {
          completionStatusChanged: this.transitionsForCompletionProviderStatus,
          ready: this.transitionsForCompletionProviderStatus,
          disconnected: "disconnected",
          unauthorized: "unauthorized",
          issuesExist: "issuesExist",
        },
        entry: () => this.toManual(),
      },
      loading: {
        on: {
          completionStatusChanged: this.transitionsForCompletionProviderStatus,
          ready: this.transitionsForCompletionProviderStatus,
          disconnected: "disconnected",
          unauthorized: "unauthorized",
          issuesExist: "issuesExist",
        },
        entry: () => this.toLoading(),
      },
      disabled: {
        on: {
          completionStatusChanged: this.transitionsForCompletionProviderStatus,
          ready: this.transitionsForCompletionProviderStatus,
          disconnected: "disconnected",
          unauthorized: "unauthorized",
          issuesExist: "issuesExist",
        },
        entry: () => this.toDisabled(),
      },
      disconnected: {
        on: {
          ready: this.transitionsForCompletionProviderStatus,
          unauthorized: "unauthorized",
          issuesExist: "issuesExist",
        },
        entry: () => this.toDisconnected(),
      },
      unauthorized: {
        on: {
          ready: this.transitionsForCompletionProviderStatus,
          disconnected: "disconnected",
          issuesExist: "issuesExist",
          authStart: "unauthorizedAndAuthInProgress",
        },
        entry: () => this.toUnauthorized(),
      },
      unauthorizedAndAuthInProgress: {
        on: {
          ready: this.transitionsForCompletionProviderStatus,
          disconnected: "disconnected",
          issuesExist: "issuesExist",
          authEnd: "unauthorized", // if auth succeeds, we will get `ready` before `authEnd` event
        },
        entry: () => this.toUnauthorizedAndAuthInProgress(),
      },
      issuesExist: {
        on: {
          ready: this.transitionsForCompletionProviderStatus,
          disconnected: "disconnected",
          unauthorized: "unauthorized",
        },
        entry: () => this.toIssuesExist(),
      },
    },
  });

  private fsmService = interpret(this.fsm);

  constructor(completionProvider: TabbyCompletionProvider) {
    this.completionProvider = completionProvider;
    this.fsmService.start();
    this.fsmService.send(agent().getStatus());
    this.fsmService.send("completionStatusChanged");
    this.item.show();

    this.completionProvider.on("triggerModeUpdated", () => {
      this.fsmService.send("completionStatusChanged");
    });
    this.completionProvider.on("loadingStatusUpdated", () => {
      this.fsmService.send("completionStatusChanged");
    });
    agent().on("statusChanged", (event) => {
      console.debug("Tabby agent statusChanged", { event });
      this.fsmService.send(event.status);
    });

    agent().on("authRequired", (event) => {
      console.debug("Tabby agent authRequired", { event });
      notifications.showInformationStartAuth({
        onAuthStart: () => {
          this.fsmService.send("authStart");
        },
        onAuthEnd: () => {
          this.fsmService.send("authEnd");
        },
      });
    });

    agent().on("newIssue", (event) => {
      console.debug("Tabby agent newIssue", { event });
      if (event.issue.name === "slowCompletionResponseTime") {
        notifications.showInformationWhenSlowCompletionResponseTime();
      } else if (event.issue.name === "highCompletionTimeoutRate") {
        notifications.showInformationWhenHighCompletionTimeoutRate();
      }
    });
  }

  public register() {
    return this.item;
  }

  private toInitializing() {
    this.item.color = colorNormal;
    this.item.backgroundColor = backgroundColorNormal;
    this.item.text = `${iconLoading} ${label}`;
    this.item.tooltip = "Tabby is initializing.";
    this.item.command = {
      title: "",
      command: "tabby.applyCallback",
      arguments: [() => notifications.showInformationWhenInitializing()],
    };
  }

  private toAutomatic() {
    this.item.color = colorNormal;
    this.item.backgroundColor = backgroundColorNormal;
    this.item.text = `${iconAutomatic} ${label}`;
    this.item.tooltip = "Tabby automatic code completion is enabled.";
    this.item.command = {
      title: "",
      command: "tabby.applyCallback",
      arguments: [() => notifications.showInformationWhenAutomaticTrigger()],
    };
  }

  private toManual() {
    this.item.color = colorNormal;
    this.item.backgroundColor = backgroundColorNormal;
    this.item.text = `${iconManual} ${label}`;
    this.item.tooltip = "Tabby is standing by, click or press `Alt + \\` to trigger code completion.";
    this.item.command = {
      title: "",
      command: "tabby.applyCallback",
      arguments: [() => notifications.showInformationWhenManualTrigger()],
    };
  }

  private toLoading() {
    this.item.color = colorNormal;
    this.item.backgroundColor = backgroundColorNormal;
    this.item.text = `${iconLoading} ${label}`;
    this.item.tooltip = "Tabby is generating code completions.";
    this.item.command = {
      title: "",
      command: "tabby.applyCallback",
      arguments: [() => notifications.showInformationWhenManualTriggerLoading()],
    };
  }

  private toDisabled() {
    this.item.color = colorWarning;
    this.item.backgroundColor = backgroundColorWarning;
    this.item.text = `${iconDisabled} ${label}`;
    this.item.tooltip = "Tabby is disabled. Click to check settings.";
    this.item.command = {
      title: "",
      command: "tabby.applyCallback",
      arguments: [() => notifications.showInformationWhenInlineSuggestDisabled()],
    };

    console.debug("Tabby code completion is enabled but inline suggest is disabled.");
    notifications.showInformationWhenInlineSuggestDisabled();
  }

  private toDisconnected() {
    this.item.color = colorWarning;
    this.item.backgroundColor = backgroundColorWarning;
    this.item.text = `${iconDisconnected} ${label}`;
    this.item.tooltip = "Cannot connect to Tabby Server. Click to open settings.";
    this.item.command = {
      title: "",
      command: "tabby.applyCallback",
      arguments: [() => notifications.showInformationWhenDisconnected()],
    };
  }

  private toUnauthorized() {
    this.item.color = colorWarning;
    this.item.backgroundColor = backgroundColorWarning;
    this.item.text = `${iconUnauthorized} ${label}`;
    this.item.tooltip = "Tabby Server requires authorization. Click to continue.";
    this.item.command = {
      title: "",
      command: "tabby.applyCallback",
      arguments: [
        () =>
          notifications.showInformationStartAuth({
            onAuthStart: () => {
              this.fsmService.send("authStart");
            },
            onAuthEnd: () => {
              this.fsmService.send("authEnd");
            },
          }),
      ],
    };
  }

  private toUnauthorizedAndAuthInProgress() {
    this.item.color = colorWarning;
    this.item.backgroundColor = backgroundColorWarning;
    this.item.text = `${iconUnauthorized} ${label}`;
    this.item.tooltip = "Waiting for authorization.";
    this.item.command = undefined;
  }

  private toIssuesExist() {
    this.item.color = colorWarning;
    this.item.backgroundColor = backgroundColorWarning;
    this.item.text = `${iconIssueExist} ${label}`;
    switch (agent().getIssues()[0]?.name) {
      case "slowCompletionResponseTime":
        this.item.tooltip = "Completion requests appear to take too much time.";
        break;
      case "highCompletionTimeoutRate":
        this.item.tooltip = "Most completion requests timed out.";
        break;
      default:
        this.item.tooltip = "";
        break;
    }
    this.item.command = {
      title: "",
      command: "tabby.applyCallback",
      arguments: [
        () => {
          switch (agent().getIssues()[0]?.name) {
            case "slowCompletionResponseTime":
              notifications.showInformationWhenSlowCompletionResponseTime();
              break;
            case "highCompletionTimeoutRate":
              notifications.showInformationWhenHighCompletionTimeoutRate();
              break;
          }
        },
      ],
    };
  }
}
