/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import { AuthStatus, BeEvent, BentleyError, ClientRequestContext, Config } from "@bentley/bentleyjs-core";
import { AccessToken } from "@bentley/itwin-client";
import { FrontendAuthorizationClient } from "@bentley/frontend-authorization-client";

export class AuthorizationClient implements FrontendAuthorizationClient {
  public readonly onUserStateChanged: BeEvent<(token: AccessToken | undefined) => void>;
  protected _accessToken?: AccessToken;

  private static _oidcClient: FrontendAuthorizationClient;

  public static get oidcClient(): FrontendAuthorizationClient {
    return this._oidcClient;
  }

  constructor() {
    this.onUserStateChanged = new BeEvent();
  }

  public static async initializeOidc(): Promise<void> {
    const authClient = new AuthorizationClient();
    const userURL = Config.App.get("imjs_sample_showcase_user", "https://prod-imodeldeveloperservices-eus.azurewebsites.net/api/v0/sampleShowcaseUser");
    await authClient.generateTokenString(userURL, new ClientRequestContext());
    await authClient.signInSilent(new ClientRequestContext());

    this._oidcClient = authClient
  }

  public async signInSilent(requestContext?: ClientRequestContext): Promise<void> {
    this.signIn(requestContext);
  }

  public async signIn(requestContext?: ClientRequestContext): Promise<void> {
    if (requestContext) {
      requestContext.enter();
    }
    await this.getAccessToken();
  }

  public async signOut(requestContext?: ClientRequestContext): Promise<void> {
    if (requestContext) {
      requestContext.enter();
    }
    this._accessToken = undefined;
  }

  public get isAuthorized(): boolean {
    return this.hasSignedIn;
  }

  public get hasExpired(): boolean {
    return !this._accessToken;
  }

  public get hasSignedIn(): boolean {
    return !!this._accessToken;
  }

  public async generateTokenString(userURL: string, requestContext?: ClientRequestContext) {
    if (requestContext) {
      requestContext.enter();
    }

    const response = await fetch(userURL);
    const body = await response.json();
    const tokenJson = {
      ...await body,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      _userInfo: { id: "MockId" },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      _tokenString: body._jwt,
    };
    this._accessToken = AccessToken.fromJson(tokenJson);

    // Automatically renew if session exceeds 55 minutes.
    setTimeout(() => {
      this.generateTokenString(userURL)
        .catch((error) => {
          throw new BentleyError(AuthStatus.Error, error);
        });
    }, (1000 * 60 * 55));
  }

  public async getAccessToken(): Promise<AccessToken> {
    if (!this._accessToken)
      throw new BentleyError(AuthStatus.Error, "Cannot get access token");

    return this._accessToken;
  }
}