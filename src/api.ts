/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import type {
  ABTestData,
  AccountCancellation,
  AccountEmailInput,
  AccountPhysicalAddress,
  AddAccountEmailAddressData,
  BulkImportContactsJsonData,
  CancelAccountData,
  ConstantContactAuthorizationCodeFlowOptions,
  ConstantContactOptions,
  ConstantContactToken,
  ContactCreateOrUpdateInput,
  ContactDelete,
  ContactPostRequest,
  ContactPutRequest,
  ContactsCsvImportData,
  ContactsCsvImportPayload,
  ContactsExport,
  ContactsJsonImport,
  CountContactData,
  CountContactParams,
  CreateContactData,
  CreateEmailCampaignAbTestUsingPostData,
  CreateEmailCampaignUsingPostData,
  CreateListData,
  CreateOrUpdateContactData,
  CreateResendToNonOpenersUsingPostData,
  CreateSegmentData,
  CreateSsoUserData,
  CustomFieldId100,
  CustomFieldInput,
  CustomerPut,
  DeleteContactData,
  DeleteCustomFieldData,
  DeleteEmailCampaignAbTestUsingDeleteData,
  DeleteListActivityData,
  DeleteResendToNonOpenersUsingDeleteData,
  DeleteSegmentData,
  DeleteTagData,
  DeleteWebhooksSubscriptionsData,
  EmailCampaignActivity,
  EmailCampaignComplete,
  EmailCampaignName,
  EmailScheduleInput,
  EmailTestSendInput,
  GetAccountByIdData,
  GetAccountByIdParams,
  GetAccountSegmentsData,
  GetAccountSegmentsParams,
  GetActivityData,
  GetActivityStatusCollectionData,
  GetActivityStatusCollectionParams,
  GetAllBulkEmailCampaignSummariesData,
  GetAllBulkEmailCampaignSummariesParams,
  GetBouncesData,
  GetBouncesParams,
  GetCampaignActivityLinkStatsData,
  GetCampaignActivityLinkStatsParams,
  GetClicksData,
  GetClicksParams,
  GetContactAddsData,
  GetContactAddsParams,
  GetContactData,
  GetContactIdXrefsData,
  GetContactIdXrefsParams,
  GetContactOpenClickRateData,
  GetContactOpenClickRateParams,
  GetContactOpensData,
  GetContactOpensParams,
  GetContactParams,
  GetContactTrackingCountData,
  GetContactTrackingCountParams,
  GetContactTrackingData,
  GetContactTrackingParams,
  GetContactsData,
  GetContactsExportData,
  GetContactsParams,
  GetCustomFieldData,
  GetCustomFieldsData,
  GetCustomFieldsParams,
  GetDidNotOpensData,
  GetDidNotOpensParams,
  GetEmailCampaignActivitySummaryData,
  GetEmailSummaryData,
  GetForwardsData,
  GetForwardsParams,
  GetListData,
  GetListIdXrefsData,
  GetListIdXrefsParams,
  GetListParams,
  GetListsData,
  GetListsParams,
  GetOpensData,
  GetOpensParams,
  GetOptoutsData,
  GetOptoutsParams,
  GetPartnerSiteOwnersData,
  GetPartnerSiteOwnersParams,
  GetPhysicalAddressData,
  GetPlanData,
  GetSegmentDetailData,
  GetSendsData,
  GetSendsParams,
  GetSmsEngagementHistoryData,
  GetTagData,
  GetTagParams,
  GetTagsData,
  GetTagsParams,
  GetUniqueContactClicksData,
  GetUniqueContactClicksParams,
  GetUniqueContactOpensData,
  GetUniqueContactOpensParams,
  GetUniqueContactSmsOptInsData,
  GetUniqueContactSmsOptInsParams,
  GetUniqueContactUpdatesData,
  GetUniqueContactUpdatesParams,
  GetUniqueOpensData,
  GetUniqueOpensParams,
  GetUserPrivilegesData,
  GetWebhooksCollectionData,
  GetWebhooksTopicData,
  ListActivityAddContacts,
  ListActivityRemoveContacts,
  ListIdList100,
  ListInput,
  PartnerAccountOperationsPostSyncData,
  PartnerAccountOperationsRequest,
  PlanInfo,
  PostContactDeleteData,
  PostContactsExportData,
  PostCustomFieldDeleteData,
  PostCustomFieldsData,
  PostListAddContactData,
  PostListDeleteData,
  PostListRemoveContactData,
  PostTagAddContactData,
  PostTagData,
  PostTagDeleteData,
  PostTagRemoveContactData,
  Provision,
  ProvisionData,
  PutContactData,
  PutCustomFieldData,
  PutCustomerByIdData,
  PutListData,
  PutPhysicalAddressData,
  PutTagData,
  PutWebhooksTopicData,
  RemoveEmailCampaignUsingDeleteData,
  RenameEmailCampaignUsingPatchData,
  ResendToNonOpenersInput,
  RetrieveEmailAddressesData,
  RetrieveEmailAddressesParams,
  RetrieveEmailCampaignAbTestUsingGetData,
  RetrieveEmailCampaignActivityPreviewUsingGetData,
  RetrieveEmailCampaignActivityUsingGetData,
  RetrieveEmailCampaignActivityUsingGetParams,
  RetrieveEmailCampaignUsingGetData,
  RetrieveEmailCampaignsUsingGetData,
  RetrieveEmailCampaignsUsingGetParams,
  RetrieveEmailSchedulesUsingGetData,
  RetrieveEmailSendHistoryUsingGetData,
  RetrieveResendToNonOpenersUsingGetData,
  RetrieveXrefMappingsUsingGetData,
  RetrieveXrefMappingsUsingGetParams,
  SSOUser,
  ScheduleEmailCampaignActivityUsingPostData,
  SegmentData,
  SegmentName,
  SetPlanData,
  TagAddRemoveContacts,
  TagIdList500Limit,
  TagPost,
  TagPut,
  TestSendCampaignActivityUsingPostData,
  TestSendWebhooksTopicData,
  UnscheduleEmailCampaignActivityUsingDeleteData,
  UpdateEmailCampaignActivityUsingPutData,
  UpdateSegmentData,
  UpdateSegmentNameData,
  WebhooksSubscriptionBody,
} from './types';

