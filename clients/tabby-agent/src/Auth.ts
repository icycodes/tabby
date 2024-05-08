import { EventEmitter } from "events";
import decodeJwt from "jwt-decode";
import deepEqual from "deep-equal";
import createClient from "openapi-fetch";
import type { paths as CloudApi } from "./types/cloudApi";
import type { AbortSignalOption } from "./Agent";
import { HttpError, abortSignalFromAnyOf } from "./utils";
import { DataStore } from "./dataStore";
import { getLogger } from "./logger";

export type StorageData = {
  auth: { [endpoint: string]: { jwt: string } };
};

type JWT = { token: string; payload: { email: string; exp: number } };

class RetryLimitReachedError extends Error {
  readonly name = "RetryLimitReachedError";
  constructor(readonly cause: unknown) {
    super();
  }
}

export class Auth extends EventEmitter {
  static readonly authPageUrl = "https://app.tabbyml.com/account/device-token";
  static readonly tokenStrategy = {
    polling: {
      // polling token after auth url generated
      interval: 5000, // polling token every 5 seconds
      timeout: 5 * 60 * 1000, // stop polling after trying for 5 min
    },
    refresh: {
      // check token every 15 min, refresh token if it expires in 30 min
      interval: 15 * 60 * 1000,
      beforeExpire: 30 * 60 * 1000,
      whenLoaded: {
        // after token loaded from data store, refresh token if it is about to expire or has expired
        maxTry: 5, // keep loading time not too long
        retryDelay: 1000, // retry after 1 seconds
      },
      whenScheduled: {
        // if running until token is about to expire, refresh token as scheduled
        maxTry: 60,
        retryDelay: 30 * 1000, // retry after 30 seconds
      },
    },
  };

  private readonly logger = getLogger("Auth");
  private dataStore?: DataStore;
  private authApi = createClient<CloudApi>({ baseUrl: "https://app.tabbyml.com/api" });
  private jwt?: JWT;

  constructor(readonly endpoint: string) {
    super();
  }

  async init(options?: { dataStore?: DataStore }) {
    this.dataStore = options?.dataStore;
    if (this.dataStore instanceof EventEmitter) {
      this.dataStore.on("updated", async () => {
        const oldJwt = this.jwt;
        await this.load();
        if (!deepEqual(oldJwt, this.jwt)) {
          super.emit("updated", this.jwt);
        }
      });
    }
    this.scheduleRefreshToken();
    await this.load();
  }

  get token(): string | undefined {
    return this.jwt?.token;
  }

  get user(): string | undefined {
    return this.jwt?.payload.email;
  }

  private async load(): Promise<void> {
    if (!this.dataStore) {
      return;
    }
    try {
      await this.dataStore.load();
      const storedJwt = this.dataStore.data.auth?.[this.endpoint]?.jwt;
      if (typeof storedJwt === "string" && this.jwt?.token !== storedJwt) {
        this.logger.debug("Loaded auth data from data store.");
        const jwt: JWT = {
          token: storedJwt,
          payload: decodeJwt(storedJwt),
        };
        // refresh token if it is about to expire or has expired
        if (jwt.payload.exp * 1000 - Date.now() < Auth.tokenStrategy.refresh.beforeExpire) {
          this.jwt = await this.refreshToken(jwt, Auth.tokenStrategy.refresh.whenLoaded);
          await this.save();
        } else {
          this.jwt = jwt;
        }
      }
    } catch (error) {
      this.logger.debug("Failed to load auth data from data store.");
    }
  }

  private async save(): Promise<void> {
    if (!this.dataStore) {
      return;
    }
    try {
      if (this.jwt) {
        if (this.dataStore.data.auth?.[this.endpoint]?.jwt === this.jwt.token) {
          return;
        }
        this.dataStore.data.auth = { ...this.dataStore.data.auth, [this.endpoint]: { jwt: this.jwt.token } };
      } else {
        if (typeof this.dataStore.data.auth?.[this.endpoint] === "undefined") {
          return;
        }
        delete this.dataStore.data.auth[this.endpoint];
      }
      await this.dataStore.save();
      this.logger.debug("Saved auth data to data store.");
    } catch (error) {
      this.logger.error("Failed to save auth data to data store.", error);
    }
  }