type RawConstantContactToken = Omit<ConstantContactToken, 'expires_at'> & { expires_in: string };
export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` when using an oAuth route */
  oAuth?: boolean;
  /** set parameter to `true` to use authentication */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
  /** enable throwing errors */
  enableThrows?: boolean;
}
type BaseRequestParams = Omit<FullRequestParams, 'path'>;
export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path' | 'oAuth' | 'secure' | 'baseUrl'
>;
export interface HttpSuccessResponse<D extends unknown, E extends unknown = unknown> extends Response {
  ok: true;
  data: D;
}
export interface HttpErrorResponse<D extends unknown, E extends unknown = unknown> extends Response {
  ok: false;
  error: E;
}
export type HttpResponse<D extends unknown, E extends unknown = unknown> =
  | HttpSuccessResponse<D, E>
  | HttpErrorResponse<D, E>;

export type ConstantContactApiError =
  | { error_key: string; error_message: string }
  | { error_key: string; error_message: string }[];

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

const base64 = (input: string) => {
  if (typeof Buffer !== 'undefined') return Buffer.from(input).toString('base64');
  return btoa(input);
};

export class HttpClient {
  public baseUrl: string = 'https://api.cc.email/v3';
  public oAuthUrl: string = 'https://authz.constantcontact.com/oauth2/default/v1';

  private readonly clientData: Pick<ConstantContactOptions, 'clientId' | 'clientSecret'>;
  private readonly onTokenUpdate?: ConstantContactOptions['onTokenUpdate'];
  private token: ConstantContactToken | null = null;

  private enableThrows = false;

  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: BaseRequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    secure: true,
    format: 'json',
  };

  constructor(options: ConstantContactOptions) {
    this.clientData = { clientId: options.clientId, clientSecret: options.clientSecret };
    this.token = options.token || null;
    this.onTokenUpdate = options.onTokenUpdate;
    this.enableThrows = options.enableThrows || false;
  }

  public setToken = (data: ConstantContactToken | RawConstantContactToken | null) => {
    if (!data) return (this.token = null);
    this.token = {
      ...data,
      expires_at: 'expires_at' in data ? data.expires_at : new Date(Date.now() + 1000 * Number(data.expires_in)),
    };
    this.onTokenUpdate && this.onTokenUpdate(this.token);
  };

  private async handleSecurity(oAuth: boolean = false) {
    if (oAuth) {
      return {
        headers: { Authorization: `Basic ${base64(`${this.clientData.clientId}:${this.clientData.clientSecret}`)}` },
      };
    }

    if (!this.token) return {};

    const expiresAt =
      typeof this.token.expires_at === 'string' ? new Date(this.token.expires_at) : this.token.expires_at;
    if (expiresAt <= new Date()) {
      const newTokenRes = await this.oAuth.refreshToken();

      if (!newTokenRes.ok) return {};
    }

    return { headers: { Authorization: `Bearer ${this.token.access_token}` } };
  }

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(key => 'undefined' !== typeof query[key]);
    return keys
      .map(key => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string') ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== 'string' ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public oAuth = {
    getAuthorizationURL: (options: ConstantContactAuthorizationCodeFlowOptions) => {
      const { redirectUri, responseType, state, scope, nonce } = options;
      const params = {
        client_id: this.clientData.clientId,
        redirect_uri: redirectUri,
        response_type: responseType,
        state,
        scope: scope?.join(' '),
        nonce,
      };
      return `${this.oAuthUrl}/authorize?${this.toQueryString(params)}`;
    },
    exchangeAuthorizationCode: async (code: string, redirectUri: string) => {
      const res = await this.request<RawConstantContactToken & { id_token: string }>({
        baseUrl: this.oAuthUrl,
        path: '/token',
        method: 'POST',
        oAuth: true,
        secure: false,
        body: { code, redirect_uri: redirectUri, grant_type: 'authorization_code' },
        type: ContentType.UrlEncoded,
      });
      if (res.ok) this.setToken(res.data);

      return { ...res, data: this.token! };
    },
    refreshToken: async () => {
      const res = await this.request<RawConstantContactToken>({
        baseUrl: this.oAuthUrl,
        path: '/token',
        method: 'POST',
        oAuth: true,
        secure: false,
        body: { refresh_token: this.token?.refresh_token, grant_type: 'refresh_token' },
        type: ContentType.UrlEncoded,
      });

      if (res.ok) this.setToken(res.data);
      return { ...res, data: this.token! };
    },
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    oAuth,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    enableThrows,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (await this.handleSecurity(oAuth)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
    }).then(async response => {
      const r = response as HttpResponse<T, E> & { data: T; error: E };
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then(data => {
              if (r.ok) r.data = data;
              else r.error = data;

              return r;
            })
            .catch(e => {
              r.error = r.statusText as unknown as E;

              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok && (enableThrows || this.enableThrows)) throw data;
      return data;
    });
  };
}

/**
 * Constant Contact API
 * @constructor Create a new Constant Contact API instance.
 * @param options - The options for the Constant Contact API.
 * @example
 * ```ts
 * const api = new ConstantContact({
 *  clientId: 'YOUR_CLIENT_ID',
 *  clientSecret: 'YOUR_CLIENT_SECRET',
 *  token: existingToken,
 *  onTokenUpdate: (token) => saveToken(token);
 */
export class Api extends HttpClient {
  account = {
    /**
     * @description Use this method to return the user privileges associated with your access token as an array of objects. This method returns all user privileges, including privileges the V3 API does not currently use. Constant Contact requires specific user privileges to make requests using the V3 API. For more information, see the [User Privileges and Roles Overview](/api_guide/user_privileges.html).
     *
     * @tags Account Services
     * @name GetUserPrivileges
     * @summary GET User Privileges
     * @request GET:/account/user/privileges
     * @secure
     * @response `200` `GetUserPrivilegesData` Request successful.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. Your application is deactivated.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    getUserPrivileges: (params: RequestParams = {}) =>
      this.request<GetUserPrivilegesData, ConstantContactApiError>({
        path: `/account/user/privileges`,
        method: 'GET',
        ...params,
      }),

    /**
     * @description Get account related details for a Constant Contact user account. Use the `extra_fields` query parameter to include the `company_logo` and/or `physical_address` details in the response body. For more details, see [Get Account Summary Details](/api_guide/account_details_get.html).
     *
     * @tags Account Services
     * @name GetAccountById
     * @summary GET a Summary of Account Details
     * @request GET:/account/summary
     * @secure
     * @response `200` `GetAccountByIdData` Request successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    getAccountById: (query: GetAccountByIdParams, params: RequestParams = {}) =>
      this.request<GetAccountByIdData, ConstantContactApiError>({
        path: `/account/summary`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * @description Use this method to update account details for a Constant Contact account, such as the email address or phone number. This PUT method provides a partial update where only valid properties that you include in the request body are updated and excluded properties are not overwritten. For more details, see [Put (update) Account Summary Details](/api_guide/account_details_put.html).
     *
     * @tags Account Services
     * @name PutCustomerById
     * @summary PUT (update) Account Details
     * @request PUT:/account/summary
     * @secure
     * @response `200` `PutCustomerByIdData` Request successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    putCustomerById: (body: CustomerPut, params: RequestParams = {}) =>
      this.request<PutCustomerByIdData, ConstantContactApiError>({
        path: `/account/summary`,
        method: 'PUT',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to get the address where the account's organization physically resides. The physical address is required to send emails and displays on the footer of every email that is sent from the account.
     *
     * @tags Account Services
     * @name GetPhysicalAddress
     * @summary GET the Physical Address for the Account
     * @request GET:/account/summary/physical_address
     * @secure
     * @response `200` `GetPhysicalAddressData` Request successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    getPhysicalAddress: (params: RequestParams = {}) =>
      this.request<GetPhysicalAddressData, ConstantContactApiError>({
        path: `/account/summary/physical_address`,
        method: 'GET',
        ...params,
      }),

    /**
     * @description Use this method to update the organization's physical address for the Constant Contact user account. The physical address is required to send emails and displays on the footer of every email that is sent from the account. To get the current physical address, make a GET call to `/account/summary/physical_address`. The country (<code>country_code</code>) where the account organization resides determines whether you use the <code>state_code</code> to specify United States (<code>US</code>) and Canada (<code>CA</code>) addresses, or use the <code>state_name</code> to specify all other countries. For more details, see [Put (update) the Physical Address for the Account](/api_guide/account_address_put.html). You must have the role of Account Owner assigned to update account level details.
     *
     * @tags Account Services
     * @name PutPhysicalAddress
     * @summary PUT (update) the Physical Address for an Account
     * @request PUT:/account/summary/physical_address
     * @secure
     * @response `200` `PutPhysicalAddressData` Request successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    putPhysicalAddress: (body: AccountPhysicalAddress, params: RequestParams = {}) =>
      this.request<PutPhysicalAddressData, ConstantContactApiError>({
        path: `/account/summary/physical_address`,
        method: 'PUT',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to return a collection of email addresses for the account associated with your access token. When you <a href="https://v3.developer.constantcontact.com/api_reference/index.html#!/Email_Campaigns/createEmailCampaignUsingPOST" target="_blank">Create an Email Campaign<a/>, you must use an account email address with a `CONFIRMED` status in the email campaign `from_email` and `reply_to_email` headers. Use the query parameters to filter results. You can filter using `confirm_status`, `role_code`, or `email_address`. For example, searching with `confirm_status=CONFIRMED` returns all confirmed email addresses in the account. This method only supports one query parameter at a time.
     *
     * @tags Account Services
     * @name RetrieveEmailAddresses
     * @summary GET a Collection of Account Email Addresses
     * @request GET:/account/emails
     * @secure
     * @response `200` `RetrieveEmailAddressesData` Request successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    retrieveEmailAddresses: (query: RetrieveEmailAddressesParams, params: RequestParams = {}) =>
      this.request<RetrieveEmailAddressesData, ConstantContactApiError>({
        path: `/account/emails`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * @description Use this method to add a new email address to a Constant Contact account. If the email address you are adding already exists in the account the API will return a 409 conflict error. When you add a new email address to an account, Constant Contact automatically sends an email to that address with a link to confirm it. After a user clicks that link, the account email status changes from `UNCONFIRMED` to `CONFIRMED`. You can use confirmed account email addresses in the email campaign `from_email` and `reply_to_email` headers. For more use case information, see [Add an Account Email Address](/api_guide/account_post_emails.html) in the API guide.
     *
     * @tags Account Services
     * @name AddAccountEmailAddress
     * @summary POST Add an Account Email Address
     * @request POST:/account/emails
     * @secure
     * @response `201` `AddAccountEmailAddressData` Request successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `409` `void` Conflict. The resource you are creating or updating conflicts with an existing resource.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    addAccountEmailAddress: (body: AccountEmailInput, params: RequestParams = {}) =>
      this.request<AddAccountEmailAddressData, ConstantContactApiError>({
        path: `/account/emails`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        ...params,
      }),
  };
  activities = {
    /**
     * @description This endpoint returns a collection of activities. Use the state query parameter to include only activities with a specific status (processing, completed, cancelled, failed, or time_out). Use the limit query parameter to define the number of activities returned per page. Learn [more](/api_guide/activity_status.html).
     *
     * @tags Bulk Activities
     * @name GetActivityStatusCollection
     * @summary GET Activity Status Collection
     * @request GET:/activities
     * @secure
     * @response `200` `GetActivityStatusCollectionData` Request Successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    getActivityStatusCollection: (query: GetActivityStatusCollectionParams, params: RequestParams = {}) =>
      this.request<GetActivityStatusCollectionData, ConstantContactApiError>({
        path: `/activities`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description This endpoint returns an activity status report.
     *
     * @tags Bulk Activities
     * @name GetActivity
     * @summary GET an Activity Status
     * @request GET:/activities/{activity_id}
     * @secure
     * @response `200` `GetActivityData` Request Successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` Resource not found for the activity_id provided
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    getActivity: (activityId: string, params: RequestParams = {}) =>
      this.request<GetActivityData, ConstantContactApiError>({
        path: `/activities/${activityId}`,
        method: 'GET',
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to create an activity that exports contacts and contact details to a CSV file. By default, all contacts are exported. To filter contacts to export, specify the source to use, `contact_id`, `list_id`, or `segment_id` (all mutually exclusive). By default, all contact related fields are exported. Use the fields array to only export specific contact fields. You must export `email_address` to successfully export `email_optin_source`, `email_optin_date`, `email_optout_source`, `email_optout_date`, or `email_optout_reason`. After Constant Contact finishes processing the activity, use the `results` link in the response body to retrieve the CSV file.
     *
     * @tags Bulk Activities
     * @name PostContactsExport
     * @summary Export Contacts to a File
     * @request POST:/activities/contact_exports
     * @secure
     * @response `201` `PostContactsExportData` Request successful, queued for processing.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `429` `void` Too many requests. You exceeded 1,000 queued activities for this user account.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    postContactsExport: (body: ContactsExport, params: RequestParams = {}) =>
      this.request<PostContactsExportData, ConstantContactApiError>({
        path: `/activities/contact_exports`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this endpoint to bulk delete contacts in an account. Contacts to delete are specified by contact_id (up to 500), or by list_id (up to 50 lists); all contacts that are members of the list_ids are deleted. Deleted contacts won’t receive email from you, and they don’t count as active contacts. Unlike unsubscribed contacts, deleted contacts can be added back to an account. [Learn how to revive deleted contacts](/api_guide/contacts_delete.html#revive).
     *
     * @tags Bulk Activities
     * @name PostContactDelete
     * @summary Delete Contacts in Bulk
     * @request POST:/activities/contact_delete
     * @secure
     * @response `201` `PostContactDeleteData` Request successful. Activity queued for processing.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `429` `void` Too many requests. You exceeded 1,000 queued activities for this user account.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    postContactDelete: (body: ContactDelete, params: RequestParams = {}) =>
      this.request<PostContactDeleteData, ConstantContactApiError>({
        path: `/activities/contact_delete`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description This multipart method creates an asynchronous background job that adds or updates contacts by importing a CSV file containing contact information. Do not use a Content-Type header value with this method. Importing a new contact automatically sets the contact's `permission_to_send` property as `implicit` and the `opt_in_source` property as `Account`. Importing an existing contact only updates the contact properties you include in the request. The CSV file has a maximum of 40,000 lines including the header row (39,999 contacts) and a maximum file size of 4 megabytes (MB).  Lines above the 40,000 line maximum are not processed. If the request body exceeds 4 MB, only the contacts contained in the first 4 MB are imported and the remaining data is dropped.
     *
     * @tags Bulk Activities
     * @name ContactsCsvImport
     * @summary Import Contacts using a CSV File
     * @request POST:/activities/contacts_file_import
     * @secure
     * @response `201` `ContactsCsvImportData` Request successful. Activity queued for processing.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` 1. This endpoint requires that Content-Type be unspecified 2. Wrong file format, upload file must be of type .csv
     * @response `429` `void` Too many requests. You exceeded 1,000 queued activities for this user account.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    contactsCsvImport: (data: ContactsCsvImportPayload, params: RequestParams = {}) =>
      this.request<ContactsCsvImportData, ConstantContactApiError>({
        path: `/activities/contacts_file_import`,
        method: 'POST',
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description Use this method to create an asynchronous background job that adds new contacts or updates existing contacts by importing a JSON payload. This method requires a request body that contains the contact data you are importing and the contact lists to which you want to add the imported contacts. Importing a new contact automatically sets the contact's `permission_to_send` property as `implicit` and the `opt_in_source` property as `Account`. Importing an existing contact only updates the contact properties you include in the request. For each contact, you can import up to three addresses and three phone numbers. International phone numbers are currently not supported. To import custom fields, prefix the custom field name with `cf:` and add it as a contact property. For example, use the property name `cf:first_name` if you have a custom field named first_name. The custom field must already exist in the Constant Contact account you are using. Each contact can contain up to 25 custom fields. The request body payload has a maximum size of 4 megabytes (MB). If the request body exceeds 4 MB, this method only imports the first 4 MB and drops the remaining data. Use the activity URL to check the status of the import activity request.
     *
     * @tags Bulk Activities
     * @name BulkImportContactsJson
     * @summary Import Contacts using a JSON Payload
     * @request POST:/activities/contacts_json_import
     * @secure
     * @response `201` `BulkImportContactsJsonData` Request successful. Activity queued for processing.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `429` `void` Too many requests. You exceeded 1,000 queued activities for this user account.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    bulkImportContactsJson: (body: ContactsJsonImport, params: RequestParams = {}) =>
      this.request<BulkImportContactsJsonData, ConstantContactApiError>({
        path: `/activities/contacts_json_import`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to create an activity that removes contacts from one or more lists. Use the properties in the `source` object to remove specific contacts from your targeted lists. Use the `list_ids` array to specify the lists from which you want to remove the source contacts.
     *
     * @tags Bulk Activities
     * @name PostListRemoveContact
     * @summary Remove Contacts from Lists
     * @request POST:/activities/remove_list_memberships
     * @secure
     * @response `201` `PostListRemoveContactData` Request successful. Activity queued for processing.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `429` `void` Too many requests. You exceeded 1,000 queued activities for this user account.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    postListRemoveContact: (body: ListActivityRemoveContacts, params: RequestParams = {}) =>
      this.request<PostListRemoveContactData, ConstantContactApiError>({
        path: `/activities/remove_list_memberships`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to create an activity that adds contacts to one or more lists. Each contact can be a member of up to 50 lists. Use the properties in the `source` object to specify the contacts you want to add to lists. Use the `list_ids` array to specify which lists you want to add your source contacts to.
     *
     * @tags Bulk Activities
     * @name PostListAddContact
     * @summary Add Contacts to Lists
     * @request POST:/activities/add_list_memberships
     * @secure
     * @response `201` `PostListAddContactData` Request successful. Activity queued for processing.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `429` `void` Too many requests. You exceeded 1,000 queued activities for this user account.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    postListAddContact: (body: ListActivityAddContacts, params: RequestParams = {}) =>
      this.request<PostListAddContactData, ConstantContactApiError>({
        path: `/activities/add_list_memberships`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this endpoint to delete up to 100 contact lists in an account.
     *
     * @tags Bulk Activities
     * @name PostListDelete
     * @summary Delete Contact Lists
     * @request POST:/activities/list_delete
     * @secure
     * @response `201` `PostListDeleteData` Request successful. Activity queued for processing.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `429` `void` Too many requests. You exceeded 1,000 queued activities for this user account.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    postListDelete: (body: ListIdList100, params: RequestParams = {}) =>
      this.request<PostListDeleteData, ConstantContactApiError>({
        path: `/activities/list_delete`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to create an asynchronous activity that removes one or more tags from all contacts meeting your contact filtering criteria. Filtering criteria must include the `source` type used to identify contacts from which the specified tags (`tag_id`) are removed. Source types are mutually exclusive. If the specified source is either `all_active_contacts` or `list_ids`, you can optionally choose to `exclude` specified contacts by `contact_id`. Use the activity link in the results to check the status of your request." For more use case information, see "[Remove Tags from Contacts](/api_guide/remove_tagging_activity.html)
     *
     * @tags Bulk Activities
     * @name PostTagRemoveContact
     * @summary Remove Tags from Contacts
     * @request POST:/activities/contacts_taggings_remove
     * @secure
     * @response `201` `PostTagRemoveContactData` Request successful. Activity queued for processing.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `429` `void` Too many requests. You exceeded 1,000 queued activities for this user account.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    postTagRemoveContact: (body: TagAddRemoveContacts, params: RequestParams = {}) =>
      this.request<PostTagRemoveContactData, ConstantContactApiError>({
        path: `/activities/contacts_taggings_remove`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to create an asynchronous activity that adds one or more tags to all contacts meeting your contact filtering criteria. Use the `source` type to identify contacts from which the specified tags (`tag_id`) are added. Source criteria are mutually exclusive. If the source is `all_active_contacts` or `list_ids`, you can optionally choose to `exclude` contacts by `contact_id`. Use the activity link in the results to check the status of your request. For more use case information, see "[Add Tags to Contacts](/api_guide/add_tagging_activity.html)
     *
     * @tags Bulk Activities
     * @name PostTagAddContact
     * @summary Add Tags to Contacts
     * @request POST:/activities/contacts_taggings_add
     * @secure
     * @response `201` `PostTagAddContactData` Request successful. Activity queued for processing.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `429` `void` Too many requests. You exceeded 1,000 queued activities for this user account.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    postTagAddContact: (body: TagAddRemoveContacts, params: RequestParams = {}) =>
      this.request<PostTagAddContactData, ConstantContactApiError>({
        path: `/activities/contacts_taggings_add`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to create an asynchronous activity that deletes up to 500 tags. Deleted tags are automatically removed from tagged contacts. Use the `tag_ids` array of string values in the request body to specify which tags to delete.
     *
     * @tags Bulk Activities
     * @name PostTagDelete
     * @summary Delete Tags
     * @request POST:/activities/contacts_tags_delete
     * @secure
     * @response `201` `PostTagDeleteData` Request successful. Activity queued for processing.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `429` `void` Too many requests. You exceeded 1,000 queued activities for this user account.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    postTagDelete: (body: TagIdList500Limit, params: RequestParams = {}) =>
      this.request<PostTagDeleteData, ConstantContactApiError>({
        path: `/activities/contacts_tags_delete`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this endpoint to delete up to 100 custom fields for an account.
     *
     * @tags Bulk Activities
     * @name PostCustomFieldDelete
     * @summary Delete Custom Fields
     * @request POST:/activities/custom_fields_delete
     * @secure
     * @response `201` `PostCustomFieldDeleteData` Request successful. Activity queued for processing.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `429` `void` Too many requests. You exceeded 1,000 queued activities for this user account.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    postCustomFieldDelete: (body: CustomFieldId100, params: RequestParams = {}) =>
      this.request<PostCustomFieldDeleteData, ConstantContactApiError>({
        path: `/activities/custom_fields_delete`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        ...params,
      }),
  };
  contactExports = {
    /**
     * @description Use this endpoint to retrieve (GET) a CSV file containing exported contacts by providing the `activity_id` of a completed CSV export activity.
     *
     * @tags Bulk Activities
     * @name GetContactsExport
     * @summary Retrieve Exported Contacts File
     * @request GET:/contact_exports/{file_export_id}
     * @secure
     * @response `200` `GetContactsExportData` Request Successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `429` `void` Too many requests. You exceeded 1,000 queued activities for this user account.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    getContactsExport: (fileExportId: string, params: RequestParams = {}) =>
      this.request<GetContactsExportData, ConstantContactApiError>({
        path: `/contact_exports/${fileExportId}`,
        method: 'GET',
        type: ContentType.Json,
        ...params,
      }),
  };
  segments = {
    /**
     * @description Use this method to get a list of all segments associated with the account. You can sort segment results and limit the number of segments that display per page. Deleted segments are excluded from the results. For more use case information, see [Get All Segments](/api_guide/segment_get_all.html) in the API guide.
     *
     * @tags Segments
     * @name GetAccountSegments
     * @summary GET all Segments
     * @request GET:/segments
     * @secure
     * @response `200` `GetAccountSegmentsData` Request successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `429` `void` Too many requests. You exceeded the request rate limit.
     * @response `500` `void` There was a problem with our internal service.
     */
    getAccountSegments: (query: GetAccountSegmentsParams, params: RequestParams = {}) =>
      this.request<GetAccountSegmentsData, ConstantContactApiError>({
        path: `/segments`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * @description Use this method to create a new segment. You create segments to target a subset of your contacts that meet your specific criteria for a marketing campaign. The segment `name` must be unique. The `segment_criteria` requires single-string escaped JSON. Constant Contact uses the contact data that you specify in the `segment_criteria` to evaluate and identify the contacts you want to target. Contact data can be grouped from different data sources, including: -  **`tracking`**: Supports **or** and **and** groups. -  **`contact`**: Supports **or** and **and** groups. -  **`list_membership`**: Supports **or** groups. -  **`tags`**: Supports **or** groups. If you do not specify `list_membership` as criteria, Constant Contact evaluates all contacts in your account. To avoid returning a 400 error response, when specifying the `segment_criteria` do not request more than 500 email campaigns or a date range greater than 1825 days (5 years) be evaluated. For more use case information, see the [Segments Overview](/api_guide/segments_overview.html) in the API guide.
     *
     * @tags Segments
     * @name CreateSegment
     * @summary POST (create) a Segment
     * @request POST:/segments
     * @secure
     * @response `201` `CreateSegmentData` Segment successfully created.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `409` `void` Conflict. The resource you are creating or updating conflicts with an existing resource.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    createSegment: (body: SegmentData, params: RequestParams = {}) =>
      this.request<CreateSegmentData, ConstantContactApiError>({
        path: `/segments`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to get details about a segment, including the segment criteria. If you know the `segment_id` You can also use this method to get details about a deleted segment. For more use case information, see [Get a Segment's Details](/api_guide/segment_get.html) in the API guide.
     *
     * @tags Segments
     * @name GetSegmentDetail
     * @summary GET a Segment's Details
     * @request GET:/segments/{segment_id}
     * @secure
     * @response `200` `GetSegmentDetailData` The segment was successfully returned.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    getSegmentDetail: (segmentId: number, params: RequestParams = {}) =>
      this.request<GetSegmentDetailData, ConstantContactApiError>({
        path: `/segments/${segmentId}`,
        method: 'GET',
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to update an existing segment's name (`name`) and/or contact selection criteria (`segment_criteria`). You must specify both the `name` and the `segment_criteria` in the request body, even if you don't plan to update both. The segment's name must be unique and the JSON must be valid (requires single-string escaped JSON). To avoid returning a 400 error response, when specifying the `segment_criteria` do not request more than 500 email campaigns or a date range greater than 1825 days (5 years) be evaluated. For more use case information, see [Update Segment Details](/api_guide/segment_update.html) in the API guide.
     *
     * @tags Segments
     * @name UpdateSegment
     * @summary PUT (update) a Segment
     * @request PUT:/segments/{segment_id}
     * @secure
     * @response `200` `UpdateSegmentData` The segment was successfully updated.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `409` `void` Conflict. The resource you are creating or updating conflicts with an existing resource.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    updateSegment: (segmentId: number, body: SegmentData, params: RequestParams = {}) =>
      this.request<UpdateSegmentData, ConstantContactApiError>({
        path: `/segments/${segmentId}`,
        method: 'PUT',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to delete a segment from your account. Before deleting a segment, verify that the segment is not associated with a scheduled campaign. Deleted segments do not display in the results when using the `GET /segments` endpoint. If you know the `segment_id`, you can use the `GET /segments/{segment_id}` endpoint to view the deleted segment's details. A segment's details are preserved for external reference purposes, such as displaying the segment name in a campaign's history. For more use case information, see [Delete a Segment](/api_guide/segment_delete.html) in the API guide.
     *
     * @tags Segments
     * @name DeleteSegment
     * @summary DELETE a Segment
     * @request DELETE:/segments/{segment_id}
     * @secure
     * @response `204` `DeleteSegmentData` The segment was successfully deleted.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    deleteSegment: (segmentId: number, params: RequestParams = {}) =>
      this.request<DeleteSegmentData, ConstantContactApiError>({
        path: `/segments/${segmentId}`,
        method: 'DELETE',
        ...params,
      }),

    /**
     * @description Use this method to update an existing segment `name` with a new unique name in the request body. For more use case information, see [Rename a Segment](/api_guide/segment_rename.html) in the API guide.
     *
     * @tags Segments
     * @name UpdateSegmentName
     * @summary PATCH (rename) a Segment
     * @request PATCH:/segments/{segment_id}/name
     * @secure
     * @response `200` `UpdateSegmentNameData` The segment name was successfully updated.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `409` `void` Conflict. The resource you are creating or updating conflicts with an existing resource.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    updateSegmentName: (segmentId: number, body: SegmentName, params: RequestParams = {}) =>
      this.request<UpdateSegmentNameData, ConstantContactApiError>({
        path: `/segments/${segmentId}/name`,
        method: 'PATCH',
        body: body,
        type: ContentType.Json,
        ...params,
      }),
  };
  contacts = {
    /**
     * @description This endpoint GETs a specific contact resource (contact_id). Use the `include` query parameter to add any of the available contact sub-resources to the response payload.
     *
     * @tags Contacts
     * @name GetContact
     * @summary GET a Contact
     * @request GET:/contacts/{contact_id}
     * @secure
     * @response `200` `GetContactData` Request successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    getContact: ({ contactId, ...query }: GetContactParams, params: RequestParams = {}) =>
      this.request<GetContactData, ConstantContactApiError>({
        path: `/contacts/${contactId}`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * @description The PUT method updates an existing contact. You must include the `update_source` property in the PUT request payload. To restore  a deleted contact you must specify the `update_source` as `Account`. When updating any resource using PUT, all properties are updated, overwriting all previous values. Any properties left blank or not included in the request are overwritten with null value - however this does not apply to contact subresources. Add or change any of the subresources by including them in the PUT request payload. Omitted subresources are not overwritten with null. If the contact being updated is deleted, the contact will be revived.
     *
     * @tags Contacts
     * @name PutContact
     * @summary PUT (update) a Contact
     * @request PUT:/contacts/{contact_id}
     * @secure
     * @response `200` `PutContactData` Contact resource has been updated
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `409` `void` Conflict. The resource you are creating or updating conflicts with an existing resource.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    putContact: (contactId: string, body: ContactPutRequest, params: RequestParams = {}) =>
      this.request<PutContactData, ConstantContactApiError>({
        path: `/contacts/${contactId}`,
        method: 'PUT',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the contact identified by the contact_id path parameter. Deleted contacts won't receive email from you, and they don't count as active contacts. Unlike unsubscribed contacts, deleted contacts can be revived, or added back to an account. Learn how to [revive deleted contacts](/api_guide/contacts_delete.html#revive).
     *
     * @tags Contacts
     * @name DeleteContact
     * @summary DELETE a Contact
     * @request DELETE:/contacts/{contact_id}
     * @secure
     * @response `204` `DeleteContactData` Request successful; No content returned
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    deleteContact: (contactId: string, params: RequestParams = {}) =>
      this.request<DeleteContactData, ConstantContactApiError>({
        path: `/contacts/${contactId}`,
        method: 'DELETE',
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to return a collection of contacts. Use the query parameters to search for contacts that match specific contact properties and subresourse properties as criteria. For example, you can search using the contact's `email` address, `lists` memberships, and by the date range that a contact was created or updated. Use the `limit` query parameter to limit the number of results returned per page. Use the `include` query parameter to include contact sub-resources in the response and `include_count` to include the total number of contacts that meet your specified search criteria. By default, this method returns all contacts that are not deleted. Use the `status` query parameter with the value `all` to return all contacts including deleted contacts.
     *
     * @tags Contacts
     * @name GetContacts
     * @summary GET Contacts Collection
     * @request GET:/contacts
     * @secure
     * @response `200` `GetContactsData` Request successful
     * @response `202` `Contacts` Accepted
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    getContacts: (query: GetContactsParams, params: RequestParams = {}) =>
      this.request<GetContactsData, ConstantContactApiError>({
        path: `/contacts`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * @description Creates a new contact resource; you must include the `create_source` property and at least one of the following properties when creating a new contact: `first_name`, `last_name`, or `email_address` (`email_address` must be unique for each contact).
     *
     * @tags Contacts
     * @name CreateContact
     * @summary POST (create) a Contact
     * @request POST:/contacts
     * @secure
     * @response `201` `CreateContactData` New contact successfully created
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `409` `void` Conflict. The resource you are creating or updating conflicts with an existing resource.
     * @response `415` `void` Unsupported Media Type; the payload must be in JSON format, and Content-Type must be application/json
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    createContact: (body: ContactPostRequest, params: RequestParams = {}) =>
      this.request<CreateContactData, ConstantContactApiError>({
        path: `/contacts`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to create a new contact or update an existing contact. This method uses the `email_address` string value you include in the request body to determine if it should create an new contact or update an existing contact. Updates to existing contacts are partial updates. This method only updates the contact properties you include in the request body. Updates append new contact lists or custom fields to the existing `list_memberships` or `custom_fields` arrays. <div class="Msg"><p class="note-text">Only use this method when a contact gives you their explicit permission to send them emails. It is a violation of US and Canadian anti-spam laws, as well as a serious violation of the Constant Contact Terms of Service to use the Opt-in features of the API to opt a contact back in without his or her own action and consent.</p></div> When this method creates a new contact, it returns a 201 response code. When this method updates an existing contact, it returns a 200 response code. Updating a deleted contact restores the contact. The method automatically modifies the contact's `permission_to_send` and `opt_in_source` properties depending on the [Confirmed Opt-In](https://knowledgebase.constantcontact.com/articles/KnowledgeBase/5533-obtain-permission-to-send-email-campaigns-to-your-contacts-by-using-confirmed-opt-in) Constant Contact account setting: If Confirmed Opt-in is _enabled_, this method automatically sets the `permission_to_send` property as pending\_confirmation for new contacts. If Confirmed Opt-in is _disabled_, this method automatically sets the `permission_to_send` property as explicit and the `opt_in_source` property as `Contact` for new contacts. Updated contacts have their `permission_to_send` property set as explicit.
     *
     * @tags Contacts
     * @name CreateOrUpdateContact
     * @summary Create or Update a Contact
     * @request POST:/contacts/sign_up_form
     * @secure
     * @response `200` `CreateOrUpdateContactData` Contact successfully updated.
     * @response `201` `ContactCreateOrUpdateResponse` Contact successfully created.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `409` `void` Conflict. You sent simultaneous requests that are attempting to modify the same contact.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    createOrUpdateContact: (body: ContactCreateOrUpdateInput, params: RequestParams = {}) =>
      this.request<CreateOrUpdateContactData, ConstantContactApiError>({
        path: `/contacts/sign_up_form`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description <div class="Msg Msg--warning"><p class="note-text">Use this endpoint to migrate your locally stored V2 contact ids to the new V3 format. Developers are expected to use this endpoint sparingly. This endpoint is NOT intended for regular or repeated use. Constant Contact will eventually deprecate and remove this endpoint.</p></div> This GET call retrieves a collection of cross-referenced contact sequence IDs (`id` used in the V2 API) and UUIDs (`contact_id` used in the V3 API). This endpoint is intended for developers who have an existing V2 API integration, and are migrating their users to a new V3 API integration. The V2 and V3 APIs use different resource ID formats. Use the `sequence_ids` query parameter to specify a set of comma delimited V2 contacts ids to cross-referenced with their V3 `contact_ids`. See [Migrating to V3](/api_guide/migration_overview.html) to learn more.
     *
     * @tags Contacts
     * @name GetContactIdXrefs
     * @summary GET a collection of V2 and V3 API contact IDs
     * @request GET:/contacts/contact_id_xrefs
     * @secure
     * @response `200` `GetContactIdXrefsData` Request successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    getContactIdXrefs: (query: GetContactIdXrefsParams, params: RequestParams = {}) =>
      this.request<GetContactIdXrefsData, ConstantContactApiError>({
        path: `/contacts/contact_id_xrefs`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * @description Use this method to return SMS engagement details for a contact, such as SMS consent and advertising frequency details.
     *
     * @tags Contacts
     * @name GetSmsEngagementHistory
     * @summary GET SMS Engagement History for a Contact
     * @request GET:/contacts/sms_engagement_history/{contact_id}
     * @secure
     * @response `200` `GetSmsEngagementHistoryData` Request successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    getSmsEngagementHistory: (contactId: string, params: RequestParams = {}) =>
      this.request<GetSmsEngagementHistoryData, ConstantContactApiError>({
        path: `/contacts/sms_engagement_history/${contactId}`,
        method: 'GET',
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use to get the total contacts count for the account and the total contact-consent counts for each consent state. Optionally, to include the total number of new subscribers in the results, use `new_subscribers` in the `include` query parameter. To optimize open rates, reduce spam reports, and help grow your business,  you must value your contact's consent to receive or to not receive your emails.
     *
     * @tags Contacts
     * @name CountContact
     * @summary GET Contact Consent Counts
     * @request GET:/contacts/counts
     * @secure
     * @response `200` `CountContactData` Request successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    countContact: (query: CountContactParams, params: RequestParams = {}) =>
      this.request<CountContactData, ConstantContactApiError>({
        path: `/contacts/counts`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),
  };
  contactCustomFields = {
    /**
     * @description This GET call retrieves a `custom_field` resource, specified by `custom_field_id`.
     *
     * @tags Contacts Custom Fields
     * @name GetCustomField
     * @summary GET a custom_field
     * @request GET:/contact_custom_fields/{custom_field_id}
     * @secure
     * @response `200` `GetCustomFieldData` Request successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    getCustomField: (customFieldId: string, params: RequestParams = {}) =>
      this.request<GetCustomFieldData, ConstantContactApiError>({
        path: `/contact_custom_fields/${customFieldId}`,
        method: 'GET',
        ...params,
      }),

    /**
     * @description This PUT request updates an existing `custom_field` object.
     *
     * @tags Contacts Custom Fields
     * @name PutCustomField
     * @summary PUT (update) a custom_field
     * @request PUT:/contact_custom_fields/{custom_field_id}
     * @secure
     * @response `200` `PutCustomFieldData` Success - custom_field updated
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    putCustomField: (customFieldId: string, body: CustomFieldInput, params: RequestParams = {}) =>
      this.request<PutCustomFieldData, ConstantContactApiError>({
        path: `/contact_custom_fields/${customFieldId}`,
        method: 'PUT',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description This DELETE request deletes a custom_field from the user's account
     *
     * @tags Contacts Custom Fields
     * @name DeleteCustomField
     * @summary DELETE a custom_field
     * @request DELETE:/contact_custom_fields/{custom_field_id}
     * @secure
     * @response `204` `DeleteCustomFieldData` Request successful; No content returned
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    deleteCustomField: (customFieldId: string, params: RequestParams = {}) =>
      this.request<DeleteCustomFieldData, ConstantContactApiError>({
        path: `/contact_custom_fields/${customFieldId}`,
        method: 'DELETE',
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description This GET request returns all `custom_fields` defined in the user's account. <div class="Msg"><p class="note-text">This method does not currently support filtering results using the custom field update date.</p></div>
     *
     * @tags Contacts Custom Fields
     * @name GetCustomFields
     * @summary GET custom_fields Collection
     * @request GET:/contact_custom_fields
     * @secure
     * @response `200` `GetCustomFieldsData` Request successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    getCustomFields: (query: GetCustomFieldsParams, params: RequestParams = {}) =>
      this.request<GetCustomFieldsData, ConstantContactApiError>({
        path: `/contact_custom_fields`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * @description This POST request adds a new `custom_field` to the user's account. A user can configure up to 100 `custom_fields` in their account.
     *
     * @tags Contacts Custom Fields
     * @name PostCustomFields
     * @summary POST (create) a custom_field
     * @request POST:/contact_custom_fields
     * @secure
     * @response `201` `PostCustomFieldsData` New custom_field successfully created
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `409` `void` Conflict. The resource you are creating or updating conflicts with an existing resource.
     * @response `415` `void` Unsupported Media Type; the payload must be in JSON format, and Content-Type must be application/json.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    postCustomFields: (body: CustomFieldInput, params: RequestParams = {}) =>
      this.request<PostCustomFieldsData, ConstantContactApiError>({
        path: `/contact_custom_fields`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        ...params,
      }),
  };
  contactLists = {
    /**
     * @description Use this method to get details about a specific contact list (`list_id`).
     *
     * @tags Contact Lists
     * @name GetList
     * @summary GET a List
     * @request GET:/contact_lists/{list_id}
     * @secure
     * @response `200` `GetListData` Request successful
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    getList: ({ listId, ...query }: GetListParams, params: RequestParams = {}) =>
      this.request<GetListData, ConstantContactApiError>({
        path: `/contact_lists/${listId}`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * @description Updates an existing contact list resource, specified by `list_id`
     *
     * @tags Contact Lists
     * @name PutList
     * @summary PUT (update) a List
     * @request PUT:/contact_lists/{list_id}
     * @secure
     * @response `200` `PutListData` Request successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    putList: (listId: string, body: ListInput, params: RequestParams = {}) =>
      this.request<PutListData, ConstantContactApiError>({
        path: `/contact_lists/${listId}`,
        method: 'PUT',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the specified contact list and its membership. DELETE List requests are processed asynchronously, and you can track the status of the request by making a GET call to the URI shown in the `_links` property in the response.
     *
     * @tags Contact Lists
     * @name DeleteListActivity
     * @summary DELETE a List
     * @request DELETE:/contact_lists/{list_id}
     * @secure
     * @response `202` `DeleteListActivityData` Accepted
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    deleteListActivity: (listId: string, params: RequestParams = {}) =>
      this.request<DeleteListActivityData, ConstantContactApiError>({
        path: `/contact_lists/${listId}`,
        method: 'DELETE',
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to return details about all contact lists for the account. <div class="Msg"><p class="note-text">This method does not currently support filtering results using the contact list update date.</p></div>
     *
     * @tags Contact Lists
     * @name GetLists
     * @summary GET Lists Collection
     * @request GET:/contact_lists
     * @secure
     * @response `200` `GetListsData` Request successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    getLists: (query: GetListsParams, params: RequestParams = {}) =>
      this.request<GetListsData, ConstantContactApiError>({
        path: `/contact_lists`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * @description Create a new contact list resource
     *
     * @tags Contact Lists
     * @name CreateList
     * @summary POST (create) a List
     * @request POST:/contact_lists
     * @secure
     * @response `201` `CreateListData` New list successfully created
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `409` `void` Conflict. The resource you are creating or updating conflicts with an existing resource.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    createList: (body: ListInput, params: RequestParams = {}) =>
      this.request<CreateListData, ConstantContactApiError>({
        path: `/contact_lists`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description <div class="Msg Msg--warning"><p class="note-text">Use this endpoint to migrate your locally stored V2 contact list data to the new V3 format. Developers are expected to use this endpoint sparingly. This endpoint is NOT intended for regular or repeated use. Constant Contact will eventually deprecate and remove this endpoint.</p></div> This GET call retrieves a collection of cross-referenced list sequence IDs (`id` used in the V2 API) and UUIDs (`list_id` used in the V3 API). This endpoint is intended for developers who have an existing V2 API integration, and are migrating their users to a new V3 API integration. The V2 and V3 APIs use different resource ID formats. Use the `sequence_ids` query parameter to specify a set of comma delimited V2 list ids to cross-reference. See [Migrating Apps and Data to V3](/api_guide/migration_overview.html) to learn more."
     *
     * @tags Contact Lists
     * @name GetListIdXrefs
     * @summary GET a collection of V2 and V3 API List IDs
     * @request GET:/contact_lists/list_id_xrefs
     * @secure
     * @response `200` `GetListIdXrefsData` Request successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    getListIdXrefs: (query: GetListIdXrefsParams, params: RequestParams = {}) =>
      this.request<GetListIdXrefsData, ConstantContactApiError>({
        path: `/contact_lists/list_id_xrefs`,
        method: 'GET',
        query: query,
        ...params,
      }),
  };
  contactTags = {
    /**
     * @description Use this method to get tag details for a specified `tag_id`. Use the `include_count` query parameter to include or exclude the total number of contacts to which this tag is assigned. To learn more, see  [Get a Tag's Details](/api_guide/tags_get_single.html).
     *
     * @tags Contact Tags
     * @name GetTag
     * @summary GET Tag Details
     * @request GET:/contact_tags/{tag_id}
     * @secure
     * @response `200` `GetTagData` Request Successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     */
    getTag: ({ tagId, ...query }: GetTagParams, params: RequestParams = {}) =>
      this.request<GetTagData, ConstantContactApiError>({
        path: `/contact_tags/${tagId}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to rename an existing tag to a new unique tag name (`name`). The maximum length is 255 characters. The `tag_source` value cannot be updated using this method. You can set the `tag_source` value using the `POST contact_tags method`. [Learn more](/api_guide/tags_update.html)
     *
     * @tags Contact Tags
     * @name PutTag
     * @summary PUT (Update) a Tag
     * @request PUT:/contact_tags/{tag_id}
     * @secure
     * @response `200` `PutTagData` Request Successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `409` `void` Conflict. The resource you are creating or updating conflicts with an existing resource.
     * @response `500` `void` There was a problem with our internal service.
     */
    putTag: (tagId: string, body: TagPut, params: RequestParams = {}) =>
      this.request<PutTagData, ConstantContactApiError>({
        path: `/contact_tags/${tagId}`,
        method: 'PUT',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to create an activity used to un-assign a tag from all assigned contacts and delete the tag. This is an asynchronous activity. To view activity details for the delete request, use the href link returned in the response. [Learn more](/api_guide/tags_delete.html).
     *
     * @tags Contact Tags
     * @name DeleteTag
     * @summary DELETE a Tag
     * @request DELETE:/contact_tags/{tag_id}
     * @secure
     * @response `202` `DeleteTagData` The asynchronous request was successfully accepted. To view the results of the activity request, use the href link returned in the response.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `406` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     */
    deleteTag: (tagId: string, params: RequestParams = {}) =>
      this.request<DeleteTagData, ConstantContactApiError>({
        path: `/contact_tags/${tagId}`,
        method: 'DELETE',
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this endpoint to get details for all tags in your account. Use the <code>include_count</code> query parameter to include the total number of contacts assigned each tag. Use the <code>limit</code> query parameter to limit the number of tag results returned per page. To get the next page of results, copy the <code>cursor={the cursor ID}</code> from the resulting href link and add it (<code>&</code>) to the URL. For example: <p><code>/v3/contact_tags?limit=1&cursor=</code></p><p><code>bGltaXQ9MSZuZXh0PTJjZDgwMjdhLTc4YzAtMTFlOS1iZmQwLWZhMTYzZTZiMDFjMQ=</code></p> To learn more, see [Get Tags](/api_guide/tags_get.html).
     *
     * @tags Contact Tags
     * @name GetTags
     * @summary GET Details for All Tags
     * @request GET:/contact_tags
     * @secure
     * @response `200` `GetTagsData` Request Successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     */
    getTags: (query: GetTagsParams, params: RequestParams = {}) =>
      this.request<GetTagsData, ConstantContactApiError>({
        path: `/contact_tags`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to create a new tag. The tag `name` is required and must be unique and can include most common keyboard symbols. Optionally, when creating a new tag you can specify the source (`tag_source`) used to identify the contacts to tag in the request body. [Learn more](/api_guide/tags_create.html).
     *
     * @tags Contact Tags
     * @name PostTag
     * @summary POST (Create) a Tag
     * @request POST:/contact_tags
     * @secure
     * @response `201` `PostTagData` Request Successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `409` `void` Conflict. The resource you are creating or updating conflicts with an existing resource.
     * @response `500` `void` There was a problem with our internal service.
     */
    postTag: (body: TagPost, params: RequestParams = {}) =>
      this.request<PostTagData, ConstantContactApiError>({
        path: `/contact_tags`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        ...params,
      }),
  };
  emails = {
    /**
     * @description Use this method to list and get details about your email campaigns. By default, this method returns all email campaigns for the user account including deleted email campaigns. To get email campaigns within a date-range, use the `after_date` and `before_date` query parameters. This endpoint does not return campaign activity details for each email campaign in the collection. To get email campaign activity details for a single email campaign, use the GET `/emails/{campaign_id}` endpoint." <div class="Msg"><p class="note-text">This method does not currently support filtering results using the email campaign creation date.</p></div>
     *
     * @tags Email Campaigns
     * @name RetrieveEmailCampaignsUsingGet
     * @summary GET a Collection of Email Campaigns
     * @request GET:/emails
     * @secure
     * @response `200` `RetrieveEmailCampaignsUsingGetData` Request successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `429` `void` Too many requests. You exceeded the request rate limit.
     * @response `500` `void` There was a problem with our internal service.
     */
    retrieveEmailCampaignsUsingGet: (query: RetrieveEmailCampaignsUsingGetParams, params: RequestParams = {}) =>
      this.request<RetrieveEmailCampaignsUsingGetData, ConstantContactApiError>({
        path: `/emails`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to create a new email campaign. This method also creates new `primary_email` and `permalink` email campaign activities and associates them with the new email campaign. The request body must contain the `name` property and the `email_campaign_activities` array. The `name` must be unique. The `email_campaign_activities` array contains the main content of your email campaign and must include `format_type`, `from_name`, `from_email`, `reply_to_email`, `subject`, and `html_content` properties. The `from_email` address you use must use a verified email address for your account. NOTE: If you create an email campaign using a legacy (V7) format, Constant Contact automatically converts it to the newer custom code format.
     *
     * @tags Email Campaigns
     * @name CreateEmailCampaignUsingPost
     * @summary POST (Create) a New Email Campaign
     * @request POST:/emails
     * @secure
     * @response `200` `CreateEmailCampaignUsingPostData` Request successful. NOTE: If you created an email campaign using a legacy (V7) format, Constant Contact successfully converted it to the newer custom code format.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `409` `void` Conflict. The resource you are creating or updating conflicts with an existing resource.
     * @response `415` `void` Unsupported Media Type.
     * @response `429` `void` Too many requests. You exceeded the request rate limit.
     * @response `500` `void` There was a problem with our internal service.
     */
    createEmailCampaignUsingPost: (body: EmailCampaignComplete, params: RequestParams = {}) =>
      this.request<CreateEmailCampaignUsingPostData, ConstantContactApiError>({
        path: `/emails`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to get details about a single email campaign and campaign related activities. Details include the email campaign name, current status, create date, last update date, and a list of campaign activities; including the `campaign_activity_id` and `role`.
     *
     * @tags Email Campaigns
     * @name RetrieveEmailCampaignUsingGet
     * @summary GET Details About a Single Email Campaign
     * @request GET:/emails/{campaign_id}
     * @secure
     * @response `200` `RetrieveEmailCampaignUsingGetData` Request successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `429` `void` Too many requests. You exceeded the request rate limit.
     * @response `500` `void` There was a problem with our internal service.
     */
    retrieveEmailCampaignUsingGet: (campaignId: string, params: RequestParams = {}) =>
      this.request<RetrieveEmailCampaignUsingGetData, ConstantContactApiError>({
        path: `/emails/${campaignId}`,
        method: 'GET',
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to delete an email campaign and the email campaign activities associated with the email campaign. You cannot delete an email campaign when it has a `Scheduled` status. Constant Contact users can restore deleted email campaigns using the UI.
     *
     * @tags Email Campaigns
     * @name RemoveEmailCampaignUsingDelete
     * @summary DELETE an Email Campaign
     * @request DELETE:/emails/{campaign_id}
     * @secure
     * @response `204` `RemoveEmailCampaignUsingDeleteData` Email campaign successfully deleted. No response body returned.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `429` `void` Too many requests. You exceeded the request rate limit.
     * @response `500` `void` There was a problem with our internal service.
     */
    removeEmailCampaignUsingDelete: (campaignId: string, params: RequestParams = {}) =>
      this.request<RemoveEmailCampaignUsingDeleteData, ConstantContactApiError>({
        path: `/emails/${campaignId}`,
        method: 'DELETE',
        ...params,
      }),

    /**
     * @description Use this method to rename an email campaign. The name is not visible to contacts. The name must be unique and cannot exceed 80 characters. You cannot rename email campaigns that have a `Removed` status.
     *
     * @tags Email Campaigns
     * @name RenameEmailCampaignUsingPatch
     * @summary PATCH (Update) an Email Campaign Name
     * @request PATCH:/emails/{campaign_id}
     * @secure
     * @response `200` `RenameEmailCampaignUsingPatchData` Request successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `409` `void` Conflict. The resource you are creating or updating conflicts with an existing resource.
     * @response `415` `void` Unsupported Media Type.
     * @response `429` `void` Too many requests. You exceeded the request rate limit.
     * @response `500` `void` There was a problem with our internal service.
     */
    renameEmailCampaignUsingPatch: (campaignId: string, body: EmailCampaignName, params: RequestParams = {}) =>
      this.request<RenameEmailCampaignUsingPatchData, ConstantContactApiError>({
        path: `/emails/${campaignId}`,
        method: 'PATCH',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description <div class="Msg Msg--warning"><p class="note-text">Use this endpoint to migrate your locally stored V2 email campaign data to the new V3 format. Developers are expected to use this endpoint sparingly. This endpoint is NOT intended for regular or repeated use. Constant Contact will eventually deprecate and remove this endpoint.</p></div> Use this method to migrate your local V2 API email data to the V3 API format. For each value that you provide in the `v2_email_campaign_ids` query parameter, this method returns the corresponding V3 `campaign_id` and V3 `campaign_activity_id` UUID value. For more information on the changes to the email campaign resource model, see [V3 Email Campaign Resource Changes](/api_guide/v3_v2_email_campaign_deltas.html) in the API guide.
     *
     * @tags Email Campaigns
     * @name RetrieveXrefMappingsUsingGet
     * @summary GET a Collection of V2 and V3 API Email Campaign Identifiers
     * @request GET:/emails/campaign_id_xrefs
     * @secure
     * @response `200` `RetrieveXrefMappingsUsingGetData` Request successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `429` `void` Too many requests. You exceeded the request rate limit.
     * @response `500` `void` There was a problem with our internal service.
     */
    retrieveXrefMappingsUsingGet: (query: RetrieveXrefMappingsUsingGetParams, params: RequestParams = {}) =>
      this.request<RetrieveXrefMappingsUsingGetData, ConstantContactApiError>({
        path: `/emails/campaign_id_xrefs`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to return a specific email campaign activity. Each email campaign activity contains the email content, metadata, and styling information of an email. Email campaign activities can also contain either contact lists or segments. Constant Contact uses this information to determine who to send the email campaign activity to when you schedule it. You cannot get email campaign activities that have a `REMOVED` status.
     *
     * @tags Email Campaigns
     * @name RetrieveEmailCampaignActivityUsingGet
     * @summary GET a Single Email Campaign Activity
     * @request GET:/emails/activities/{campaign_activity_id}
     * @secure
     * @response `200` `RetrieveEmailCampaignActivityUsingGetData` Request successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `429` `void` Too many requests. You exceeded the request rate limit.
     * @response `500` `void` There was a problem with our internal service.
     */
    retrieveEmailCampaignActivityUsingGet: (
      { campaignActivityId, ...query }: RetrieveEmailCampaignActivityUsingGetParams,
      params: RequestParams = {},
    ) =>
      this.request<RetrieveEmailCampaignActivityUsingGetData, ConstantContactApiError>({
        path: `/emails/activities/${campaignActivityId}`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to update an email campaign activity by including the complete email campaign activity with your changes in the request body. The request body requires the `from_name`, `from_email`, `reply_to_email`, and `subject` properties. You can only update email campaign activities that have the `primary_email` role and that are in `DRAFT` or `Done` status. When you use a PUT method to update a resource, the V3 API overwrites any properties that are missing in the request body. However, the V3 API does not overwrite subresources that you omit in the request body or missing properties in subresources. This method considers `physical_address_in_footer`, `document_properties`, `html_content`, and `permalink_url` subresources of the email campaign activity.
     *
     * @tags Email Campaigns
     * @name UpdateEmailCampaignActivityUsingPut
     * @summary PUT (Update) An Email Campaign Activity
     * @request PUT:/emails/activities/{campaign_activity_id}
     * @secure
     * @response `200` `UpdateEmailCampaignActivityUsingPutData` Email campaign activity successfully updated.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `429` `void` Too many requests. You exceeded the request rate limit.
     * @response `500` `void` There was a problem with our internal service.
     */
    updateEmailCampaignActivityUsingPut: (
      campaignActivityId: string,
      body: EmailCampaignActivity,
      params: RequestParams = {},
    ) =>
      this.request<UpdateEmailCampaignActivityUsingPutData, ConstantContactApiError>({
        path: `/emails/activities/${campaignActivityId}`,
        method: 'PUT',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to return the current schedule for an email campaign activity. This schedule contains the date that Constant Contact will send the email campaign activity to contacts. If the email campaign activity is not in `SCHEDULED` status, this method returns an empty array and a 200 response code.
     *
     * @tags Email Scheduling
     * @name RetrieveEmailSchedulesUsingGet
     * @summary GET an Email Campaign Activity Schedule
     * @request GET:/emails/activities/{campaign_activity_id}/schedules
     * @secure
     * @response `200` `RetrieveEmailSchedulesUsingGetData` Request successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `429` `void` Too many requests. You exceeded the request rate limit.
     * @response `500` `void` There was a problem with our internal service.
     */
    retrieveEmailSchedulesUsingGet: (campaignActivityId: string, params: RequestParams = {}) =>
      this.request<RetrieveEmailSchedulesUsingGetData, ConstantContactApiError>({
        path: `/emails/activities/${campaignActivityId}/schedules`,
        method: 'GET',
        ...params,
      }),

    /**
     * @description Use this method to schedule when Constant Contact will send an email campaign activity to contacts. Use the `scheduled_date` request body property to enter the ISO-8601 format date that you want Constant Contact to send the email campaign activity on. Before you schedule an email campaign activity, you must update the email campaign activity and specify which contacts you want Constant Contact to send the email to. When you make a PUT call to update an email campaign activity, use the `contact_list_ids` or `segment_ids` array to add contacts. You can only schedule email campaign activities that have the `primary_email` role and are in `DRAFT`, `DONE`, or `ERROR` status. When you schedule an email campaign activity in `DONE` status, Constant Contact does not send the email campaign activity to contacts that already received it. Constant Contact only sends the email campaign activity to any new contacts in the contact lists or segment you use.
     *
     * @tags Email Scheduling
     * @name ScheduleEmailCampaignActivityUsingPost
     * @summary POST (Create) an Email Campaign Activity Schedule
     * @request POST:/emails/activities/{campaign_activity_id}/schedules
     * @secure
     * @response `201` `ScheduleEmailCampaignActivityUsingPostData` Request successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `429` `void` Too many requests. You exceeded the request rate limit.
     * @response `500` `void` There was a problem with our internal service.
     */
    scheduleEmailCampaignActivityUsingPost: (
      campaignActivityId: string,
      body: EmailScheduleInput,
      params: RequestParams = {},
    ) =>
      this.request<ScheduleEmailCampaignActivityUsingPostData, ConstantContactApiError>({
        path: `/emails/activities/${campaignActivityId}/schedules`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to unschedule an email campaign activity by deleting the schedule. You can only unschedule email campaign activities that are in `SCHEDULED` status. Unscheduling reverts the email campaign activity to the status prior to `SCHEDULED`.
     *
     * @tags Email Scheduling
     * @name UnscheduleEmailCampaignActivityUsingDelete
     * @summary DELETE an Email Campaign Activity Schedule
     * @request DELETE:/emails/activities/{campaign_activity_id}/schedules
     * @secure
     * @response `204` `UnscheduleEmailCampaignActivityUsingDeleteData` Email campaign activity schedule successfully deleted. No response body returned.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `429` `void` Too many requests. You exceeded the request rate limit.
     * @response `500` `void` There was a problem with our internal service.
     */
    unscheduleEmailCampaignActivityUsingDelete: (campaignActivityId: string, params: RequestParams = {}) =>
      this.request<UnscheduleEmailCampaignActivityUsingDeleteData, ConstantContactApiError>({
        path: `/emails/activities/${campaignActivityId}/schedules`,
        method: 'DELETE',
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to send a test email to specific email addresses. Test emails allow you to verify how the email campaign activity will look before you send it to contacts. This method uses the `email_addresses` array in the request body to determine the recipients of the test email. The test email does not process any dynamic content in the email campaign activity. Dynamic content includes contact and custom field variables. You can send up to 50 test emails each day. Each recipient you add to the `email_addresses` array in the request body counts towards this limit. Successfully sending a test email returns a 204 response code without a response body.
     *
     * @tags Email Scheduling
     * @name TestSendCampaignActivityUsingPost
     * @summary POST Test Send an Email Campaign Activity
     * @request POST:/emails/activities/{campaign_activity_id}/tests
     * @secure
     * @response `204` `TestSendCampaignActivityUsingPostData` Test email campaign activity successfully sent. No response body returned.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `429` `void` Too many requests. You exceeded the request rate limit.
     * @response `500` `void` There was a problem with our internal service.
     */
    testSendCampaignActivityUsingPost: (
      campaignActivityId: string,
      email_test_send_input: EmailTestSendInput,
      params: RequestParams = {},
    ) =>
      this.request<TestSendCampaignActivityUsingPostData, ConstantContactApiError>({
        path: `/emails/activities/${campaignActivityId}/tests`,
        method: 'POST',
        body: email_test_send_input,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to get the HTML preview of an email campaign activity. The HTML preview allows you to verify how the email campaign activity will look before you send it to contacts. Custom code emails (`format_type` 5) use the Constant Contact account owner's contact information to process contact, custom field, and account variables in the preview. This method returns the HTML preview encoded as a JSON string. You will need to decode the string before you can use it as valid HTML.
     *
     * @tags Email Scheduling
     * @name RetrieveEmailCampaignActivityPreviewUsingGet
     * @summary GET the HTML Preview of an Email Campaign Activity
     * @request GET:/emails/activities/{campaign_activity_id}/previews
     * @secure
     * @response `200` `RetrieveEmailCampaignActivityPreviewUsingGetData` Request successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `429` `void` Too many requests. You exceeded the request rate limit.
     * @response `500` `void` There was a problem with our internal service.
     */
    retrieveEmailCampaignActivityPreviewUsingGet: (campaignActivityId: string, params: RequestParams = {}) =>
      this.request<RetrieveEmailCampaignActivityPreviewUsingGetData, ConstantContactApiError>({
        path: `/emails/activities/${campaignActivityId}/previews`,
        method: 'GET',
        ...params,
      }),

    /**
     * @description Use this method to return the send history of an email campaign activity. This method returns the send history as an array containing an object for each time you sent a specific email campaign activity to contacts. Each send history object contains the email campaign activity send date, the number of contacts it was sent to, and the contact lists or segments used to send it. Each send history object also includes if the send attempt completed or encountered an error, and the reason why each error occurred. This method returns results in ascending order starting with the first send attempt. If the email campaign activity has not been sent to contacts, this method returns a 200 response and an empty array.
     *
     * @tags Email Scheduling
     * @name RetrieveEmailSendHistoryUsingGet
     * @summary GET the Send History of an Email Campaign Activity
     * @request GET:/emails/activities/{campaign_activity_id}/send_history
     * @secure
     * @response `200` `RetrieveEmailSendHistoryUsingGetData` Request successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `429` `void` Too many requests. You exceeded the request rate limit.
     * @response `500` `void` There was a problem with our internal service.
     */
    retrieveEmailSendHistoryUsingGet: (campaignActivityId: string, params: RequestParams = {}) =>
      this.request<RetrieveEmailSendHistoryUsingGetData, ConstantContactApiError>({
        path: `/emails/activities/${campaignActivityId}/send_history`,
        method: 'GET',
        ...params,
      }),

    /**
     * @description Get details about a resend to non-openers campaign activity. If resend activity does not exist for the specified `campaign_activity_id`, an empty list is returned in the results. You can only create one resend activity per email campaign.
     *
     * @tags Email Campaigns
     * @name RetrieveResendToNonOpenersUsingGet
     * @summary GET Details for a Resend to Non-openers Campaign Activity
     * @request GET:/emails/activities/{campaign_activity_id}/non_opener_resends
     * @secure
     * @response `200` `RetrieveResendToNonOpenersUsingGetData` Request successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `429` `void` Too many requests. You exceeded the request rate limit.
     * @response `500` `void` There was a problem with our internal service.
     */
    retrieveResendToNonOpenersUsingGet: (campaignActivityId: string, params: RequestParams = {}) =>
      this.request<RetrieveResendToNonOpenersUsingGetData, ConstantContactApiError>({
        path: `/emails/activities/${campaignActivityId}/non_opener_resends`,
        method: 'GET',
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this POST method to resend a primary campaign activity to contacts that did not open a campaign activity that has a current `status` of `Draft`, `Scheduled`, or `Done`. You can only create one resend activity per email campaign. After an email campaign activity is sent to contacts, Constant Contact waits the specified number of `delay_days` or `delay_minutes` (properties are mutually exclusive) before resending to non-openers. If you set both `delay_days` or `delay_minutes`, `delay_minutes` is ignored in the request. You can resend to non-openers a minimum of twelve hours (720 minutes) and a maximum of up to 10 days (or 10 x 1440 minutes) after the initial send date.
     *
     * @tags Email Campaigns
     * @name CreateResendToNonOpenersUsingPost
     * @summary POST a Resend to Non-openers Campaign Activity
     * @request POST:/emails/activities/{campaign_activity_id}/non_opener_resends
     * @secure
     * @response `201` `CreateResendToNonOpenersUsingPostData` Request successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `409` `void` Conflict. The resource you are creating or updating conflicts with an existing resource.
     * @response `429` `void` Too many requests. You exceeded the request rate limit.
     * @response `500` `void` There was a problem with our internal service.
     */
    createResendToNonOpenersUsingPost: (
      campaignActivityId: string,
      resend_schedule: ResendToNonOpenersInput,
      params: RequestParams = {},
    ) =>
      this.request<CreateResendToNonOpenersUsingPostData, ConstantContactApiError>({
        path: `/emails/activities/${campaignActivityId}/non_opener_resends`,
        method: 'POST',
        body: resend_schedule,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this `DELETE` method to delete (unschedule) a resend to non openers activity.
     *
     * @tags Email Campaigns
     * @name DeleteResendToNonOpenersUsingDelete
     * @summary DELETE a Resend to Non Openers Activity
     * @request DELETE:/emails/activities/{campaign_activity_id}/non_opener_resends/{resend_request_id}
     * @secure
     * @response `204` `DeleteResendToNonOpenersUsingDeleteData` Request successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `409` `void` Conflict. The resource you are creating or updating conflicts with an existing resource.
     * @response `429` `void` Too many requests. You exceeded the request rate limit.
     * @response `500` `void` There was a problem with our internal service.
     */
    deleteResendToNonOpenersUsingDelete: (
      campaignActivityId: string,
      resendRequestId: string,
      params: RequestParams = {},
    ) =>
      this.request<DeleteResendToNonOpenersUsingDeleteData, ConstantContactApiError>({
        path: `/emails/activities/${campaignActivityId}/non_opener_resends/${resendRequestId}`,
        method: 'DELETE',
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to get A/B test details for a primary email campaign activity, such as the alternate email subject line, the contact test percentage size, and the number of hours to wait to determine the winning subject line to use. Currently, A/B tests support subject line only.
     *
     * @tags Email Campaigns AB Tests
     * @name RetrieveEmailCampaignAbTestUsingGet
     * @summary GET A/B Test Details for an Email Campaign Activity
     * @request GET:/emails/activities/{campaign_activity_id}/abtest
     * @secure
     * @response `200` `RetrieveEmailCampaignAbTestUsingGetData` Request successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `409` `void` Conflict. The resource you are creating or updating conflicts with an existing resource.
     * @response `429` `void` Too many requests. You exceeded the request rate limit.
     * @response `500` `void` There was a problem with our internal service.
     */
    retrieveEmailCampaignAbTestUsingGet: (campaignActivityId: string, params: RequestParams = {}) =>
      this.request<RetrieveEmailCampaignAbTestUsingGetData, ConstantContactApiError>({
        path: `/emails/activities/${campaignActivityId}/abtest`,
        method: 'GET',
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to create a new A/B test for a primary email campaign activity. You must specify an alternative subject line, the percentage of contact to use for the A/B test, and the number of hours to wait after the A/B test is sent before determining the winning subject line. To create an A/B test, the campaign must have a `current_status` of `DRAFT`. When you create an A/B test, the `type` changes from Newsletter (code= `10`) to A/B Test (code= `57`).
     *
     * @tags Email Campaigns AB Tests
     * @name CreateEmailCampaignAbTestUsingPost
     * @summary POST (Create) an A/B Test for an Email Campaign Activity
     * @request POST:/emails/activities/{campaign_activity_id}/abtest
     * @secure
     * @response `201` `CreateEmailCampaignAbTestUsingPostData` Request successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `409` `void` Conflict. The resource you are creating or updating conflicts with an existing resource.
     * @response `429` `void` Too many requests. You exceeded the request rate limit.
     * @response `500` `void` There was a problem with our internal service.
     */
    createEmailCampaignAbTestUsingPost: (campaignActivityId: string, abtest: ABTestData, params: RequestParams = {}) =>
      this.request<CreateEmailCampaignAbTestUsingPostData, ConstantContactApiError>({
        path: `/emails/activities/${campaignActivityId}/abtest`,
        method: 'POST',
        body: abtest,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes an A/B Test on an primary email campaign activity. You can only delete A/B tests that have a `current_status` of `Draft`. Deleting an A/B tests reverts the email campaign activity `type` from A/B Test (code= `57`) back to NewsLetter (code= `10`). Constant Contact uses the original subject line, rather than the alternate A/B test subject line, when an A/B test is deleted.
     *
     * @tags Email Campaigns AB Tests
     * @name DeleteEmailCampaignAbTestUsingDelete
     * @summary DELETE an A/B Test for an Email Campaign Activity
     * @request DELETE:/emails/activities/{campaign_activity_id}/abtest
     * @secure
     * @response `204` `DeleteEmailCampaignAbTestUsingDeleteData` A/B test successfully deleted.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `409` `void` Conflict. The resource you are creating or updating conflicts with an existing resource.
     * @response `429` `void` Too many requests. You exceeded the request rate limit.
     * @response `500` `void` There was a problem with our internal service.
     */
    deleteEmailCampaignAbTestUsingDelete: (campaignActivityId: string, params: RequestParams = {}) =>
      this.request<DeleteEmailCampaignAbTestUsingDeleteData, ConstantContactApiError>({
        path: `/emails/activities/${campaignActivityId}/abtest`,
        method: 'DELETE',
        type: ContentType.Json,
        ...params,
      }),
  };
  reports = {
    /**
     * @description <p>Gets the tracking activity data for a single contact, sorted in descending activity date order.</p> <p>You must chose either the `tracking_activities_list` query parameter and or the `tracking_activity_type` query parameter to specify one or more tracking activity types In the request. The `tracking_activities_list`  and `tracking_activities_type` query parameters are mutually exclusive.</p> <table><tr><td colspan='2'>Valid tracking activity types</td></tr> <tr><td><b>em_sends</b></td><td>Send activities</td></tr> <tr><td><b>em_opens</b></td><td>Email open tracking activities</td></tr> <tr><td><b>em_clicks</b></td><td>Link click-through tracking activities</td></tr> <tr><td><b>em_bounces</b></td><td>Bounce tracking activities</td></tr> <tr><td><b>em_optouts</b></td><td>Opt-out tracking activities</td></tr><tr> <td><b>em_forwards</b></td><td>Forward to a friend tracking activities</td></tr> <tr><td><b>p_contact_open</b></td><td>Landing page opens</td></tr> <tr><td><b>p_contact_click</b></td><td>Landing page clicks</td></tr> <tr><td><b>p_contact_add</b></td><td>Landing page adds</td></tr> <tr><td><b>p_contact_update </b></td><td> Landing page updates</td></tr> </table>
     *
     * @tags Contacts Reporting
     * @name GetContactTracking
     * @summary GET Contact Activity Details
     * @request GET:/reports/contact_reports/{contact_id}/activity_details
     * @secure
     * @response `200` `GetContactTrackingData` successful operation
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    getContactTracking: ({ contactId, ...query }: GetContactTrackingParams, params: RequestParams = {}) =>
      this.request<GetContactTrackingData, ConstantContactApiError>({
        path: `/reports/contact_reports/${contactId}/activity_details`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description <p>Gets the average open and click rate for a given account and contact.<p>Looks at all tracking activities for bulk emails from a given contact over the given date range. Range cannot exceed 5 years.</p><p>Returns the rates and the number of campaign activities that were included in the calculation.</p><p>If no activities fall into the given date range, all rates will return 0 and the number of included activities will be 0.</p>
     *
     * @tags Contacts Reporting
     * @name GetContactOpenClickRate
     * @summary GET Average Open and Click Rates
     * @request GET:/reports/contact_reports/{contact_id}/open_and_click_rates
     * @secure
     * @response `200` `GetContactOpenClickRateData` Request Successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    getContactOpenClickRate: ({ contactId, ...query }: GetContactOpenClickRateParams, params: RequestParams = {}) =>
      this.request<GetContactOpenClickRateData, ConstantContactApiError>({
        path: `/reports/contact_reports/${contactId}/open_and_click_rates`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Get a list of the recent emails (aka, campaign activities) sent to a specific contact and a summary of the actions the contact took on that email for the most recent 200 campaigns.
     *
     * @tags Contacts Reporting
     * @name GetContactTrackingCount
     * @summary GET Contact Action Summary
     * @request GET:/reports/contact_reports/{contact_id}/activity_summary
     * @secure
     * @response `200` `GetContactTrackingCountData` successful operation
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    getContactTrackingCount: ({ contactId, ...query }: GetContactTrackingCountParams, params: RequestParams = {}) =>
      this.request<GetContactTrackingCountData, ConstantContactApiError>({
        path: `/reports/contact_reports/${contactId}/activity_summary`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to return link details, including the number of unique contacts that clicked each link in an email campaign activity, and the type of action associated with clicking each link. To include link details for links that were not clicked, set the `no_clicks` query parameter to `true`. You can return reporting data for `primary_email` and `resend` role email campaign activities. For more use case information, see [Get an Email Links Report](/api_guide/email_links_report.html) in the API guide.
     *
     * @tags Email Reporting
     * @name GetCampaignActivityLinkStats
     * @summary GET an Email Links Report
     * @request GET:/reports/email_reports/{campaign_activity_id}/links
     * @secure
     * @response `200` `GetCampaignActivityLinkStatsData` Request was successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    getCampaignActivityLinkStats: (
      { campaignActivityId, ...query }: GetCampaignActivityLinkStatsParams,
      params: RequestParams = {},
    ) =>
      this.request<GetCampaignActivityLinkStatsData, ConstantContactApiError>({
        path: `/reports/email_reports/${campaignActivityId}/links`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to get each contact that was sent a specific email campaign activity. This sends report includes general contact data such as the date and time that the email campaign activity was sent to a contact's email address, the contact's first and last name, and unique ID. This report lists the most recent activity first. For more use case information, see [Get an Sends report for an Email Campaign Activity](/api_guide/email_summary_sends_report.html) in the API guide.
     *
     * @tags Email Reporting
     * @name GetSends
     * @summary GET an Email Sends Report
     * @request GET:/reports/email_reports/{campaign_activity_id}/tracking/sends
     * @secure
     * @response `200` `GetSendsData` Request was successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    getSends: ({ campaignActivityId, ...query }: GetSendsParams, params: RequestParams = {}) =>
      this.request<GetSendsData, ConstantContactApiError>({
        path: `/reports/email_reports/${campaignActivityId}/tracking/sends`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to get each time a contact opened a specific email campaign activity. This report includes general contact information such as the contact's email address and unique ID, the date and time they opened the email campaign activity, and the type of device they used to open it. This report lists the most recent activity first. For more use case information, see [Get an Opens report for an Email Campaign Activity](/api_guide/email_summary_opens_report.html) in the API guide.
     *
     * @tags Email Reporting
     * @name GetOpens
     * @summary GET an Email Opens Report
     * @request GET:/reports/email_reports/{campaign_activity_id}/tracking/opens
     * @secure
     * @response `200` `GetOpensData` Request was successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    getOpens: ({ campaignActivityId, ...query }: GetOpensParams, params: RequestParams = {}) =>
      this.request<GetOpensData, ConstantContactApiError>({
        path: `/reports/email_reports/${campaignActivityId}/tracking/opens`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to get a unique opens report that provides details about the last time that each contact opened the specified email campaign activity. This report includes general contact information such as the contact's email address and unique ID, the date and time they opened the email campaign activity, and the type of device they used to open it. This report lists the most recent activity first. For more use case information, see [Get an Unique Opens Report for an Email Campaign Activity](/api_guide/email_summary_unique_opens_report.html) in the API guide.
     *
     * @tags Email Reporting
     * @name GetUniqueOpens
     * @summary GET an Email Unique Opens Report
     * @request GET:/reports/email_reports/{campaign_activity_id}/tracking/unique_opens
     * @secure
     * @response `200` `GetUniqueOpensData` Request was successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    getUniqueOpens: ({ campaignActivityId, ...query }: GetUniqueOpensParams, params: RequestParams = {}) =>
      this.request<GetUniqueOpensData, ConstantContactApiError>({
        path: `/reports/email_reports/${campaignActivityId}/tracking/unique_opens`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to get a report listing each contact that was sent, but did not open the specified email campaign activity. This report lists contact information such as the contact's email address and unique ID, and the date and time that the email campaign activity was sent. This report lists the most recent activity first. For more use case information, see [Get a Did Not Opens Report for an Email Campaign Activity](/api_guide/email_summary_non_opens_report.html) in the API guide.
     *
     * @tags Email Reporting
     * @name GetDidNotOpens
     * @summary GET an Email Did Not Opens Report
     * @request GET:/reports/email_reports/{campaign_activity_id}/tracking/didnotopens
     * @secure
     * @response `200` `GetDidNotOpensData` Request was successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    getDidNotOpens: ({ campaignActivityId, ...query }: GetDidNotOpensParams, params: RequestParams = {}) =>
      this.request<GetDidNotOpensData, ConstantContactApiError>({
        path: `/reports/email_reports/${campaignActivityId}/tracking/didnotopens`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to get each time a contact clicked a link, the click date and time, and the device type they used. Use the `url_id` query parameter to get a clicks report for a specific link URL. Clicks report data is sorted with most recent activity listed first.
     *
     * @tags Email Reporting
     * @name GetClicks
     * @summary GET an Email Clicks Report
     * @request GET:/reports/email_reports/{campaign_activity_id}/tracking/clicks
     * @secure
     * @response `200` `GetClicksData` Request was successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    getClicks: ({ campaignActivityId, ...query }: GetClicksParams, params: RequestParams = {}) =>
      this.request<GetClicksData, ConstantContactApiError>({
        path: `/reports/email_reports/${campaignActivityId}/tracking/clicks`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to get a report listing each time a contact forwarded the email campaign activity using the forwarding link in the email footer. The report includes general contact information, such as the contact's email address and unique ID, and the date and time that the email campaign activity was forwarded. Forwards report data is sorted with the most recent activity listed first. For more use case information, see [Get an Email Forwards Report](/api_guide/email_summary_forwards_report.html) in the API guide.
     *
     * @tags Email Reporting
     * @name GetForwards
     * @summary GET an Email Forwards Report
     * @request GET:/reports/email_reports/{campaign_activity_id}/tracking/forwards
     * @secure
     * @response `200` `GetForwardsData` Request was successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    getForwards: ({ campaignActivityId, ...query }: GetForwardsParams, params: RequestParams = {}) =>
      this.request<GetForwardsData, ConstantContactApiError>({
        path: `/reports/email_reports/${campaignActivityId}/tracking/forwards`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to get a report listing each contact that clicked the unsubscribe link in the email campaign activity to opt-out from receiving emails sent from your Constant Contact account. This report includes contact information, such as the contact's email address, unique ID, and the opt-out date and time. Opt-out report data is sorted with the most recent activity listed first. For more use case information, see [Get an Email Opt-outs Report](/api_guide/email_summary_optouts_report.html) in the API guide.
     *
     * @tags Email Reporting
     * @name GetOptouts
     * @summary GET an Email Opt-outs Report
     * @request GET:/reports/email_reports/{campaign_activity_id}/tracking/optouts
     * @secure
     * @response `200` `GetOptoutsData` Request was successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    getOptouts: ({ campaignActivityId, ...query }: GetOptoutsParams, params: RequestParams = {}) =>
      this.request<GetOptoutsData, ConstantContactApiError>({
        path: `/reports/email_reports/${campaignActivityId}/tracking/optouts`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to get a report listing contact bounce data for the specified email campaign activity. This report lists the most recent bounce data first and includes contact information, such as the contact's email address, unique ID, and the email bounce date and time. Use the <code>bounce_code</code> query parameter to limit the type of bounce data to return. For more use case information, see [Get a Bounces Report for an Email Campaign Activity](/api_guide/email_summary_bounces_report.html) in the API guide.
     *
     * @tags Email Reporting
     * @name GetBounces
     * @summary GET an Email Bounces Report
     * @request GET:/reports/email_reports/{campaign_activity_id}/tracking/bounces
     * @secure
     * @response `200` `GetBouncesData` Request was successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    getBounces: ({ campaignActivityId, ...query }: GetBouncesParams, params: RequestParams = {}) =>
      this.request<GetBouncesData, ConstantContactApiError>({
        path: `/reports/email_reports/${campaignActivityId}/tracking/bounces`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to get aggregate email campaign statistics for up to five hundred email campaigns. The response results include the total number of times that each contact uniquely interacted with each tracked campaign activity. Results are sorted in descending order by the date that the email was last sent (<code>last_sent_date</code>). Use the <code>limit</code> query parameter to limit the number of email campaign summary reports listed on each page. For more use case information, see "[Get an Email Campaign Summary Report](/api_guide/email_bulk_campaign_summary_report.html)"
     *
     * @tags Email Reporting
     * @name GetAllBulkEmailCampaignSummaries
     * @summary GET an Email Campaigns Summary Report
     * @request GET:/reports/summary_reports/email_campaign_summaries
     * @secure
     * @response `200` `GetAllBulkEmailCampaignSummariesData` Request was successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     */
    getAllBulkEmailCampaignSummaries: (query: GetAllBulkEmailCampaignSummariesParams, params: RequestParams = {}) =>
      this.request<GetAllBulkEmailCampaignSummariesData, ConstantContactApiError>({
        path: `/reports/summary_reports/email_campaign_summaries`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to get email campaign performance tracking statistics for one or more campaigns, including the total number of times contacts interacted with your campaigns and how. For each `campaign_id`, this method returns lists that include total counts (`stats`) for each type of tracked email and relevant campaign-related percentages (`percents`). It also returns the date and time at which the campaign stats were last refreshed. If any specified `campaign_id` is invalid, a 404 error response is returned for all campaigns.
     *
     * @tags Email Reporting
     * @name GetEmailSummary
     * @summary GET an Email Campaign Stats Report
     * @request GET:/reports/stats/email_campaigns/{campaign_ids}
     * @secure
     * @response `200` `GetEmailSummaryData` Request was successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     */
    getEmailSummary: (campaignIds: string, params: RequestParams = {}) =>
      this.request<GetEmailSummaryData, ConstantContactApiError>({
        path: `/reports/stats/email_campaigns/${campaignIds}`,
        method: 'GET',
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to get performance tracking statistics for up to ten email campaign activities. Statistics include the total number of times contacts interacted with your campaigns and how. For each `campaign_activity_id`, this method returns the `campaign_id`, the total counts (`stats`) for each type of tracked email activity, and the date and time that Constant Contact last refreshed (`last_refresh_time`) the `stats`. When requesting statistics for multiple email campaign activities, if one or more of the `campaign_activity_ids` do not exist, were deleted, or do not have any stats associated with it, the `campaign_activity_ids` and error details display under `errors`. If any single specified `campaign_activity_id` is invalid (malformed), a 404 error response is returned for all campaign activities.
     *
     * @tags Email Reporting
     * @name GetEmailCampaignActivitySummary
     * @summary GET an Email Campaign Activity Stats Report
     * @request GET:/reports/stats/email_campaign_activities/{campaign_activity_ids}
     * @secure
     * @response `200` `GetEmailCampaignActivitySummaryData` Request was successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     */
    getEmailCampaignActivitySummary: (campaignActivityIds: string, params: RequestParams = {}) =>
      this.request<GetEmailCampaignActivitySummaryData, ConstantContactApiError>({
        path: `/reports/stats/email_campaign_activities/${campaignActivityIds}`,
        method: 'GET',
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method get details about each contact that clicked a link on a landing page campaign activity. Unique contact clicks are identified by both the `contact_id` and `url_id`. The same contact may appear more than once in the results, if they clicked more than one link on the landing page. The resulting contact data is listed with most recent activity first.
     *
     * @tags Landing Pages Reporting
     * @name GetUniqueContactClicks
     * @summary GET a Unique Contacts Clicks Landing Page Report
     * @request GET:/reports/landing_pages/campaign_details/{campaign_activity_id}/p_unique_contact_clicks
     * @secure
     * @response `200` `GetUniqueContactClicksData` Request was successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    getUniqueContactClicks: (
      { campaignActivityId, ...query }: GetUniqueContactClicksParams,
      params: RequestParams = {},
    ) =>
      this.request<GetUniqueContactClicksData, ConstantContactApiError>({
        path: `/reports/landing_pages/campaign_details/${campaignActivityId}/p_unique_contact_clicks`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method get details about each contact that opens a link on a landing page. Contacts are uniquely identified by `contact_id`.  The resulting contact data is listed with most recent activity first.
     *
     * @tags Landing Pages Reporting
     * @name GetUniqueContactOpens
     * @summary GET a Unique Contacts Opens Landing Page Report
     * @request GET:/reports/landing_pages/campaign_details/{campaign_activity_id}/p_unique_contact_opens
     * @secure
     * @response `200` `GetUniqueContactOpensData` Request was successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    getUniqueContactOpens: (
      { campaignActivityId, ...query }: GetUniqueContactOpensParams,
      params: RequestParams = {},
    ) =>
      this.request<GetUniqueContactOpensData, ConstantContactApiError>({
        path: `/reports/landing_pages/campaign_details/${campaignActivityId}/p_unique_contact_opens`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method get contact details for each time a contact opens a link on a landing page.  The resulting contact data is listed with most recent activity first.
     *
     * @tags Landing Pages Reporting
     * @name GetContactOpens
     * @summary GET a Contacts Opens Landing Page Report
     * @request GET:/reports/landing_pages/campaign_details/{campaign_activity_id}/p_contact_opens
     * @secure
     * @response `200` `GetContactOpensData` Request was successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    getContactOpens: ({ campaignActivityId, ...query }: GetContactOpensParams, params: RequestParams = {}) =>
      this.request<GetContactOpensData, ConstantContactApiError>({
        path: `/reports/landing_pages/campaign_details/${campaignActivityId}/p_contact_opens`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to get contact details for each contact that updated their contact data from a landing page. Contacts are uniquely identified by `contact_id`.  The resulting contact data is listed with most recent activity first.
     *
     * @tags Landing Pages Reporting
     * @name GetUniqueContactUpdates
     * @summary GET a Unique Contacts Updates Landing Page Report
     * @request GET:/reports/landing_pages/campaign_details/{campaign_activity_id}/p_unique_contact_updates
     * @secure
     * @response `200` `GetUniqueContactUpdatesData` Request was successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    getUniqueContactUpdates: (
      { campaignActivityId, ...query }: GetUniqueContactUpdatesParams,
      params: RequestParams = {},
    ) =>
      this.request<GetUniqueContactUpdatesData, ConstantContactApiError>({
        path: `/reports/landing_pages/campaign_details/${campaignActivityId}/p_unique_contact_updates`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method to get details about each contact added to the account from a specified landing page. Contacts are identified by `contact_id`. The resulting contact data is listed with most recent activity first.
     *
     * @tags Landing Pages Reporting
     * @name GetContactAdds
     * @summary GET a Unique Contacts Adds Landing Page Report
     * @request GET:/reports/landing_pages/campaign_details/{campaign_activity_id}/p_unique_contact_adds
     * @secure
     * @response `200` `GetContactAddsData` Request was successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    getContactAdds: ({ campaignActivityId, ...query }: GetContactAddsParams, params: RequestParams = {}) =>
      this.request<GetContactAddsData, ConstantContactApiError>({
        path: `/reports/landing_pages/campaign_details/${campaignActivityId}/p_unique_contact_adds`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this method get details about unique contacts that click a link on a landing page to opt in to receiving SMS text messages. Contacts are uniquely identified by `contact_id``.  The resulting contact data is listed with most recent activity first.
     *
     * @tags Landing Pages Reporting
     * @name GetUniqueContactSmsOptIns
     * @summary GET a Unique Contacts SMS Opt-In Landing Page Report
     * @request GET:/reports/landing_pages/campaign_details/{campaign_activity_id}/p_unique_contact_sms_optins
     * @secure
     * @response `200` `GetUniqueContactSmsOptInsData` Request was successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    getUniqueContactSmsOptIns: (
      { campaignActivityId, ...query }: GetUniqueContactSmsOptInsParams,
      params: RequestParams = {},
    ) =>
      this.request<GetUniqueContactSmsOptInsData, ConstantContactApiError>({
        path: `/reports/landing_pages/campaign_details/${campaignActivityId}/p_unique_contact_sms_optins`,
        method: 'GET',
        query: query,
        type: ContentType.Json,
        ...params,
      }),
  };
  partner = {
    /**
     * @description Get all Constant Contact client accounts managed under your technology partner account. Use the `limit` query parameter to set the number of accounts to return on each results page. Use the `account_type` query parameter to filter client account results by type: `all` (default), `managed`, or `unmanaged`. Only technology partners can access partner endpoints and partner endpoints cannot be tested using the API reference tester. For more use case information, see [Get all Partner Client Accounts](/api_guide/partners_accts_get.html) in the API guide.
     *
     * @tags Technology Partners
     * @name GetPartnerSiteOwners
     * @summary GET Partner Client Accounts
     * @request GET:/partner/accounts
     * @secure
     * @response `200` `GetPartnerSiteOwnersData` Request successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     */
    getPartnerSiteOwners: (query: GetPartnerSiteOwnersParams, params: RequestParams = {}) =>
      this.request<GetPartnerSiteOwnersData, ConstantContactApiError>({
        path: `/partner/accounts`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * @description Use this POST method to create a new Constant Contact client account under your partner account, set up the billing plan for the account, and to add the new client to the default contact list. Newly created accounts are free trials which give the user up to 60 days to try Constant Contact before buying. Trial accounts have limits depending on the services that are included. If a field validation error occurs, a 400 response message is returned. If provisioning does not complete successfully due to unavailable dependencies, such as database or dependent services, a 503 response message is returned. By default, the client account provision data is stored and processed when provisioning becomes available. If the partner client account has the Single Sign On (SSO) for all users feature enabled, all users in the client account can sign into the account using SSO. This feature must be set up through the Constant Contact Partner team. For feature details, see [Configuring Identity Provider Initiated SSO](/api_guide/partner_sso_config.html). Some client account features will be supported in future releases. For more use case information, see [Create a new Partner Client Account](/api_guide/partners_accts_create.html) in the API guide.
     *
     * @tags Technology Partners
     * @name Provision
     * @summary POST (create) a Partner Client Account
     * @request POST:/partner/accounts
     * @secure
     * @response `201` `ProvisionData` Request successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `409` `void` Conflict. The resource you are creating or updating conflicts with an existing resource.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     * @response `503` `void` Our internal service is temporarily unavailable.
     */
    provision: (provision: Provision, params: RequestParams = {}) =>
      this.request<ProvisionData, ConstantContactApiError>({
        path: `/partner/accounts`,
        method: 'POST',
        body: provision,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this GET method to return billing plan details for a client's Constant Contact account. If you are not on the latest billing plan, contact the Constant Contact Partner Team. However, older billing plans and `plan_type` enum values will continue to be supported. Only technology partners can access partner endpoints and partner endpoints cannot be tested using the API reference tester. For more use case information, see [Get Billing Plan Details for a Client Account](/api_guide/partners_plans_get.html) in the API guide.
     *
     * @tags Technology Partners
     * @name GetPlan
     * @summary GET Billing Plan Details for a Client Account
     * @request GET:/partner/accounts/{encoded_account_id}/plan
     * @secure
     * @response `200` `GetPlanData` Request successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `405` `void` Unsupported method used.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    getPlan: (encodedAccountId: string, params: RequestParams = {}) =>
      this.request<GetPlanData, ConstantContactApiError>({
        path: `/partner/accounts/${encodedAccountId}/plan`,
        method: 'GET',
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this PUT method to update the type of billing plan to assign to the Constant Contact client account. The type of billing plan determines which Constant Contact product features that the client account can access. The billing plan type (`plan_type`) that you enter must already exist in the plan group. Attempting to change to a plan that is currently not available within your partner plan group results in a 400 error response code. When you create a new client account, the `plan_type` defaults to `TRIAL` and the `billing_day_of_month` defaults to `null`. The `billing_day_of_month` property is required if a client account is not set up to use single billing. You can change the day of month (`billing_day_of_month`) in which to bill a client account only when changing the `plan_type` value from `TRIAL` to a different `plan_type`, otherwise the `billing_day_of_month` value you enter is ignored. You can choose to enter a specific day of the month or accept the default value, which is the day on which the `plan_type` value changes from a `TRIAL` plan to a different `plan_type`. Changing the `plan_type` from `TRIAL` to another `plan_type` automatically changes the `billing_status` from `Trial` to `Open`. Only technology partners can access partner endpoints and partner endpoints cannot be tested using the API reference tester. If you are not on the latest billing plan, contact the Constant Contact Partner Team. However, older billing plans and `plan_type` enum values will continue to be supported. For more use case information, see [PUT Billing Plan Details for a Client Account](/api_guide/partners_plans_update.html) in the API guide.
     *
     * @tags Technology Partners
     * @name SetPlan
     * @summary PUT (update) Billing Plan Details for a Client Account
     * @request PUT:/partner/accounts/{encoded_account_id}/plan
     * @secure
     * @response `200` `SetPlanData` Request successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `405` `void` Unsupported method used.
     * @response `415` `void` Unsupported Media Type.
     * @response `500` `void` There was a problem with our internal service.
     */
    setPlan: (encodedAccountId: string, body: PlanInfo, params: RequestParams = {}) =>
      this.request<SetPlanData, ConstantContactApiError>({
        path: `/partner/accounts/${encodedAccountId}/plan`,
        method: 'PUT',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this PUT method to cancel a client's Constant Contact account. If the specified client account or technology partner account does not exist, the system returns a 404 error response. If the client account exists under a different technology partner account, the system returns a 400 error response. To get a list of all canceled client accounts (`"billing_status": "Canceled"`), make a `GET` call to the `/partner/accounts` endpoint. Only technology partners can access partner endpoints and partner endpoints cannot be tested using the API reference tester. For more use case information, see [Cancel the Billing Plan for a Client Account](/api_guide/partners_plans_cancel.html) in the API guide."
     *
     * @tags Technology Partners
     * @name CancelAccount
     * @summary PUT Cancel the Billing Plan for a Client Account
     * @request PUT:/partner/accounts/{encoded_account_id}/status/cancel
     * @secure
     * @response `200` `CancelAccountData` Request successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     */
    cancelAccount: (encodedAccountId: string, body: AccountCancellation, params: RequestParams = {}) =>
      this.request<CancelAccountData, ConstantContactApiError>({
        path: `/partner/accounts/${encodedAccountId}/status/cancel`,
        method: 'PUT',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this API method to send an API request on behalf of a managed client account in your partnership. The request body properties you use in this partner API call determine the structure of the API request that Constant Contact sends on behalf of the managed client account. This includes the HTTP url, HTTP method type, request body, request url parameters, request query parameters, and headers that for the request. You can use this `/partner/accounts/{encoded_account_id}/account_operations/sync` API method to send a request using non-partner v3 API methods.
     *
     * @tags Technology Partners
     * @name PartnerAccountOperationsPostSync
     * @summary POST Send an API request on Behalf of a Client Account
     * @request POST:/partner/accounts/{encoded_account_id}/account_operations/sync
     * @secure
     * @response `200` `PartnerAccountOperationsPostSyncData` Request successful. The response body schema returned by this method corresponds to the specific API request you provided in the request body.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` Not found. This may indicate that the encoded_account_id you provided is invalid, or the API request you are sending on behalf of an account returned a 404.
     * @response `500` `void` There was a problem with our internal service.
     */
    partnerAccountOperationsPostSync: (
      encodedAccountId: string,
      body: PartnerAccountOperationsRequest,
      params: RequestParams = {},
    ) =>
      this.request<PartnerAccountOperationsPostSyncData, ConstantContactApiError>({
        path: `/partner/accounts/${encodedAccountId}/account_operations/sync`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this endpoint to create a new user under a partner client account that has the Single Sign On (SSO) for all users feature is enabled.
     *
     * @tags Technology Partners
     * @name CreateSsoUser
     * @summary POST a User Under a Partner's SSO-Enabled Client Account
     * @request POST:/partner/accounts/{encoded_account_id}/users/sso
     * @secure
     * @response `201` `CreateSsoUserData` Request successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `409` `void` Conflict. The resource you are creating or updating conflicts with an existing resource.
     * @response `500` `void` There was a problem with our internal service.
     */
    createSsoUser: (encodedAccountId: string, user: SSOUser, params: RequestParams = {}) =>
      this.request<CreateSsoUserData, ConstantContactApiError>({
        path: `/partner/accounts/${encodedAccountId}/users/sso`,
        method: 'POST',
        body: user,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this GET method to return a collection containing your application's webhook subscriptions.
     *
     * @tags Technology Partners Webhooks
     * @name GetWebhooksCollection
     * @summary GET a Collection of Webhook Topic Subscriptions
     * @request GET:/partner/webhooks/subscriptions
     * @secure
     * @response `200` `GetWebhooksCollectionData` Request successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     */
    getWebhooksCollection: (params: RequestParams = {}) =>
      this.request<GetWebhooksCollectionData, ConstantContactApiError>({
        path: `/partner/webhooks/subscriptions`,
        method: 'GET',
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this GET method to return subscription information for a certain `topic_id`. Possible `topic_id` values include: * `1` - Billing tier upgrade. * `2` - Billing tier downgrade. * `3` - Account cancelled. * `4` - Account disabled.
     *
     * @tags Technology Partners Webhooks
     * @name GetWebhooksTopic
     * @summary GET Webhook Topic Subscription
     * @request GET:/partner/webhooks/subscriptions/{topic_id}
     * @secure
     * @response `200` `GetWebhooksTopicData` Request successful
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     */
    getWebhooksTopic: (topicId: string, params: RequestParams = {}) =>
      this.request<GetWebhooksTopicData, ConstantContactApiError>({
        path: `/partner/webhooks/subscriptions/${topicId}`,
        method: 'GET',
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this PUT method to subscribe your application to a `topic_id` or to update the callback URI for an existing subscription. Possible `topic_id` values include: * `1` - Billing tier upgrade. * `2` - Billing tier downgrade. * `3` - Account cancelled. * `4` - Account disabled. After you subscribe your application, Constant Contact will automatically start sending POST notifications for your chosen topic to your application's callback URI. This is an example of the POST notification request body: ``` {"url":"https://api.cc.email/v3/partner/accounts/a07e1my9tbw0/plan", "api_key":"90ed8738-5190-44a3-bc12-c172930db12c", "event_type":"tier.increase"} ``` </br> If your application does not return a success response after receiving a notification, Constant Contact will retry sending the POST notification at 1 minute intervals for up to an hour.
     *
     * @tags Technology Partners Webhooks
     * @name PutWebhooksTopic
     * @summary PUT Webhook Topic Subscription
     * @request PUT:/partner/webhooks/subscriptions/{topic_id}
     * @secure
     * @response `200` `PutWebhooksTopicData` Request successful.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     */
    putWebhooksTopic: (topicId: string, body: WebhooksSubscriptionBody, params: RequestParams = {}) =>
      this.request<PutWebhooksTopicData, ConstantContactApiError>({
        path: `/partner/webhooks/subscriptions/${topicId}`,
        method: 'PUT',
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this DELETE method to unsubscribe your application from notifications on a certain `topic_id`. Possible `topic_id` values include: * `1` - Billing tier upgrade. * `2` - Billing tier downgrade. * `3` - Account cancelled. * `4` - Account disabled.
     *
     * @tags Technology Partners Webhooks
     * @name DeleteWebhooksSubscriptions
     * @summary DELETE Webhook Topic Subscriptions
     * @request DELETE:/partner/webhooks/subscriptions/{topic_id}
     * @secure
     * @response `204` `DeleteWebhooksSubscriptionsData` Webhooks subscription successfully deleted.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     */
    deleteWebhooksSubscriptions: (topicId: string, params: RequestParams = {}) =>
      this.request<DeleteWebhooksSubscriptionsData, ConstantContactApiError>({
        path: `/partner/webhooks/subscriptions/${topicId}`,
        method: 'DELETE',
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Use this POST method to validate a webhook subscription by triggering a test notification for your chosen webhook `topic_id`. Possible `topic_id` values include: * `1` - Billing tier upgrade. * `2` - Billing tier downgrade. * `3` - Account cancelled. * `4` - Account disabled. After you successfully send this request, Constant Contact will automatically send a POST notification to your chosen topic's callback URI with example data.
     *
     * @tags Technology Partners Webhooks
     * @name TestSendWebhooksTopic
     * @summary POST Test Send Webhook Notification
     * @request POST:/partner/webhooks/subscriptions/{topic_id}/tests
     * @secure
     * @response `201` `TestSendWebhooksTopicData` Test notification successfully sent to your callback URI.
     * @response `400` `void` Bad request. Either the JSON was malformed or there was a data validation error.
     * @response `401` `void` The Access Token used is invalid.
     * @response `403` `void` Forbidden request. You lack the necessary scopes, you lack the necessary user privileges, or the application is deactivated.
     * @response `404` `void` The requested resource was not found.
     * @response `500` `void` There was a problem with our internal service.
     */
    testSendWebhooksTopic: (topicId: string, params: RequestParams = {}) =>
      this.request<TestSendWebhooksTopicData, ConstantContactApiError>({
        path: `/partner/webhooks/subscriptions/${topicId}/tests`,
        method: 'POST',
        type: ContentType.Json,
        ...params,
      }),
  };
}