  async reset(): Promise<void> {
    if (this.jwt) {
      this.jwt = undefined;
      await this.save();
    }
  }

  async requestAuthUrl(options?: AbortSignalOption): Promise<{ authUrl: string; code: string }> {
    try {
      await this.reset();
      if (options?.signal.aborted) {
        throw options.signal.reason;
      }
      this.logger.debug("Requesting device token...");
      const response = await this.authApi.POST("/device-token", {
        body: { auth_url: this.endpoint },
        signal: options?.signal,
      });
      if (response.error || !response.response.ok) {
        throw new HttpError(response.response);
      }
      const deviceToken = response.data;
      const authUrl = new URL(Auth.authPageUrl);
      authUrl.searchParams.append("code", deviceToken.data.code);
      return { authUrl: authUrl.toString(), code: deviceToken.data.code };
    } catch (error) {
      this.logger.error("Failed to request device token", error);
      throw error;
    }
  }

  async pollingToken(code: string, options?: AbortSignalOption): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const signal = abortSignalFromAnyOf([AbortSignal.timeout(Auth.tokenStrategy.polling.timeout), options?.signal]);
      const timer = setInterval(async () => {
        try {
          this.logger.debug("Polling auth token...");
          const response = await this.authApi.POST("/device-token/accept", { params: { query: { code } }, signal });
          if (response.error || !response.response.ok) {
            throw new HttpError(response.response);
          }
          const result = response.data;
          this.jwt = {
            token: result.data.jwt,
            payload: decodeJwt(result.data.jwt),
          };
          super.emit("updated", this.jwt);
          await this.save();
          clearInterval(timer);
          resolve(true);
        } catch (error) {
          if (error! instanceof HttpError && [400, 401, 403, 405].includes(error.status)) {
            // unknown error but still keep polling
            this.logger.error("Failed due to unknown error when polling auth token", error);
          }
        }
      }, Auth.tokenStrategy.polling.interval);
      if (signal.aborted) {
        clearInterval(timer);
        reject(signal.reason);
      } else {
        signal.addEventListener("abort", () => {
          clearInterval(timer);
          reject(signal.reason);
        });
      }
    });
  }

  private async refreshToken(jwt: JWT, options = { maxTry: 1, retryDelay: 1000 }, retry = 0): Promise<JWT> {
    try {
      this.logger.debug("Refreshing auth token...");
      const response = await this.authApi.POST("/device-token/refresh", {
        headers: { Authorization: `Bearer ${jwt.token}` },
      });
      if (response.error || !response.response.ok) {
        throw new HttpError(response.response);
      }
      const refreshedJwt = response.data;
      return {
        token: refreshedJwt.data.jwt,
        payload: decodeJwt(refreshedJwt.data.jwt),
      };
    } catch (error) {
      if (error! instanceof HttpError && [400, 401, 403, 405].includes(error.status)) {
        // unknown error, retry a few times
        this.logger.error("Failed due to unknown error when refreshing auth token.", error);
        if (retry < options.maxTry) {
          this.logger.debug(`Retry refreshing auth token after ${options.retryDelay}ms`);
          await new Promise((resolve) => setTimeout(resolve, options.retryDelay));
          return this.refreshToken(jwt, options, retry + 1);
        }
      }
      throw new RetryLimitReachedError(error);
    }
  }

  private scheduleRefreshToken() {
    setInterval(async () => {
      if (!this.jwt) {
        return;
      }
      this.logger.debug("Checking auth token...");
      if (this.jwt.payload.exp * 1000 - Date.now() < Auth.tokenStrategy.refresh.beforeExpire) {
        try {
          this.jwt = await this.refreshToken(this.jwt, Auth.tokenStrategy.refresh.whenScheduled);
          super.emit("updated", this.jwt);
          await this.save();
        } catch (error) {
          this.logger.error("Failed to refresh auth token.", error);
        }
      } else {
        this.logger.debug("Auth token is still valid.");
      }
    }, Auth.tokenStrategy.refresh.interval);
  }
}
