// custom types

/** oAuth scopes supported by Constant Contact v3 API */
export type ConstantContactOAuthScope =
  | 'account_read'
  | 'account_update'
  | 'contact_data'
  | 'offline_access'
  | 'campaign_data';
/** Token for saving Constant Contact Authentication State */
export type ConstantContactToken = {
  token_type: 'Bearer';
  expires_at: Date | string;
  access_token: string;
  scope: ConstantContactOAuthScope[];
  refresh_token: string;
};

/**
 * ConstantContactOptions
 * @param clientId - The client ID of your app.
 * @param clientSecret - The client secret of your app.
 * @param token - The Constant Contact token of your app. This is useful for restoring a previous session.
 * @param onTokenUpdate - A callback function that is called when the token is updated. Useful for storing the token in your app.
 * @param enableThrows - If true, the library will throw an error when the API returns an error. If false, the library will return the error in the response object.
 */
export type ConstantContactOptions = {
  clientId: string;
  clientSecret: string;
  token?: ConstantContactToken;
  onTokenUpdate?: (token: ConstantContactToken) => void;
  enableThrows?: boolean;
};

/** https://developer.constantcontact.com/api_guide/server_flow.html */
export type ConstantContactAuthorizationCodeFlowOptions = {
  redirectUri: string;
  responseType: 'code';
  state: string;
  scope?: ConstantContactOAuthScope[];
  nonce?: string;
};

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

export type UserPrivilegesResource = {
  /**
   * Identifies a user privilege in Constant Contact.
   * @example 30
   */
  privilege_id?: number;
  /**
   * The name of the Constant Contact user privilege.
   * @example "campaign:create"
   */
  privilege_name?: string;
}[];

export interface AuthorizationErrorSchema {
  /**
   * Identifies the type of error.
   * @example "unauthorized"
   */
  error_key?: string;
  /**
   * Description of the error.
   * @example "Unauthorized"
   */
  error_message?: string;
}

export type APIErrorSchema = {
  /**
   * Identifies the type of error.
   * @example "contacts.api.validation.error"
   */
  error_key?: string;
  /**
   * Description of the error.
   * @example "include_membership_count does not have a valid value"
   */
  error_message?: string;
}[];

export interface CompanyLogo {
  /**
   * The internal URL used to get the company logo image file hosted locally in your account's MyLibrary.
   * @example "https://files.constantcontact.com/3a20c2f5701/780c1ff3-7fc6-4712-a862-ad5b6af57d38.jpg."
   */
  url?: string;
  /**
   * The external URL used to get the company logo image file that is hosted on an external website.
   * @example "https://www.google.com/images/logos/google_logo_41.png."
   */
  external_url?: string;
  /**
   * The internal ID used to identify the image hosted in your account's MyLibrary.
   * @example "ACCOUNT.IMAGE.5"
   */
  internal_id?: string;
}

export interface Customer {
  /**
   * Email addresses that are associated with the Constant Contact account owner.
   * @example "InstaPrinz@gmail.com"
   */
  contact_email?: string;
  /**
   * The account owner's contact phone number (up to 25 characters in length).
   * @maxLength 25
   * @example "5081111212"
   */
  contact_phone?: string;
  /**
   * The uppercase two-letter <a href='https://en.wikipedia.org/wiki/ISO_3166-1' target='_blank'>ISO 3166-1 code</a> representing the organization's country.
   * @example "US"
   */
  country_code?: string;
  /**
   * The readOnly encoded account ID that uniquely identifies the account.
   * @example "p07e1l8cdif9dl"
   */
  encoded_account_id?: string;
  /**
   * The account owner's first name.
   * @example "Lola"
   */
  first_name?: string;
  /**
   * The account owner's last name.
   * @example "Zang"
   */
  last_name?: string;
  /**
   * The name of the organization that is associated with this account.
   * @example "InstaPrinz"
   */
  organization_name?: string;
  /**
   * The phone number of the organization that is associated with this account.
   * @example "333-333-3335"
   */
  organization_phone?: string;
  /**
   * The uppercase two letter <a href='https://en.wikipedia.org/wiki/ISO_3166-1' target='_blank'>ISO 3166-1 code</a> for the organization's state. This property is required if the <code>country_code</code> is US (United States).
   * @example "MA"
   */
  state_code?: string;
  /**
   * The time zone that is automatically set based on the <code>state_code</code> setting; as defined in the IANA time-zone database (see http://www.iana.org/time-zones).
   * @example "US/Eastern"
   */
  time_zone_id?: string;
  /**
   * The organization's website URL.
   * @example "http://InstaPriz4me.com"
   */
  website?: string;
  physical_address?: {
    /**
     * Line 1 of the organization's street address.
     * @minLength 1
     * @maxLength 80
     * @example "123 Maple Street"
     */
    address_line1: string;
    /**
     * Line 2 of the organization's street address.
     * @minLength 1
     * @maxLength 80
     * @example "Unit 1"
     */
    address_line2?: string;
    /**
     * Line 3 of the organization's street address.
     * @minLength 1
     * @maxLength 80
     * @example "Apartment 234"
     */
    address_line3?: string;
    /**
     * The city where the organization is located.
     * @example "Boston"
     */
    city: string;
    /**
     * The two letter ISO 3166-1 code for the organization's state and only used if the <code>country_code</code> is <code>US</code> or <code>CA</code>. If not, exclude this property from the request body.
     * @maxLength 2
     * @example "MA"
     */
    state_code?: string;
    /**
     * Use if the state where the organization is physically located is not in the United States or Canada. If  <code>country_code</code> is  <code>US</code> or <code>CA</code>, exclude this property from the request body.
     * @example "EXCLUDE if country_code is US."
     */
    state_name?: string;
    /**
     * The postal code address (ZIP code) of the organization. This property is required if the <code>state_code</code> is <code>US</code> or <code>CA</code>, otherwise exclude this property from the request body.
     * @example "02451"
     */
    postal_code?: string;
    /**
     * The two letter <a href='https://en.wikipedia.org/wiki/ISO_3166-1' target='_blank'>ISO 3166-1 code</a> for the organization's country.
     * @example "US"
     */
    country_code: string;
  };
  /** Used to include an existing company logo in the response body. If a company logo does not exist, nothing is returned in the response body. This property is optional. */
  company_logo?: CompanyLogo;
}

export interface CustomerPut {
  /**
   * The confirmed email address that is associated with the account owner.
   * @example "InstaPrinz@gmail.com"
   */
  contact_email?: string;
  /**
   * The account owner's contact phone number (up to 25 characters in length).
   * @maxLength 25
   * @example "5081111212"
   */
  contact_phone?: string;
  /**
   * The two-letter <a href='https://en.wikipedia.org/wiki/ISO_3166-1' target='_blank'>ISO 3166-1 code</a> representing the organization's country.
   * @example "US"
   */
  country_code?: string;
  /**
   * The read only encoded account ID that uniquely identifies the account.
   * @example "p07e1l8cdif9dl"
   */
  encoded_account_id?: string;
  /**
   * The account owner's first name.
   * @example "Lola"
   */
  first_name?: string;
  /**
   * The account owner's last name.
   * @example "Zang"
   */
  last_name?: string;
  /**
   * The name of the organization that is associated with this account.
   * @example "InstaPrinz"
   */
  organization_name?: string;
  /**
   * The phone number of the organization that is associated with this account.
   * @example "333-333-3335"
   */
  organization_phone?: string;
  /**
   * The two letter <a href='https://en.wikipedia.org/wiki/ISO_3166-1' target='_blank'>ISO 3166-1 code</a> used to specify the state to associate with the account. This property is required if the <code>country_code</code> is US (United States).
   * @example "MA"
   */
  state_code?: string;
  /**
   * The time zone to use for the account; as defined in the IANA time-zone database (see http://www.iana.org/time-zones).
   * @example "US/Eastern"
   */
  time_zone_id?: string;
  /**
   * The organization's website URL.
   * @example "http://InstaPriz4me.com"
   */
  website?: string;
}

export interface AccountPhysicalAddress {
  /**
   * Line 1 of the organization's street address.
   * @minLength 1
   * @maxLength 80
   * @example "123 Maple Street"
   */
  address_line1: string;
  /**
   * Line 2 of the organization's street address.
   * @minLength 1
   * @maxLength 80
   * @example "Unit 1"
   */
  address_line2?: string;
  /**
   * Line 3 of the organization's street address.
   * @minLength 1
   * @maxLength 80
   * @example "Apartment 234"
   */
  address_line3?: string;
  /**
   * The city where the organization is located.
   * @example "Boston"
   */
  city: string;
  /**
   * The two letter ISO 3166-1 code for the organization's state and only used if the <code>country_code</code> is <code>US</code> or <code>CA</code>. If not, exclude this property from the request body.
   * @maxLength 2
   * @example "MA"
   */
  state_code?: string;
  /**
   * Use if the state where the organization is physically located is not in the United States or Canada. If  <code>country_code</code> is  <code>US</code> or <code>CA</code>, exclude this property from the request body.
   * @example "EXCLUDE if country_code is US."
   */
  state_name?: string;
  /**
   * The postal code address (ZIP code) of the organization. This property is required if the <code>state_code</code> is <code>US</code> or <code>CA</code>, otherwise exclude this property from the request body.
   * @example "02451"
   */
  postal_code?: string;
  /**
   * The two letter <a href='https://en.wikipedia.org/wiki/ISO_3166-1' target='_blank'>ISO 3166-1 code</a> for the organization's country.
   * @example "US"
   */
  country_code: string;
}

export type AccountEmails = {
  /**
   * An email address associated with a Constant Contact account owner.
   * @maxLength 80
   */
  email_address?: string;
  /**
   * The unique ID for an email address in a Constant Contact account.
   * @format int64
   * @min 1
   */
  email_id?: number;
  /** The confirmation status of the account email address. When you add a new email address to an account, Constant Contact automatically sends an email to that address with a link to confirm it. You can use any account email address with a <code>CONFIRMED</code> status to create an email campaign. */
  confirm_status?: string;
  /**
   * The date that the email address changed to <code>CONFIRMED</code> status in ISO-8601 format.
   * @format date-time
   */
  confirm_time?: string;
  /**
   * Describes who confirmed the email address. Valid values are:
   *   <ul>
   *   <li>SITE_OWNER — The Constant Contact account owner confirmed the email address.</li>
   *   <li>SUPPORT — Constant Contact support staff confirmed the email address.</li>
   *   <li>FORCEVERIFY — Constant Contact confirmed the email address without sending a confirmation email.</li>
   *   <li>PARTNER — A Constant Contact partner confirmed the email address.</li>
   *   </ul>
   */
  confirm_source_type?: string;
  /** Specifies the current role of a confirmed email address in an account. Each email address can have multiple roles or no role. Possible role values are: <ul> <li>CONTACT — The contact email for the Constant Contact account owner. Each account can only have one <code>CONTACT</code> role email.</li> <li>BILLING — The billing address for the Constant Contact account. Each account can only have one <code>BILLING</code> role email.</li> <li>JOURNALING — An email address that Constant Contact forwards all sent email campaigns to as part of the partner journaling compliance feature.</li> <li>REPLY_TO — The contact email used in the email campaign signature. Each account can only have one <code>REPLY_TO</code> role email.</li> <li>OTHER — An email address that does not fit into the other categories.</li> </ul> You can use any confirmed email address in the email campaign <code>from_email</code> and <code>reply_to_email</code> headers. */
  roles?: string[];
  /** The planned role for an unconfirmed email address. Possible role values are: <ul> <li>CONTACT — The contact email for the Constant Contact account owner. Each account can only have one <code>CONTACT</code> role email.</li> <li>BILLING — The billing address for the Constant Contact account. Each account can only have one <code>BILLING</code> role email.</li> <li>JOURNALING — The email address that Constant Contact forwards all sent email campaigns to as part of the partner journaling compliance feature.</li> <li>REPLY_TO — The contact email used in the email campaign signature. Each account can only have one <code>REPLY_TO</code> role email. </li> <li>OTHER — An email address that does not fit into the other categories.</li> </ul> */
  pending_roles?: string[];
}[];

export interface AccountEmailInput {
  /**
   * The new email address you want to add to a Constant Contact account.
   * @maxLength 80
   * @example "dlang@example.com"
   */
  email_address?: string;
}

export interface AccountEmailCreateResponse {
  /**
   * An email address associated with a Constant Contact account owner.
   * @maxLength 80
   * @example "dlang@example.com"
   */
  email_address?: string;
  /**
   * The unique ID for an email address in a Constant Contact account.
   * @format int64
   * @min 1
   * @example 2
   */
  email_id?: number;
  /**
   * The confirmation status of the account email address. When you add a new email address to an account, Constant Contact automatically sends an email to that address with a link to confirm it. You can use any account email address with a <code>CONFIRMED</code> status to create an email campaign.
   * @example "UNCONFIRMED"
   */
  confirm_status?: string;
}

export interface ActivityStatus {
  /**
   * The total number of items to be processed.
   * @example 2200
   */
  items_total_count?: number;
  /**
   * The number of items processed in the activity request.
   * @example 2100
   */
  items_completed_count?: number;
  /**
   * The total number of contacts in an import contacts request.
   * @example 8750
   */
  person_count?: number;
  /**
   * The number of non-correctable errors encountered during an import contacts request.
   * @example 1
   */
  error_count?: number;
  /**
   * The number of correctable errors. Correctable errors include invalid email address format, birthday or anniversary format error, or does not have minimal contact information (no name or email address). Correctable errors are available in the product UI to correct.
   * @example 1
   */
  correctable_count?: number;
  /**
   * The number of contacts that cannot be added to a list because they were previously unsubscribed, valid for contacts_file_ or json_import requests.
   * @example 1
   */
  cannot_add_to_list_count?: number;
  /**
   * The number of lists processed in an add or remove list membership activity request.
   * @example 3
   */
  list_count?: number;
}

export interface ActivityStatusExportLink {
  /** HATEOS-style link to the activity status (this object). */
  self?: {
    /** @example "/v3/activities/04fe9a97-a579-43c5-bb1a-58ed29bf0a6a" */
    href?: string;
  };
  /** Link to an activity result resource; as an example, for file_export, the link to the exported contacts file. */
  results?: {
    /** @example "/v3/contacts_exports/04fe9a97-a579-43c5-bb1a-58ed29bf0a6a" */
    href?: string;
  };
}

export interface Link {
  /** @example "/v3/activities/04fe9a97-a579-43c5-bb1a-58ed29bf0a6a" */
  href?: string;
}

export interface PagingLinks {
  next?: Link;
}

export interface Activities {
  /** A list of bulk activity jobs and status submitted by the account over the past 10 days. */
  activities?: {
    /**
     * Unique ID for the activity.
     * @format uuid
     * @example "86b90820-cc52-11ea-9dad-fa163e3d9194"
     */
    activity_id?: string;
    /**
     * The state of the request: <p><ul>
     *   <li>initialized - request has been received</li>
     *   <li>processing - request is being processed</li>
     *   <li>completed - job completed</li>
     *   <li>cancelled - request was cancelled</li>
     *   <li>failed - job failed to complete</li>
     *   <li>timed_out - the request timed out before completing"</li>
     *   </ul> </p>
     * @example "initialized"
     */
    state?: string;
    /**
     * Timestamp showing when we began processing the activity request, in ISO-8601 format.
     * @format date-time
     * @example "2016-01-23T13:48:44.108Z"
     */
    started_at?: string;
    /**
     * Timestamp showing when we completed processing the activity, in ISO-8601 format.
     * @format date-time
     * @example "2016-01-23T13:48:44.108Z"
     */
    completed_at?: string;
    /**
     * Timestamp showing when we created the activity, in ISO-8601 format.
     * @format date-time
     * @example "2016-01-23T13:48:44.108Z"
     */
    created_at?: string;
    /**
     * Timestamp showing when we last updated the activity, in ISO-8601 format.
     * @format date-time
     * @example "2016-01-23T13:48:44.108Z"
     */
    updated_at?: string;
    /**
     * Name of the file used for an add_contacts activity.
     * @example "2016-21-04-contact_import.xls"
     */
    source_file_name?: string;
    /**
     * Shows the percent done for an activity that we are still processing.
     * @example 75
     */
    percent_done?: number;
    /** Array of messages describing the errors that occurred. */
    activity_errors?: string[];
    status?: ActivityStatus;
    _links?: ActivityStatusExportLink;
  }[];
  _links?: PagingLinks;
}

/** Generic bulk activity status response object */
export interface Activity {
  /**
   * Unique ID for the activity.
   * @format uuid
   * @example "86b90820-cc52-11ea-9dad-fa163e3d9194"
   */
  activity_id?: string;
  /**
   * The state of the request: <p><ul> <li>initialized - request has been received</li> <li>processing - request is being processed</li> <li>completed - job completed</li> <li>cancelled - request was cancelled</li> <li>failed - job failed to complete</li> <li>timed_out - the request timed out before completing"</li> </ul> </p>
   * @example "initialized"
   */
  state?: string;
  /**
   * Timestamp showing when we began processing the activity request, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  started_at?: string;
  /**
   * Timestamp showing when we completed processing the activity, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  completed_at?: string;
  /**
   * Timestamp showing when we created the activity, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  created_at?: string;
  /**
   * Timestamp showing when we last updated the activity, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  updated_at?: string;
  /**
   * Name of the file used for an add_contacts activity.
   * @example "2016-21-04-contact_import.xls"
   */
  source_file_name?: string;
  /**
   * Shows the percent done for an activity that we are still processing.
   * @example 75
   */
  percent_done?: number;
  /** Array of messages describing the errors that occurred. */
  activity_errors?: string[];
  status?: ActivityStatus;
  _links?: ActivityStatusExportLink;
}

/** You can export contact objects to a CSV file. By default, all contacts in the user's account are exported if none of the following properties are included: <br/><li> By contact_id - you can specify up to 500 specific contacts. <li>list_id - you can specify up to 50 lists. You can use the status parameter with list_id<li>status - you can export contacts by status (unsubscribed, active, removed); this property can be used with list_ids. */
export interface ContactsExport {
  /**
   * Exports up to 500 specific contacts. This property is mutually exclusive with <code>list_ids</code>.
   * @maxItems 500
   */
  contact_ids?: string[];
  /**
   * Exports all of the contacts inside of up to 50 contact lists. This property is mutually exclusive with <code>contact_ids</code>.
   * @maxItems 50
   */
  list_ids?: string[];
  /**
   * Specify the <code>segment_id</code> from which you want to export all contacts that meet the specified <code>segment_criteria</code>. This property is mutually exclusive with <code>contact_ids</code> and <code>list_ids</code>. You can only specify one <code>segment_id</code>.
   * @example 12
   */
  segment_id?: number;
  /** Use this array to export specific contact fields. You must export <code>email_address</code> to successfully export <code>email_optin_source</code>, <code>email_optin_date</code>, <code>email_optout_source</code>, <code>email_optout_date</code>, or <code>email_optout_reason</code>. */
  fields?: string[];
  /**
   * Allows you to export only contacts that have a specific status value. Possible values are <code>active</code>, <code>unsubscribed</code>, or <code>removed</code>
   * @example "unsubscribed"
   */
  status?: string;
}

/** Activity status for contact_exports activity */
export interface ActivityExportStatus {
  /**
   * Unique ID for the activity.
   * @format uuid
   * @example "86b90820-cc52-11ea-9dad-fa163e3d9194"
   */
  activity_id?: string;
  /**
   * <p> The state of the request: <ul>
   *  <li>initialized - request has been received</li>
   *  <li>processing - request is being processed</li>
   *  <li>completed - job completed</li>
   *  <li>cancelled - request was cancelled</li>
   *  <li>failed - job failed to complete</li>
   *  <li>timed_out - the request timed out before completing"</li>
   *  </ul> </p>
   * @example "initialized"
   */
  state?: string;
  /**
   * Timestamp showing when we began processing the activity request, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  started_at?: string;
  /**
   * Timestamp showing when we completed processing the activity, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  completed_at?: string;
  /**
   * Timestamp showing when we created the activity, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  created_at?: string;
  /**
   * Timestamp showing when we last updated the activity, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  updated_at?: string;
  /**
   * Shows the percent done for an activity that we are still processing.
   * @example 75
   */
  percent_done?: number;
  /** Array of messages describing the errors that occurred. */
  activity_errors?: string[];
  status?: {
    /**
     * The total number of contacts to export.
     * @example 8751
     */
    items_total_count?: number;
    /**
     * The number of contacts processed for export.
     * @example 351
     */
    items_completed_count?: number;
  };
  _links?: ActivityStatusExportLink;
}

/** CSV file containing exported contacts */
export type ActivityGetExport = string;

export interface ContactDelete {
  /**
   * Specify up to 500 contacts by <code>contact_id</code> to delete; mutually exclusive with <code>list_ids</code>.
   * @maxItems 500
   */
  contact_ids?: string[];
  /**
   * The contacts on the lists (up to 50) specified will be deleted; mutually exclusive with <code>contact_ids</code>.
   * @maxItems 50
   */
  list_ids?: string[];
}

/** Activity status for contact_delete activity */
export interface ActivityDeleteStatus {
  /**
   * Unique ID for the activity.
   * @format uuid
   * @example "86b90820-cc52-11ea-9dad-fa163e3d9194"
   */
  activity_id?: string;
  /**
   * The state of the request: <p><ul> <li>initialized - request has been received</li> <li>processing - request is being processed</li> <li>completed - job completed</li> <li>cancelled - request was cancelled</li> <li>failed - job failed to complete</li> <li>timed_out - the request timed out before completing"</li> </ul> </p>
   * @example "initialized"
   */
  state?: string;
  /**
   * Timestamp showing when we began processing the activity request, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  started_at?: string;
  /**
   * Timestamp showing when we completed processing the activity, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  completed_at?: string;
  /**
   * Timestamp showing when we created the activity, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  created_at?: string;
  /**
   * Timestamp showing when we last updated the activity, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  updated_at?: string;
  /**
   * Shows the percent done for an activity that we are still processing.
   * @example 75
   */
  percent_done?: number;
  /** Array of messages describing the errors that occurred. */
  activity_errors?: string[];
  status?: {
    /**
     * The number of lists if request specifies contacts to delete by list_ids.
     * @example 4
     */
    list_count?: number;
    /**
     * The total number of contacts to delete.
     * @example 375
     */
    items_total_count?: number;
    /**
     * The number of contacts deleted.
     * @example 351
     */
    items_completed_count?: number;
  };
  _links?: {
    /** Link to the activity status (this object) to retrieve the activity status. */
    self?: {
      /** @example "/v3/activities/04fe9a97-a579-43c5-bb1a-58ed29bf0a6a" */
      href?: string;
    };
  };
}

export interface ActivityStatusLink {
  /** HATEOS-style link to the activity status (this object). */
  self?: {
    /** @example "/v3/activities/04fe9a97-a579-43c5-bb1a-58ed29bf0a6a" */
    href?: string;
  };
}

/** Activity status for contacts_json_import and contacts_file_import activities */
export interface ActivityImport {
  /**
   * Unique ID for the activity.
   * @format uuid
   * @example "86b90820-cc52-11ea-9dad-fa163e3d9194"
   */
  activity_id?: string;
  /**
   * The state of the request:
   *  <p><ul>
   *    <li>initialized - request has been received</li>
   *   <li>processing - request is being processed</li>
   *   <li>completed - job completed</li>
   *   <li>cancelled - request was cancelled</li>
   *   <li>failed - job failed to complete</li>
   *   <li>timed_out - the request timed out before completing"</li>
   * </ul> </p>
   * @example "initialized"
   */
  state?: string;
  /**
   * Timestamp showing when we began processing the activity request, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:40.108Z"
   */
  started_at?: string;
  /**
   * Timestamp showing when we completed processing the activity, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  completed_at?: string;
  /**
   * Timestamp showing when we created the activity, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  created_at?: string;
  /**
   * Timestamp showing when we last updated the activity, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  updated_at?: string;
  /**
   * Name of the file used for an file_import activity.
   * @example "2016-21-04-contact_import.xls"
   */
  source_file_name?: string;
  /**
   * Shows the percent done for an activity that we are still processing.
   * @example 75
   */
  percent_done?: number;
  /** Array of messages describing the errors that occurred. */
  activity_errors?: string[];
  status?: {
    /**
     * The total number of rows in the import file.
     * @example 87
     */
    items_total_count?: number;
    /**
     * The total number of contacts in the import file.
     * @example 20
     */
    person_count?: number;
    /**
     * The number of non-correctable errors encountered during the file import.
     * @example 1
     */
    error_count?: number;
    /**
     * The number of correctable errors. Correctable errors are: invalid email address format, birthday or anniversary format error, or does not have minimal contact information (no name or email address). Correctable errors are available in the product UI to correct.
     * @example 1
     */
    correctable_count?: number;
    /**
     * The number of previously unsubscribed contacts in the import - they cannot be added to a list.
     * @example 1
     */
    cannot_add_to_list_count?: number;
  };
  _links?: ActivityStatusLink;
}

export interface JsonImportContact {
  /**
   * The email address of the contact. This method identifies each unique contact using their email address.
   * @maxLength 50
   * @example "joe.jones@example.com"
   */
  email: string;
  /**
   * The first name of the contact.
   * @maxLength 50
   * @example "Joe"
   */
  first_name?: string;
  /**
   * The last name of the contact.
   * @maxLength 50
   * @example "Jones"
   */
  last_name?: string;
  /**
   * The job title of the contact.
   * @maxLength 50
   * @example "Chief Innovation Officer"
   */
  job_title?: string;
  /**
   * The name of the company where the contact works.
   * @maxLength 50
   * @example "RelativeGravity, Inc."
   */
  company_name?: string;
  /**
   * The month value for the contact's birthday. Valid values are from 1 through 12. The <code>birthday_month</code> property is required if you use <code>birthday_day</code>.
   * @example 11
   */
  birthday_month?: number;
  /**
   * The day value for the contact's birthday. Valid values are from 1 through 31. The <code>birthday_day</code> property is required if you use <code>birthday_month</code>.
   * @example 24
   */
  birthday_day?: number;
  /**
   * The anniversary date for the contact. For example, this value could be the date when the contact first became a customer of an organization in Constant Contact. Valid date formats are MM/DD/YYYY, M/D/YYYY, YYYY/MM/DD, YYYY/M/D, YYYY-MM-DD, YYYY-M-D,M-D-YYYY, or M-DD-YYYY.
   * @example "2006-11-15"
   */
  anniversary?: string;
  /**
   * The primary phone number for the contact. Use this field to add the default kind of phone number to the imported contact's phone number. Default <code>kind</code> is <code>other</code>.
   * @maxLength 50
   * @example "555-555-5555"
   */
  phone?: string;
  /**
   * The home phone number for the contact.
   * @maxLength 50
   * @example "555-555-5555"
   */
  home_phone?: string;
  /**
   * The work phone number for the contact.
   * @maxLength 50
   * @example "555-555-4444"
   */
  work_phone?: string;
  /**
   * The mobile phone number for the contact.
   * @maxLength 50
   * @example "555-555-3333"
   */
  mobile_phone?: string;
  /**
   * A phone number for the contact.
   * @maxLength 50
   * @example "555-555-2222"
   */
  other_phone?: string;
  /**
   * Line one of the primary street address for the contact. Use this field to add the default kind of street to the imported contact's street address. The default <code>kind</code> is <code>home</code>. which maps to the <code>street_addresses</code> array` in the response.
   * @maxLength 255
   * @example "123 Maple Lane"
   */
  street?: string;
  /**
   * Line two of the primary street address for the contact. This value is automatically appended to the <code>street</code> value. Use this field to add the default kind for line two of the street address to the imported contact's address. The default <code>kind</code> is <code>other</code>.
   * @maxLength 255
   * @example "Apt. 337"
   */
  street2?: string;
  /**
   * The name of the primary city for the contact. Use this field to add the default kind of city to the imported contact's home address. The default <code>kind</code> is <code>home</code>.
   * @maxLength 50
   * @example "Chicago"
   */
  city?: string;
  /**
   * The name of the primary state or province for the contact. Use this field to add the default kind of state to the imported contact's home address. The default <code>kind</code> is <code>home</code>.
   * @maxLength 50
   * @example "Illinois"
   */
  state?: string;
  /**
   * The zip or postal code associated with the contact's primary address. Use this field to add the default kind of zip to the imported contact's street address. The default <code>kind</code> is <code>home</code>.
   * @maxLength 50
   * @example "60609"
   */
  zip?: string;
  /**
   * The name of the primary country where the contact is located. Use this field to add the default kind of country to the imported contact's street address. The default <code>kind</code> is <code>home</code>.
   * @maxLength 50
   * @example "United States"
   */
  country?: string;
  /**
   * Line one of the home street address for the contact.
   * @maxLength 255
   * @example "123 Maple Lane"
   */
  home_street?: string;
  /**
   * Line two of the home street address for the contact. This value is automatically appended to the <code>home_street</code> value.
   * @maxLength 255
   * @example "Apt. 337"
   */
  home_street2?: string;
  /**
   * The name of the city where the contact lives.
   * @maxLength 50
   * @example "Chicago"
   */
  home_city?: string;
  /**
   * The name of the home state or province where the contact lives.
   * @maxLength 50
   * @example "Illinois"
   */
  home_state?: string;
  /**
   * The zip or postal code associated with the contact's home address.
   * @maxLength 50
   * @example "60609"
   */
  home_zip?: string;
  /**
   * The name of the country where the contact lives.
   * @maxLength 50
   * @example "United States"
   */
  'home country'?: string;
  /**
   * Line one of the work street address for the contact.
   * @maxLength 255
   * @example "123 Maple Lane"
   */
  work_street?: string;
  /**
   * Line two of the work street address for the contact. This value is automatically appended to the <code>work_street</code> value.
   * @maxLength 255
   * @example "Apt. 337"
   */
  work_street2?: string;
  /**
   * The name of the city where the contact works.
   * @maxLength 50
   * @example "Chicago"
   */
  work_city?: string;
  /**
   * The name of the state or province where the contact works.
   * @maxLength 50
   * @example "Illinois"
   */
  work_state?: string;
  /**
   * The zip or postal code associated with the contact's work address.
   * @maxLength 50
   * @example "60609"
   */
  work_zip?: string;
  /**
   * The name of the country where the contact works.
   * @maxLength 50
   * @example "United States"
   */
  work_country?: string;
  /**
   * Line one of the other street address for the contact.
   * @maxLength 255
   * @example "123 Maple Lane"
   */
  other_street?: string;
  /**
   * Line two of the other street address for the contact. This value is automatically appended to the <code>other_street</code> value.
   * @maxLength 255
   * @example "Apt. 337"
   */
  other_street2?: string;
  /**
   * The name of another city where the contact is located.
   * @maxLength 50
   * @example "Chicago"
   */
  other_city?: string;
  /**
   * The name of another state or province where the contact is located.
   * @maxLength 50
   * @example "Illinois"
   */
  other_state?: string;
  /**
   * The zip or postal code associated with the contact's other address.
   * @maxLength 50
   * @example "60609"
   */
  other_zip?: string;
  /**
   * The name of another country where the contact is located.
   * @maxLength 50
   * @example "Canada"
   */
  other_country?: string;
  /**
   * The name of this property is dynamic based on the custom fields you want to import. Use a key-value pair where the key is an existing custom field name prefixed with <code>cf:</code>, and the value is a custom field string value. For example, if you have a custom field named <code>first_name</code> you can use <code>"cf:first_name":"Joe"</code>. Each contact can contain up to 25 different custom fields.
   * @maxLength 255
   * @example "Tesla S 2017"
   */
  'cf:custom_field_name'?: string;
}

export interface ContactsJsonImport {
  /** An array containing the contacts to import. */
  import_data: JsonImportContact[];
  /**
   * Specify which contact lists you are adding all imported contacts to as an array of up to 50 contact <code>list_id</code> string values.
   * @maxItems 50
   * @minItems 1
   */
  list_ids: string[];
}

export interface ListActivityRemoveContacts {
  /** The <code>source</code> object specifies which contacts to remove from your targeted lists using one of three mutually exclusive properties. */
  source: {
    /**
     * Specifies which contacts to remove from your target lists as an array of up to 50 contact <code>list_id</code> values. This property is mutually exclusive with <code>contact_ids</code> and <code>all_active_contacts</code>.
     * @maxItems 50
     */
    list_ids?: string[];
    /**
     * Removes all active contacts from your targeted lists. This property is mutually exclusive with <code>contact_ids</code> and <code>list_ids</code>.
     * @default false
     * @example true
     */
    all_active_contacts?: boolean;
    /**
     * Specifies which contacts to remove from your target lists as an array of <code>contact_id</code> values. This property is mutually exclusive with <code>list_ids</code> and <code>all_active_contacts</code>.
     * @maxItems 500
     */
    contact_ids?: string[];
  };
  /**
   * Specifies which lists (up to 50) to remove your source contacts from.
   * @maxItems 50
   */
  list_ids: string[];
}

export interface ActivityListsMembership {
  /**
   * Unique ID for the activity.
   * @format uuid
   * @example "86b90820-cc52-11ea-9dad-fa163e3d9194"
   */
  activity_id?: string;
  /**
   * The state of the request: <p><ul> <li>initialized - request has been received</li> <li>processing - request is being processed</li> <li>completed - job completed</li> <li>cancelled - request was cancelled</li> <li>failed - job failed to complete</li> <li>timed_out - the request timed out before completing"</li> </ul> </p>
   * @example "initialized"
   */
  state?: string;
  /**
   * Timestamp showing when we began processing the activity request, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  started_at?: string;
  /**
   * Timestamp showing when we completed processing the activity, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  completed_at?: string;
  /**
   * Timestamp showing when we created the activity, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  created_at?: string;
  /**
   * Timestamp showing when we last updated the activity, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  updated_at?: string;
  /**
   * Shows the percent done for an activity that we are still processing.
   * @example 75
   */
  percent_done?: number;
  /** Array of messages describing the errors that occurred. */
  activity_errors?: string[];
  status?: {
    /**
     * Total number of contacts to add to or remove from lists.
     * @example 2200
     */
    items_total_count?: number;
    /**
     * The number of contacts processed.
     * @example 652
     */
    items_completed_count?: number;
    /**
     * The number of lists specified in the request.
     * @example 3
     */
    list_count?: number;
  };
  _links?: ActivityStatusLink;
}

export interface ListActivityAddContacts {
  /** The <code>source</code> object specifies which contacts you are adding to your targeted lists using one of four mutually exclusive properties. */
  source: {
    /**
     * Specifies which contacts you are adding to lists as an array of up to 50 contact <code>list_id</code> values. This property is mutually exclusive with <code>contact_ids</code>, <code>all_active_contacts</code>, and <code>segment_id</code>.
     * @maxItems 50
     */
    list_ids?: string[];
    /**
     * Adds all active contacts to your targeted lists. This property is mutually exclusive with <code>contact_ids</code>, <code>list_ids</code>, and <code>segment_id</code>.
     * @default false
     * @example true
     */
    all_active_contacts?: boolean;
    /**
     * Specifies which contacts (up to 500) you are adding to lists as an array of <code>contact_id</code> values. This property is mutually exclusive with <code>list_ids</code>, <code>all_active_contacts</code>, and <code>segment_id</code>.
     * @maxItems 500
     */
    contact_ids?: string[];
    /**
     * Specifies which contacts you are adding to lists as a single <code>segment_id</code> value. This property is mutually exclusive with <code>list_ids</code>, <code>all_active_contacts</code>, and <code>contact_ids</code>.
     * @example 12
     */
    segment_id?: number;
  };
  /**
   * Specifies which lists (up to 50) you are adding your source contacts to.
   * @maxItems 50
   */
  list_ids: string[];
}

export interface ListIdList100 {
  /**
   * The array of contact lists <code>list_id</code> to delete.
   * @maxItems 100
   */
  list_ids: string[];
}

export interface ActivityDeleteListsResponse {
  /**
   * The system assigned UUID that uniquely identifies an activity.
   * @example "af86135c-8740-11eb-8abf-fa163ef30864"
   */
  activity_id?: string;
  /**
   * The activity processing state.
   * @example "initialized"
   */
  state?: string;
  /**
   * Timestamp showing when processing started for the activity, in ISO-8601 format.
   * @format date-time
   * @example "2019-12-12T15:38:24Z"
   */
  started_at?: string;
  /**
   * Timestamp showing when processing completed for the activity, in ISO-8601 format.
   * @format date-time
   * @example "2019-12-12T15:38:24Z"
   */
  completed_at?: string;
  /**
   * Timestamp showing when the activity was first requested, in ISO-8601 format.
   * @format date-time
   * @example "2019-12-12T15:38:24Z"
   */
  created_at?: string;
  /**
   * Timestamp showing when the activity was last updated, in ISO-8601 format.
   * @format date-time
   * @example "2019-12-12T15:38:24Z"
   */
  updated_at?: string;
  /**
   * The processing percent complete for the activity.
   * @example 25
   */
  percent_done?: number;
  /** An array of error message strings describing the errors that occurred. */
  activity_errors?: string[];
  status?: {
    /**
     * The number of lists deleted.
     * @example 5
     */
    list_count?: number;
  };
  _links?: {
    /** Link to the activity status to use in tracking the request status. */
    self?: {
      /** @example "/v3/activities/04fa57a7-cf55-4185-cc1a-58ed29bf0a6a" */
      href?: string;
    };
  };
}

export interface TagAddRemoveContacts {
  /** Select the source used to identify contacts to which a tag is added or removed. Source types are mutually exclusive. */
  source: {
    /**
     * An array of contacts IDs.
     * @maxItems 500
     */
    contact_ids?: string[];
    /**
     * An array of list IDs ( <code>list_id</code> ).
     * @maxItems 50
     */
    list_ids?: string[];
    /**
     * An array of tags ( <code>tag_id</code> ).
     * @maxItems 50
     */
    tag_ids?: string[];
    /**
     * Use to identify contacts with an active status.
     * @example false
     */
    all_active_contacts?: boolean;
    /**
     * Use to identify newly subscribed contacts.
     * @example true
     */
    new_subscriber?: boolean;
  };
  /** Use to exclude specified contacts from being added or removed from a tag. Only applicable if the specified source is either <code>all_active_contacts</code> or <code>list_ids</code>. */
  exclude?: {
    /** Identifies the contacts, by <code>contact_id</code>, to exclude from the add or remove tags activity. */
    contact_ids?: string[];
  };
  /**
   * An array of tags (<code>tag_id</code>) to add to all contacts meeting the specified source criteria.
   * @maxItems 50
   */
  tag_ids: string[];
}

/** Provides the status for the requested activity. */
export interface ActivityTaggingStatus {
  /**
   * The total number of items processed for the requested activity.
   * @example 100
   */
  items_total_count?: number;
  /**
   * The total number of items for which processing completed for the requested activity.
   * @example 25
   */
  items_completed_count?: number;
}

export interface ActivityLinks {
  self?: {
    href?: string;
  };
  results?: {
    /** Use this link to view activity results. */
    href?: string;
  };
}

export interface ActivityTagging {
  /**
   * The system assigned UUID that uniquely identifies an activity.
   * @example "af86135c-8740-11eb-8abf-fa163ef30864"
   */
  activity_id: string;
  /**
   * The activity processing state.
   * @example "initialized"
   */
  state: string;
  /**
   * Timestamp showing when processing started for the activity, in ISO-8601 format.
   * @format date-time
   * @example "2019-12-12T15:38:24Z"
   */
  started_at?: string;
  /**
   * Timestamp showing when processing completed for the activity, in ISO-8601 format.
   * @format date-time
   * @example "2019-12-12T15:38:24Z"
   */
  completed_at?: string;
  /**
   * Timestamp showing when the activity was first requested, in ISO-8601 format.
   * @format date-time
   * @example "2019-12-12T15:38:24Z"
   */
  created_at?: string;
  /**
   * Timestamp showing when the activity was last updated, in ISO-8601 format.
   * @format date-time
   * @example "2019-12-12T15:38:24Z"
   */
  updated_at?: string;
  /**
   * The processing percent complete for the activity.
   * @example 25
   */
  percent_done?: number;
  /** An array of error message strings describing the errors that occurred. */
  activity_errors?: string[];
  /** Provides the status for the requested activity. */
  status?: ActivityTaggingStatus;
  _links?: ActivityLinks;
}

export interface TagIdList500Limit {
  /**
   * The tag IDs (<code>tag_ids</code>) to delete.
   * @maxItems 500
   */
  tag_ids: string[];
}

export interface CustomFieldId100 {
  /**
   * The array of custom field IDs to delete.
   * @maxItems 0
   */
  custom_field_ids: string[];
}

/** Activity status for contact_delete activity */
export interface ActivityDeleteCustomFields {
  /**
   * Unique ID for the activity.
   * @format uuid
   * @example "86b90820-cc52-11ea-9dad-fa163e3d9194"
   */
  activity_id?: string;
  /**
   * The state of the request: <p><ul> <li>initialized - request has been received</li> <li>processing - request is being processed</li> <li>completed - job completed</li> <li>cancelled - request was cancelled</li> <li>failed - job failed to complete</li> <li>timed_out - the request timed out before completing"</li> </ul> </p>
   * @example "initialized"
   */
  state?: string;
  /**
   * Timestamp showing when we began processing the activity request, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  started_at?: string;
  /**
   * Timestamp showing when we completed processing the activity, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  completed_at?: string;
  /**
   * Timestamp showing when we created the activity, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  created_at?: string;
  /**
   * Timestamp showing when we last updated the activity, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  updated_at?: string;
  /**
   * Shows the percent done for an activity that we are still processing.
   * @example 75
   */
  percent_done?: number;
  /** Array of messages describing the errors that occurred. */
  activity_errors?: string[];
  _links?: {
    /** Link to the activity status (this object) to retrieve the activity status. */
    self?: {
      /** @example "/v3/activities/04fe9a97-a579-43c5-bb1a-58ed29bf0a6a" */
      href?: string;
    };
  };
}

export interface SegmentMaster {
  /**
   * The segment's unique descriptive name.
   * @example "Re-engage contacts who did not open the last 5 campaigns."
   */
  name?: string;
  /**
   * The system generated number that uniquely identifies the segment.
   * @format int32
   * @example 14
   */
  segment_id?: number;
  /**
   * The system generated date and time that the segment was created (ISO-8601 format).
   * @format date-time
   * @example "2019-04-25T11:08:00.000Z"
   */
  created_at?: string;
  /**
   * The system generated date and time that the segment's <code>name</code> or <code>segment_criteria</code> was last updated (ISO-8601 format).
   * @format date-time
   * @example "2019-04-25T11:08:00.000Z"
   */
  edited_at?: string;
}

export interface Next {
  /** The next link in the page, or null if there are no additional pages. */
  href: string;
}

export interface Links {
  /** HAL property that contains next link if applicable. */
  next: Next;
}

export interface SegmentsDTO {
  /** Lists all segments for the account. */
  segments: SegmentMaster[];
  /** HAL property that contains next link if applicable. */
  _links?: Links;
}

export interface SegmentData {
  /**
   * The segment's unique descriptive name.
   * @example "Re-engage contacts who did not open the last 5 email campaign activities."
   */
  name: string;
  /**
   * The <code>segment_criteria</code> specifies the contact data that Constant Contact uses to evaluate and identify contacts that meet your criteria. The <code>segment_criteria</code> must be formatted as single-string escaped JSON. The top-level <code>group</code> <code>type</code> must be <code>add</code>.
   * @maxLength 20000
   * @example "{"version":"1.0.0","criteria":{"type":"and","group":[{"source":"tracking","field":"not_opened","op":"contains-any","const_value":"last-n-campaigns","param":"5"}]}}"
   */
  segment_criteria: string;
}

export interface SegmentDetail {
  /**
   * The segment's unique descriptive name.
   * @example "Re-engage contacts who did not open the last 5 email campaign activities."
   */
  name?: string;
  /**
   * The segment's contact selection criteria formatted as single-string escaped JSON.
   * @maxLength 20000
   * @example "{"version":"1.0.0","criteria":{"type":"and","group":[{"source":"tracking","field":"not_opened","op":"contains-any","const_value":"last-n-campaigns","param":"5"}]}}"
   */
  segment_criteria?: string;
  /**
   * The system generated number that uniquely identifies the segment.
   * @format int32
   * @example 14
   */
  segment_id?: number;
  /**
   * The system generated date and time (ISO-8601) that the segment was created.
   * @format date-time
   * @example "2019-04-25T11:08:00.000Z"
   */
  created_at?: string;
  /**
   * The system generated date and time (ISO-8601) that the segment's <code>name</code> or <code> segment_criteria</code> was last updated.
   * @format date-time
   * @example "2019-04-25T11:08:00.000Z"
   */
  edited_at?: string;
}

export interface SegmentName {
  /**
   * The segment's unique descriptive name.
   * @example "Contacts who did not open any email campaign within the last 100 days."
   */
  name: string;
}

/** A contact subresource describing the contact's email address. */
export interface EmailAddress {
  /**
   * The email address of the contact. The email address must be unique for each contact.
   * @maxLength 80
   * @example "dlang@example.com"
   */
  address: string;
  /**
   * Identifies the type of permission that the Constant Contact account has to send email to the contact. Types of permission: explicit, implicit, not_set, pending_confirmation, temp_hold, unsubscribed.
   * @example "implicit"
   */
  permission_to_send?: string;
  /**
   * Date and time that the email_address was created, in ISO-8601 format. System generated.
   * @format date-time
   * @example "2016-03-03T10:53:04-05:00"
   */
  created_at?: string;
  /**
   * Date and time that the email_address was last updated, in ISO-8601 format. System generated.
   * @format date-time
   * @example "2016-03-03T10:56:29-05:00"
   */
  updated_at?: string;
  /**
   * Describes who opted-in the email_address; valid values are Contact or Account. Your integration must accurately identify <code>opt_in_source</code> for compliance reasons; value is set on POST, and is read-only going forward.
   * @example "Contact"
   */
  opt_in_source?: string;
  /**
   * Date and time that the email_address was opted-in to receive email from the account, in ISO-8601 format. System generated.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  opt_in_date?: string;
  /**
   * Describes the source of the unsubscribed/opt-out action: either Account or Contact. If the Contact opted-out, then the account cannot send any campaigns to this contact until the contact opts back in. If the Account, then the account can add the contact back to any lists and send to them. Displayed only if contact has been unsubscribed/opt-out.
   * @example "Contact"
   */
  opt_out_source?: string;
  /**
   * Date and time that the contact unsubscribed/opted-out of receiving email from the account, in ISO-8601 format. Displayed only if contact has been unsubscribed/opt-out. System generated.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  opt_out_date?: string;
  /**
   * The reason, as provided by the contact, that they unsubscribed/opted-out of receiving email campaigns.
   * @maxLength 255
   * @example "I am no longer interested in this service."
   */
  opt_out_reason?: string;
  /**
   * Indicates if the contact confirmed their email address after they subscribed to receive emails. Possible values: pending, confirmed, off.
   * @example "confirmed"
   */
  confirm_status?: string;
}

/** Custom fields allow Constant Contact users to add custom content to a contact that can be used to personalize emails in addition to the standard set of variables available for email personalization. */
export interface ContactCustomField {
  /**
   * The custom_field's unique ID
   * @format uuid
   * @example "1618ae62-4752-11e9-9c8a-fa163e6b01c1"
   */
  custom_field_id: string;
  /**
   * The custom_field value.
   * @maxLength 255
   * @example "Tesla S 2017"
   */
  value: string;
}

export interface PhoneNumber {
  /**
   * Unique ID for the phone number
   * @format uuid
   * @example "6eec28a6-1cf5-11ea-859f-fa163e56c9b0"
   */
  phone_number_id?: string;
  /**
   * The contact's phone number.
   * @maxLength 25
   * @example "+1-555-555-5555"
   */
  phone_number?: string;
  /**
   * Identifies the type of phone number; valid values are home, work, mobile, or other.
   * @example "home"
   */
  kind?: string;
  /**
   * Date and time that the street address was created, in ISO-8601 format. System generated.
   * @format date-time
   * @example "2016-03-03T10:53:04-05:00"
   */
  created_at?: string;
  /**
   * Date and time that the phone number was last updated, in ISO-8601 format. System generated.
   * @format date-time
   * @example "2016-03-03T10:56:29-05:00"
   */
  updated_at?: string;
  /**
   * Identifies who last updated the phone number; valid values are Contact or Account
   * @example "Account"
   */
  update_source?: string;
  /**
   * Identifies who added the phone number; valid values are Contact or Account.
   * @example "Account"
   */
  create_source?: string;
}

export interface StreetAddress {
  /**
   * Unique ID for the street address
   * @format uuid
   * @example "977a9a2e-3e00-11ea-804b-fa163e56c9b0"
   */
  street_address_id?: string;
  /**
   * Describes the type of address; valid values are home, work, or other.
   * @example "home"
   */
  kind: string;
  /**
   * Number and street of the address.
   * @maxLength 255
   * @example "123 Kashmir Valley Road"
   */
  street?: string;
  /**
   * The name of the city where the contact lives.
   * @maxLength 50
   * @example "Chicago"
   */
  city?: string;
  /**
   * The name of the state or province where the contact lives.
   * @maxLength 50
   * @example "Illinois"
   */
  state?: string;
  /**
   * The zip or postal code of the contact.
   * @maxLength 50
   * @example "60609"
   */
  postal_code?: string;
  /**
   * The name of the country where the contact lives.
   * @maxLength 50
   * @example "United States"
   */
  country?: string;
  /**
   * Date and time that the street address was created, in ISO-8601 format. System generated.
   * @format date-time
   * @example "2016-03-03T10:53:04-05:00"
   */
  created_at?: string;
  /**
   * Date and time that the street address was last updated, in ISO-8601 format. System generated.
   * @format date-time
   * @example "2016-03-03T10:56:29-05:00"
   */
  updated_at?: string;
}

/** A note about the contact. */
export interface Note {
  /**
   * The ID that uniquely identifies the note (UUID format).
   * @format uuid
   * @example "3fa85f64-5717-4562-b3fc-2c963f66afa6"
   */
  note_id?: string;
  /**
   * The date that the note was created.
   * @format date-time
   * @example "2021-05-12T13:48:44.108Z"
   */
  created_at?: string;
  /**
   * The content for the note.
   * @maxLength 2000
   * @example "This contact resubscribed on 2021-05-12."
   */
  content?: string;
}

/** Provides SMS consent details. */
export interface SmsChannelConsentDetails {
  /**
   * Identifies the current permission status for the SMS channel.
   * @example "explicit"
   */
  sms_consent_permission?: string;
  /** @example "promotional_sms" */
  consent_type?: string;
  /**
   * Date and time, in ISO-8601 format, that the contact subscribed/opted-in to receiving SMS from the account. Displays only if the contact subscribes/opts-in. System generated.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  opt_in_date?: string;
  /**
   * Date and time, in ISO-8601 format, that the contact unsubscribed/opted-out of receiving SMS from the account. Displays only if the contact unsubscribed/opted-out. System generated.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  opt_out_date?: string;
  /**
   * The numeric used to set how often to send SMS advertisements during a specified time interval (<code>advertised_interval</code>). For example, if the <code>advertised_frequency</code> is set to <code>2</code> and the  <code>advertised_interval</code> is set to <code>monthly</code>, the contact can receive up to two advertisements per month.
   * @example "1"
   */
  advertised_frequency?: string;
  /**
   * Identifies the unit of time used by Constant Contact to send SMS advertisements as a string enum. For example, if the <code>advertised_frequency</code> is set to <code>2</code> and the <code>advertised_interval</code> is set to <code>monthly</code>, the contact can receive up to two advertisements per month.
   * @example "monthly"
   */
  advertised_interval?: string;
  /**
   * Date and time that the SMS stats were created, in ISO-8601 format. System generated.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  created_at?: string;
  /**
   * Date and time that the SMS stats were updated, in ISO-8601 format. System generated.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  updated_at?: string;
}

/** Use this endpoint to retrieve (GET), update (PUT), or DELETE an existing contact resource specified using the <code>contact_id</code> path parameter. */
export interface ContactResource {
  /**
   * Unique ID for each contact resource
   * @format uuid
   * @example "1618ae62-4752-11e9-9c8a-fa163e6b01c1"
   */
  contact_id?: string;
  /** A contact subresource describing the contact's email address. */
  email_address?: EmailAddress;
  /**
   * The first name of the contact.
   * @maxLength 50
   * @example "Debora"
   */
  first_name?: string;
  /**
   * The last name of the contact.
   * @maxLength 50
   * @example "Lang"
   */
  last_name?: string;
  /**
   * The job title of the contact.
   * @maxLength 50
   * @example "Musician"
   */
  job_title?: string;
  /**
   * The name of the company where the contact works.
   * @maxLength 50
   * @example "Acme Corp."
   */
  company_name?: string;
  /**
   * The month value for the contact's birthday. Valid values are from 1 through 12. You must use this property with <code>birthday_month</code>.
   * @example 11
   */
  birthday_month?: number;
  /**
   * The day value for the contact's birthday. Valid values are from 1 through 12. You must use this property with <code>birthday_day</code>.
   * @example 24
   */
  birthday_day?: number;
  /**
   * The anniversary date for the contact. For example, this value could be the date when the contact first became a customer of an organization in Constant Contact. Valid date formats are MM/DD/YYYY, M/D/YYYY, YYYY/MM/DD, YYYY/M/D, YYYY-MM-DD, YYYY-M-D,M-D-YYYY, or M-DD-YYYY.
   * @maxLength 10
   * @example "2006-11-15"
   */
  anniversary?: string;
  /**
   * Identifies who last updated the contact; valid values are  <code>Contact</code> or <code>Account</code>.
   * @example "Contact"
   */
  update_source?: string;
  /**
   * Describes who added the contact; valid values are <code>Contact</code> or <code>Account</code>. Your integration must accurately identify <code>create_source</code> for compliance reasons; value is set when contact is created.
   * @example "Account"
   */
  create_source?: string;
  /**
   * System generated date and time that the resource was created, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  created_at?: string;
  /**
   * System generated date and time that the contact was last updated, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  updated_at?: string;
  /**
   * For deleted contacts (<code>email_address</code> contains <code>opt_out_source</code> and <code>opt_out_date</code>), shows the date of deletion.
   * @format date
   * @example "2016-07-08"
   */
  deleted_at?: string;
  /**
   * Array of up to 25 <code>custom_field</code> subresources.
   * @maxItems 25
   */
  custom_fields?: ContactCustomField[];
  /**
   * Array of up to 3 <code>phone_numbers</code> subresources.
   * @maxItems 3
   */
  phone_numbers?: PhoneNumber[];
  /**
   * Array of up to 3 <code>street_addresses</code> subresources.
   * @maxItems 3
   */
  street_addresses?: StreetAddress[];
  /**
   * Array of up to 50 <code>list_ids</code> to which the contact is subscribed.
   * @maxItems 50
   */
  list_memberships?: string[];
  /**
   * Array of tags (<code>tag_id</code>) assigned to the contact, up to a maximum of 50.
   * @maxItems 50
   */
  taggings?: string[];
  /**
   * An array of notes about the contact listed by most recent note first.
   * @maxItems 150
   */
  notes?: Note[];
  /** Includes SMS channel and consent details. */
  sms_channel?: {
    /**
     * The unique ID that identifies an SMS channel.
     * @format uuid
     * @example "3fa85f64-5712-6245-b3fc-2c963f66bfc6"
     */
    sms_channel_id?: string;
    /**
     * The phone number of the SMS-capable phone, which does not include the country code.
     * @example "7815551212"
     */
    sms_address?: string;
    /**
     * The dial code used for the SMS-capable phone. For example, the dial code for the United States is <code>1</code>.
     * @example "1"
     */
    dial_code?: string;
    /**
     * The two character ISO country code used for the SMS-capable phone. For example, the country code for the United States is <code>US</code>.
     * @example "US"
     */
    country_code?: string;
    /**
     * Identifies who last updated SMS details for the contact. Valid values are Contact or Account
     * @example "Contact"
     */
    update_source?: string;
    /**
     * Identifies who added SMS details for the contact. The value is set when you create SMS details for the contact. Valid values are <code>Contact</code> or <code>Account</code>.
     * @example "Account"
     */
    create_source?: string;
    /** Identifies SMS channel consent details such as the current permission status for the SMS channel and opt-in date. */
    sms_channel_consents?: SmsChannelConsentDetails[];
  };
}

/** The contact's email address and related properties. */
export interface EmailAddressPut {
  /**
   * The email address of the contact. The email address must be unique for each contact.
   * @maxLength 80
   * @example "dlang@example.com"
   */
  address: string;
  /**
   * Identifies the type of permission that the Constant Contact account has to send email to the contact. Types of permission: explicit, implicit, not_set, pending_confirmation, temp_hold, unsubscribed.
   * @example "implicit"
   */
  permission_to_send?: string;
  /**
   * Date and time that the email_address was created, in ISO-8601 format. System generated.
   * @format date-time
   * @example "2016-03-03T10:53:04-05:00"
   */
  created_at?: string;
  /**
   * Date and time that the email_address was last updated, in ISO-8601 format. System generated.
   * @format date-time
   * @example "2016-03-03T10:56:29-05:00"
   */
  updated_at?: string;
  /**
   * Date and time that the email_address was opted-in to receive email from the account, in ISO-8601 format. System generated.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  opt_in_date?: string;
  /**
   * Describes the source of the unsubscribed/opt-out action: either Account or Contact. If the Contact opted-out, then the account cannot send any campaigns to this contact until the contact opts back in. If the Account, then the account can add the contact back to any lists and send to them. Displayed only if contact has been unsubscribed/opt-out.
   * @example "Contact"
   */
  opt_out_source?: string;
  /**
   * Date and time that the contact unsubscribed/opted-out of receiving email from the account, in ISO-8601 format. Displayed only if contact has been unsubscribed/opt-out. System generated.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  opt_out_date?: string;
  /**
   * The reason, as provided by the contact, that they unsubscribed/opted-out of receiving email campaigns.
   * @maxLength 255
   * @example "I am no longer interested in this service."
   */
  opt_out_reason?: string;
  /**
   * Indicates if the contact confirmed their email address after they subscribed to receive emails. Possible values: pending, confirmed, off.
   * @example "confirmed"
   */
  confirm_status?: string;
}

export interface PhoneNumberPut {
  /**
   * The contact's phone number.
   * @maxLength 25
   * @example "+1-555-555-5555"
   */
  phone_number?: string;
  /**
   * Identifies the type of phone number; valid values are home, work, mobile, or other.
   * @example "home"
   */
  kind?: string;
}

export interface StreetAddressPut {
  /**
   * Describes the type of address; valid values are home, work, or other.
   * @example "home"
   */
  kind: string;
  /**
   * Number and street of the address.
   * @maxLength 255
   * @example "123 Kashmir Valley Road"
   */
  street?: string;
  /**
   * The name of the city where the contact lives.
   * @maxLength 50
   * @example "Chicago"
   */
  city?: string;
  /**
   * The name of the state or province where the contact lives.
   * @maxLength 50
   * @example "Illinois"
   */
  state?: string;
  /**
   * The zip or postal code of the contact.
   * @maxLength 50
   * @example "60609"
   */
  postal_code?: string;
  /**
   * The name of the country where the contact lives.
   * @maxLength 50
   * @example "United States"
   */
  country?: string;
}

export interface ContactPutRequest {
  /** The contact's email address and related properties. */
  email_address?: EmailAddressPut;
  /**
   * The contact's first name
   * @maxLength 50
   * @example "Debora"
   */
  first_name?: string;
  /**
   * The contact's last name
   * @maxLength 50
   * @example "Lang"
   */
  last_name?: string;
  /**
   * The contact's job title
   * @maxLength 50
   * @example "Musician"
   */
  job_title?: string;
  /**
   * Name of the company the contact works for.
   * @maxLength 50
   * @example "Acme Corp."
   */
  company_name?: string;
  /**
   * Accepts values from 1-12; must be used with <code>birthday_day</code>
   * @example 11
   */
  birthday_month?: number;
  /**
   * Accepts values from 1-31; must be used with <code>birthday_month</code>
   * @example 24
   */
  birthday_day?: number;
  /**
   * The anniversary date; Accepted formats are MM/DD/YYYY, M/D/YYYY, YYYY/MM/DD, YYYY/M/D, YYYY-MM-DD, YYYY-M-D, MM-DD-YYYY, M-D-YYYY
   * @maxLength 10
   * @example "2006-11-15"
   */
  anniversary?: string;
  /**
   * Identifies who last updated the contact; valid values are <code>Contact</code> or <code>Account</code>.
   * @example "Account"
   */
  update_source: string;
  /**
   * Array of up to 25 <code>custom_field</code> subresources.
   * @maxItems 25
   */
  custom_fields?: ContactCustomField[];
  /**
   * Array of up to 3 <code>phone_numbers</code> subresources.
   * @maxItems 3
   */
  phone_numbers?: PhoneNumberPut[];
  /**
   * Array of up to 3 <code>street_addresses</code> subresources.
   * @maxItems 3
   */
  street_addresses?: StreetAddressPut[];
  /**
   * Array of up to 50 <code>list_ids</code> to which the contact is subscribed.
   * @maxItems 50
   */
  list_memberships?: string[];
  /**
   * Array of tags (<code>tag_id</code>) assigned to the contact, up to a maximum of 50.
   * @maxItems 50
   */
  taggings?: string[];
  /**
   * An array of notes about the contact listed by most recent note first.
   * @maxItems 150
   */
  notes?: Note[];
}

/** Use this endpoint to retrieve (GET) a collection of existing contacts, or to create (POST) a new contact. */
export interface Contacts {
  contacts?: ContactResource[];
  /**
   * Total number of contacts in the response.
   * @example 3249
   */
  contacts_count?: number;
  _links?: PagingLinks;
  /** If you use the <code>segment_id</code> query parameter to filter results based on a segment, this property indicates that the V3 API accepted your request and is still processing it. */
  status?: string;
}

/** The contact's email address and related properties. */
export interface EmailAddressPost {
  /**
   * The contact's email address.
   * @maxLength 80
   * @example "dlang@example.com"
   */
  address: string;
  /**
   * Identifies the type of permission that the Constant Contact account has been granted to send email to the contact. Types of permission: explicit, implicit, not_set, pending_confirmation, temp_hold, unsubscribed.
   * @example "implicit"
   */
  permission_to_send?: string;
}

export interface ContactPostRequest {
  /** The contact's email address and related properties. */
  email_address?: EmailAddressPost;
  /**
   * The first name of the contact.
   * @maxLength 50
   * @example "Debora"
   */
  first_name?: string;
  /**
   * The last name of the contact.
   * @maxLength 50
   * @example "Lang"
   */
  last_name?: string;
  /**
   * The job title of the contact.
   * @maxLength 50
   * @example "Musician"
   */
  job_title?: string;
  /**
   * The name of the company where the contact works.
   * @maxLength 50
   * @example "Acme Corp."
   */
  company_name?: string;
  /**
   * Describes who added the contact; valid values are <code>Contact</code> or <code>Account</code>. Your integration must accurately identify <code>create_source</code> for compliance reasons; value is set on POST, and is read-only going forward.
   * @example "Account"
   */
  create_source?: string;
  /**
   * The month value for the contact's birthday. Valid values are from 1 through 12. The <code>birthday_month</code> property is required if you use <code>birthday_day</code>.
   * @example 11
   */
  birthday_month?: number;
  /**
   * The day value for the contact's birthday. Valid values are from 1 through 31. The <code>birthday_day</code> property is required if you use <code>birthday_month</code>.
   * @example 24
   */
  birthday_day?: number;
  /**
   * The anniversary date for the contact. For example, this value could be the date when the contact first became a customer of an organization in Constant Contact. Valid date formats are MM/DD/YYYY, M/D/YYYY, YYYY/MM/DD, YYYY/M/D, YYYY-MM-DD, YYYY-M-D,M-D-YYYY, or M-DD-YYYY.
   * @maxLength 10
   * @example "2006-11-15"
   */
  anniversary?: string;
  /**
   * Array of up to 25 <code>custom_field</code> key value pairs.
   * @maxItems 25
   */
  custom_fields?: ContactCustomField[];
  /**
   * Array of up to 3 phone numbers subresources.
   * @maxItems 3
   */
  phone_numbers?: PhoneNumberPut[];
  /**
   * Array of up to 3 street address subresources.
   * @maxItems 3
   */
  street_addresses?: StreetAddressPut[];
  /**
   * Array of <code>list_id</code>s to which the contact is being subscribed, up to a maximum of 50.
   * @maxItems 50
   */
  list_memberships?: string[];
  /**
   * Array of tags (<code>tag_id</code>) assigned to the contact, up to a maximum of 50.
   * @maxItems 50
   */
  taggings?: string[];
  /**
   * An array of notes about the contact.
   * @maxItems 150
   */
  notes?: Note[];
}

export interface CreateOrUpdateContactCustomField {
  /**
   * The unique ID for the <code>custom_field</code>.
   * @format uuid
   * @example "1618ae62-4752-11e9-9c8a-fa163e6b01c1"
   */
  custom_field_id?: string;
  /**
   * The value of the <code>custom_field</code>.
   * @maxLength 255
   * @example "Tesla S 2017"
   */
  value?: string;
}

export interface ContactCreateOrUpdateInput {
  /**
   * The email address for the contact. This method identifies each unique contact using their email address. If the email address exists in the account, this method updates the contact. If the email address is new, this method creates a new contact.
   * @maxLength 50
   * @example "jdodge@example.com"
   */
  email_address: string;
  /**
   * The first name of the contact.
   * @maxLength 50
   * @example "Jake"
   */
  first_name?: string;
  /**
   * The last name of the contact.
   * @maxLength 50
   * @example "Dodge"
   */
  last_name?: string;
  /**
   * The job title of the contact.
   * @maxLength 50
   * @example "Musician"
   */
  job_title?: string;
  /**
   * The name of the company where the contact works.
   * @maxLength 50
   * @example "Acme Corp."
   */
  company_name?: string;
  /**
   * The phone number for the contact.
   * @maxLength 25
   * @example "(555) 555-1212"
   */
  phone_number?: string;
  /**
   * The contact lists you want to add the contact to as an array of up to 50 contact <code>list_id</code> values. You must include at least one <code>list_id</code>.
   * @maxItems 50
   * @minItems 1
   */
  list_memberships: string[];
  /**
   * The custom fields you want to add to the contact as an array of up to 50 custom field objects.
   * @maxItems 50
   */
  custom_fields?: CreateOrUpdateContactCustomField[];
  /**
   * The anniversary date for the contact. For example, this value could be the date when the contact first became a customer of an organization in Constant Contact. Valid date formats are MM/DD/YYYY, M/D/YYYY, YYYY/MM/DD, YYYY/M/D, YYYY-MM-DD, YYYY-M-D,M-D-YYYY, or M-DD-YYYY.
   * @example "11-15-2006"
   */
  anniversary?: string;
  /**
   * The month value for the contact's birthday. Valid values are from 1 through 12. The <code>birthday_month</code> property is required if you use <code>birthday_day</code>.
   * @example 11
   */
  birthday_month?: number;
  /**
   * The day value for the contact's birthday. Valid values are from 1 through 31. The <code>birthday_day</code> property is required if you use <code>birthday_month</code>.
   * @example 24
   */
  birthday_day?: number;
  street_address?: {
    /**
     * The type of street address for the contact. Valid values are <code>home</code>, <code>work</code>, or <code>other</code>.
     * @example "home"
     */
    kind: string;
    /**
     * The number and street of the contact's address.
     * @maxLength 255
     * @example "1601 Trapelo Rd"
     */
    street?: string;
    /**
     * The name of the city for the contact's address.
     * @maxLength 50
     * @example "Waltham"
     */
    city?: string;
    /**
     * The name of the state or province for the contact's address.
     * @maxLength 50
     * @example "Massachusetts"
     */
    state?: string;
    /**
     * The zip or postal code for the contact's address.
     * @maxLength 50
     * @example "02451"
     */
    postal_code?: string;
    /**
     * The name of the country for the contact's address.
     * @maxLength 50
     * @example "United States"
     */
    country?: string;
  };
}

export interface ContactCreateOrUpdateResponse {
  /**
   * The unique identifier for the contact that the V3 API created or updated.
   * @format uuid
   * @example "ab7ab702-b935-11e9-8a58-fa163e6b01c1"
   */
  contact_id?: string;
  /** Identifies if the V3 API created a new contact or updated an existing contact. */
  action?: string;
}

/** The cross-referenced pair of V3 API <code>list_id</code> and V2 API <code>sequence_id</code> for a list. Response is sorted ascending by <code>sequence_id</code>. */
export interface ContactXref {
  /**
   * The V2 API contact unique identifier
   * @example "0016633325"
   */
  sequence_id?: string;
  /**
   * The V3 API contact unique identifier
   * @format uuid
   * @example "ab7ab702-b935-11e9-8a58-fa163e6b01c1"
   */
  contact_id?: string;
}

export interface ContactXrefs {
  /**
   * An array of cross-referenced V3 API <code>contact_id</code> and V2 API <code>sequence_id</code> values. Response is sorted ascending by <code>sequence_id</code>.
   * @maxItems 500
   */
  xrefs?: ContactXref[];
}

/** Custom fields allow Constant Contact users to add custom content to a contact that can be used to personalize emails in addition to the standard set of variables available for email personalization. */
export interface CustomFieldResource {
  /**
   * The custom_field's unique ID
   * @format uuid
   * @example "1618ae62-4752-11e9-9c8a-fa163e6b01c1"
   */
  custom_field_id?: string;
  /**
   * The display name for the custom_field shown in the UI as free-form text
   * @maxLength 50
   * @example "Vehicle make and model year"
   */
  label: string;
  /**
   * Unique name for the custom_field constructed from the label by replacing blanks with underscores.
   * @maxLength 50
   * @example "Vehicle_make_and_model_year"
   */
  name?: string;
  /**
   * Specifies the type of value the custom_field field accepts: string or date.
   * @example "string"
   */
  type: string;
  /**
   * System generated date and time that the resource was updated, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  updated_at?: string;
  /**
   * Date and time that the resource was created, in ISO-8601 format. System generated.
   * @format date-time
   * @example "2016-03-03T10:53:04-05:00"
   */
  created_at?: string;
}

export interface CustomFieldInput {
  /**
   * The display name for the custom_field shown in the UI as free-form text
   * @maxLength 50
   * @example "Vehicle make and model year"
   */
  label: string;
  /**
   * Specifies the type of value the custom_field field accepts: string or date.
   * @example "string"
   */
  type: string;
}

/** Use this endpoint to retrieve (GET) all custom_fields in the user's account, or to create (POST) a new custom_field. */
export interface CustomFields {
  /** @maxItems 100 */
  custom_fields?: CustomFieldResource[];
  _links?: PagingLinks;
}

export interface ContactList {
  /**
   * Unique ID for the contact list
   * @format uuid
   * @example "06526938-56dd-11e9-932a-fa163ea075fa"
   */
  list_id: string;
  /**
   * The name given to the contact list
   * @example "Multiple purchases"
   */
  name: string;
  /**
   * Text describing the list.
   * @example "List of repeat customers."
   */
  description?: string;
  /**
   * Identifies whether or not the account has favorited the contact list.
   * @default false
   */
  favorite?: boolean;
  /**
   * System generated date and time that the resource was created, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  created_at?: string;
  /**
   * Date and time that the list was last updated, in ISO-8601 format. System generated.
   * @format date-time
   * @example "2016-03-03T10:56:29-05:00"
   */
  updated_at?: string;
  /**
   * If the list was deleted, this property shows the date and time it was deleted, in ISO-8601 format. System generated.
   * @format date-time
   * @example "2016-03-03T10:56:29-05:00"
   */
  deleted_at?: string;
  /**
   * The total number of contacts that are members in a list. Does not apply to segment type lists.
   * @example 327
   */
  membership_count?: number;
}

export interface ListInput {
  /**
   * The name given to the contact list
   * @maxLength 255
   * @example "Multiple purchases"
   */
  name: string;
  /**
   * Identifies whether or not the account has favorited the contact list.
   * @default false
   * @example true
   */
  favorite?: boolean;
  /**
   * Text describing the list.
   * @example "List of repeat customers"
   */
  description?: string;
}

export interface ContactListPutPost {
  /**
   * Unique ID for the contact list
   * @format uuid
   * @example "06526938-56dd-11e9-932a-fa163ea075fa"
   */
  list_id: string;
  /**
   * The name given to the contact list
   * @example "Multiple purchases"
   */
  name: string;
  /**
   * Text describing the list.
   * @example "List of repeat customers."
   */
  description?: string;
  /**
   * Identifies whether or not the account has favorited the contact list.
   * @default false
   */
  favorite?: boolean;
  /**
   * System generated date and time that the resource was created, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  created_at?: string;
  /**
   * Date and time that the list was last updated, in ISO-8601 format. System generated.
   * @format date-time
   * @example "2016-03-03T10:56:29-05:00"
   */
  updated_at?: string;
  /**
   * If the list was deleted, this property shows the date and time it was deleted, in ISO-8601 format. System generated.
   * @format date-time
   * @example "2016-03-03T10:56:29-05:00"
   */
  deleted_at?: string;
}

export interface ActivityDeleteListResponse {
  /**
   * Unique ID for the delete list batch job.
   * @format uuid
   */
  activity_id?: string;
  /**
   * The state of the request:
   *  <p><ul>
   *  <li>initialized - request has been received</li>
   *  <li>processing - request is being processed</li>
   *  <li>completed - job completed</li>
   *  <li>cancelled - request was cancelled</li>
   *  <li>failed - job failed to complete</li>
   *  <li>timed_out - the request timed out before completing"</li>
   *   </ul> </p>
   * @example "initialized"
   */
  state?: string;
  /**
   * Date and time that the request was received, in ISO-8601 formmat.
   * @format date-time
   * @example "2016-03-03T10:53:04-05:00"
   */
  created_at?: string;
  /**
   * Date and time that the request status was updated, in ISO-8601 format.
   * @format date-time
   * @example "2016-03-03T10:56:29-05:00"
   */
  updated_at?: string;
  /**
   * Job completion percentage
   * @example 1
   */
  percent_done?: number;
  /** Array of messages describing the errors that occurred. */
  activity_errors?: string[];
  _links?: {
    /** Link to the activity status to use in tracking the request status. */
    self?: {
      /** @example "/v3/activities/04fa57a7-cf55-4185-cc1a-58ed29bf0a6a" */
      href?: string;
    };
  };
}

export interface ContactListArray {
  lists?: ContactList[];
  /**
   * The total number of contact lists.
   * @example 249
   */
  lists_count?: number;
  _links?: PagingLinks;
}

/** The cross-referenced pair of V3 API <code>list_id</code> and V2 API <code>sequence_id</code> for a list. Response is sorted ascending by <code>sequence_id</code>. */
export interface ListXref {
  /**
   * The V2 API list unique identifier
   * @example "0016633325"
   */
  sequence_id?: string;
  /**
   * The V3 API list unique identifier
   * @format uuid
   * @example "71600990-908b-11e6-907f-1200166bff25"
   */
  list_id?: string;
}

export interface ListXrefs {
  /**
   * An array of cross-referenced V3 API <code>list_id</code> and V2 API <code>sequence_id</code> properties. Response is sorted ascending by <code>sequence_id</code>.
   * @maxItems 500
   */
  xrefs?: ListXref[];
}

/** Additional details about the SMS consent actions (opt-in, opt-out) in JSON format. The  <code>consent_action_type</code> and the method used to add or update a contacts SMS details determines which properties are returned in the results. */
export interface HistoryDetails {
  /**
   * The code representing the consent state, including <code>E</code> for optin and <code>O</code> for Optin.
   * @example "O"
   */
  state?: string;
  /**
   * The code representing the consent source type, including <code>A</code> for Account, <code>C</code> for Contact, and <code>S</code>' for System.
   * @example "A"
   */
  source?: string;
  /**
   * The type of SMS consent used.
   * @example "promotional_sms"
   */
  consent_type?: string;
  /**
   * The date and time that SMS engagement data was last updated, in ISO-8601 format. System generated.
   * @format date-time
   * @example "2023-01-23 06:09:23 -0800"
   */
  consent_action_time?: string;
  /**
   * The type of consent action provided.
   * @example "opt_out"
   */
  consent_action_type?: string;
  /**
   * The code representing the medium used to provide consent. Medium types include mobile device (<code>MD</code>). lead generation form(<code>LF</code>), deactivation by carrier(<code>CD</code>), import_file:(<code>FI</code>), and system (<code>SY</code>).
   * @example "MD"
   */
  consent_medium_type?: string;
  /**
   * The time that SMS consent was last updated.
   * @example "2016-03-03T10:53:04-05:0"
   */
  source_consent_timestamp?: string;
  /**
   * If applicable, the IP address from which the consent came.
   * @example "123.456.78.9"
   */
  source_ip?: string;
  /**
   * If applicable, the SMS consent number associated with the source.
   * @example "6035550239"
   */
  source_sms_number?: string;
  /**
   * If applicable, the advertising numeric component used to advertise to the contact.. For example, if <code>advertised_frequency</code> is set to <code> 2</code> , and  <code>advertised_interval</code> is set to <code>M</code>, the contact receives advertisements twice a month.
   * @example 2
   */
  advertised_frequency?: number;
  /**
   * If applicable, the interval component used to advertise to the contact. For example, if <code>advertised_frequency</code> is set to <code> 2</code> , and  <code>advertised_interval</code> is set to <code>M</code>, the contact receives advertisements twice a month.
   * @example "W"
   */
  advertised_interval?: string;
}

export type SmsEngagementHistory = {
  /**
   * The unique contact UUID.
   * @example "7f7923da-ebf7-11ec-ae6e-3e22fbb230ec"
   */
  contact_id?: string;
  /**
   * The unique SMS channel UUID.
   * @example "3fa85f64-5712-6245-b3fc-2c963f66bfc6"
   */
  sms_channel_id?: string;
  /**
   * The unique SMS channel history UUID.
   * @example "04515cb3-17be-41e4-823a-f71c3d381c7b"
   */
  sms_channel_history_id?: string;
  /**
   * The date and time that the history record was created, in ISO-8601 format. System generated.
   * @format date-time
   * @example "2016-03-03T10:53:04-05:00"
   */
  insert_time?: string;
  /** Additional details about the SMS consent actions (opt-in, opt-out) in JSON format. The  <code>consent_action_type</code> and the method used to add or update a contacts SMS details determines which properties are returned in the results. */
  history_details?: HistoryDetails;
}[];

export interface ContactsCounts {
  /**
   * Total number of contacts for the account.
   * @example 72
   */
  total?: number;
  /**
   * Total number of contacts explicitly confirmed. Consent is obtained when you explicitly ask your potential contacts for permission to send the email (for example, using a sign-up form) and they agree. After you obtain express consent, it is good forever or until the contact opts out.
   * @example 10
   */
  explicit?: number;
  /**
   * Total number of contacts implicitly confirmed. Consent is inferred based on actions, such as having an existing business relationship (making a purchase or donation, for example). In order to maintain implied consent to comply with CASL a contact must take a business action with you at least once every two years. Under CAN-Spam there is no need to maintain implied consent, it is assumed until the receiver indicates they no longer wish to receive messages.
   * @example 20
   */
  implicit?: number;
  /**
   * Total number of contacts pending confirmation. Consent is requested and pending confirmation from the contact.
   * @example 30
   */
  pending?: number;
  /**
   * Total number of unsubscribed contacts. Consent is revoked when a contact has unsubscribed.
   * @example 12
   */
  unsubscribed?: number;
  /**
   * Total number of newly subscribed contacts.
   * @example 1
   */
  new_subscriber?: number;
}

export interface Tag {
  /**
   * The ID that uniquely identifies a tag (UUID format)
   * @format uuid
   * @example "3fa85f64-5717-4562-b3fc-2c963f66afa6"
   */
  tag_id?: string;
  /**
   * The unique tag name.
   * @example "Gold card member"
   */
  name?: string;
  /**
   * The total number of contacts who are assigned this tag.
   * @example 325
   */
  contacts_count?: number;
  /**
   * The system generated date and time when the tag was created (ISO-8601 format).
   * @format date-time
   * @example "2019-04-25T11:08:00.000Z"
   */
  created_at?: string;
  /**
   * The system generated date and time when the tag was last updated (ISO-8601 format).
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  updated_at?: string;
  /**
   * The source used to tag contacts.
   * @example "ESTY"
   */
  tag_source?: string;
}

export interface TagPut {
  /**
   * The new tag name to use. The tag name must be unique.
   * @minLength 1
   * @maxLength 255
   * @example "Bronze card member"
   */
  name: string;
}

export interface ActivityErrors {
  /** Message describing the error condition. */
  message?: string;
}

export interface ActivityGenericStatus {
  /**
   * The total number of tags that this activity will delete.
   * @example 89
   */
  items_total_count?: number;
  /**
   * The number of tags that this activity has currently deleted.
   * @example 89
   */
  items_completed_count?: number;
}

export interface ActivityGeneric {
  /**
   * The ID that uniquely identifies the activity.
   * @example "d44ac96c-24f3-11eb-8ae8-fa163e595123"
   */
  activity_id: string;
  /**
   * The processing state for the activity.
   * @example "completed"
   */
  state: string;
  /**
   * The system generated date and time that the resource was created, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  created_at?: string;
  /**
   * The system generated date and time that the resource was last updated, in ISO-8601 format.
   * @format date-time
   * @example "2016-01-23T13:48:44.108Z"
   */
  updated_at?: string;
  /**
   * The percentage complete for the specified activity.
   * @example 25
   */
  percent_done?: number;
  /** An array of error messages if errors occurred for a specified activity. The system returns an empty array if no errors occur. */
  activity_errors?: ActivityErrors[];
  status?: ActivityGenericStatus;
  _links?: TagsActivityLinks;
}

export interface Tags {
  /** Lists all tags and provides tag details. */
  tags?: Tag[];
  /** HAL property that contains next link if applicable. */
  _links?: TagsPagingLinks;
}

export interface TagPost {
  /**
   * Specify a unique name to use to identify the tag. Tag names must be at least one character in length and not more than 255 characters.
   * @minLength 1
   * @maxLength 255
   * @example "Silver card member"
   */
  name: string;
  /**
   * The source used to identify the contacts to tag.
   * @example "ESTY"
   */
  tag_source?: string;
}

export interface EmailCampaigns {
  /**
   * The unique ID used to identify the email campaign (UUID format).
   * @example "8987dc1a-48ef-433a-b836-7ca4f9aa3481"
   */
  campaign_id?: string;
  /**
   * The system generated date and time that this email campaign was created. This string is readonly and is in ISO-8601 format.
   * @format date-time
   * @example "2018-02-06T22:09:15.000Z"
   */
  created_at?: string;
  /**
   * The current status of the email campaign. Valid values are: <ul>
   *   <li>Draft — An email campaign that you have created but have not sent to contacts.</li>
   *   <li>Scheduled — An email campaign that you have scheduled for Constant Contact to send to contacts.</li>
   *   <li>Executing — An email campaign that Constant Contact is currently sending to contacts. Email campaign activities are only in this status briefly.</li>
   *   <li>Done — An email campaign that you successfully sent to contacts.</li>
   *   <li>Error — An email campaign activity that encountered an error.</li>
   *   <li>Removed — An email campaign that a user deleted. Users can view and restore deleted emails through the UI.</li>
   * </ul>
   * @example "Draft"
   */
  current_status?: string;
  /**
   * The descriptive name the user provides to identify this campaign. Campaign names must be unique for each account ID.
   * @maxLength 80
   * @example "December Newsletter for Dog Lovers"
   */
  name?: string;
  /**
   * Identifies the type of campaign that you select when creating the campaign. Newsletter and Custom Code email campaigns are the primary types.
   * @example "NEWSLETTER"
   */
  type?: string;
  /**
   * The code used to identify the email campaign `type`. <ul>
   *   <li> 1  (Default) </li>
   *   <li> 2  (Bulk Email) </li>
   *   <li> 10 (Newsletter) </li>
   *   <li> 11 (Announcement) </li>
   *   <li> 12 (Product/Service News) </li>
   *   <li> 14 (Business Letter) </li>
   *   <li> 15 (Card) </li>
   *   <li> 16 (Press release)</li>
   *   <li> 17 (Flyer) </li>
   *   <li> 18 (Feedback Request) </li>
   *   <li> 19 (Ratings and Reviews) </li>
   *   <li> 20 (Event Announcement) </li>
   *   <li> 21 (Simple Coupon) </li>
   *   <li> 22 (Sale Promotion) </li>
   *   <li> 23 (Product Promotion) </li>
   *   <li> 24 (Membership Drive) </li>
   *   <li> 25 (Fundraiser) </li>
   *   <li> 26 (Custom Code Email)</li>
   *   <li> 57 (A/B Test)</li>
   * </ul>
   * @example 10
   */
  type_code?: number;
  /**
   * The system generated date and time showing when the campaign was last updated. This string is read only and is in ISO-8601 format.
   * @format date-time
   * @example "2018-06-27T10:28:09.000Z"
   */
  updated_at?: string;
}

export interface PagedEmailCampaignResponse {
  _links?: EmailsPagingLinks;
  campaigns?: EmailCampaigns[];
}

export interface EmailPhysicalAddress {
  /**
   * Line 1 of the organization's street address.
   * @example "123 Maple Street"
   */
  address_line1: string;
  /**
   * Line 2 of the organization's street address.
   * @example "Unit 1"
   */
  address_line2?: string;
  /** Line 3 of the organization's street address. */
  address_line3?: string;
  /**
   * An optional address field for the organization. Only <code>format_type</code> 3, 4, and 5 can use this property.
   * @example "Near Boston Fire Station"
   */
  address_optional?: string;
  /**
   * The city where the organization sending the email campaign is located.
   * @example "Boston"
   */
  city?: string;
  /**
   * The uppercase two letter <a href='https://en.wikipedia.org/wiki/ISO_3166-1' target='_blank'>ISO 3166-1 code</a> for the organization's country.
   * @example "US"
   */
  country_code: string;
  /**
   * The full name of the country where the organization sending the email is located. Automatically generated using the <code>country_code</code>.
   * @example "United States"
   */
  country_name?: string;
  /**
   * The name of the organization that is sending the email campaign.
   * @example "Jake Dodge's Pancakes"
   */
  organization_name: string;
  /**
   * The postal code address (ZIP code) of the organization.
   * @example "02451"
   */
  postal_code?: string;
  /**
   * The uppercase two letter <a href='https://en.wikipedia.org/wiki/ISO_3166-1' target='_blank'>ISO 3166-1 code</a> for the organization's state. This property is required if the <code>country_code</code> is US (United States).
   * @example "MA"
   */
  state_code?: string;
  /** The full state name for a <code>state_code</code> that is inside the United States. Automatically generated using the <code>state_code</code>. */
  state_name?: string;
  /**
   * The full state name for a <code>state_code</code> that is outside the United States. This property is not read only.
   * @example "Victoria"
   */
  state_non_us_name?: string;
}

export interface EmailCampaignActivityInput {
  /**
   * The email format you are using to create the email campaign activity. The V3 API supports creating emails using <code>format_type</code> 5 (custom code emails).
   * @format int32
   * @example 5
   */
  format_type: number;
  /**
   * The email sender's name to display for the email campaign activity.
   * @maxLength 100
   * @example "Jake Dodge"
   */
  from_name: string;
  /**
   * The sender's email address to use for the email campaign activity. You must use a confirmed Constant Contact account email address. Make a GET call to <code>/account/emails</code> to return a collection of account emails and their confirmation status.
   * @maxLength 80
   * @example "jdodge@constantcontact.com"
   */
  from_email: string;
  /**
   * The sender's email address to use if the contact replies to the email campaign activity. You must use a confirmed Constant Contact account email address. Make a GET call to <code>/account/emails</code> to return a collection of account emails and their confirmation status.
   * @maxLength 80
   * @example "jdodge@constantconatct.com"
   */
  reply_to_email: string;
  /**
   * The text to display in the subject line that describes the email campaign activity.
   * @example "Informed Daily Digest"
   */
  subject: string;
  /**
   * The email preheader for the email campaign activity. Contacts will view your preheader as a short summary that follows the subject line in their email client. Only <code>format_type</code> 3, 4, and 5 email campaign activities use the preheader property.
   * @example "You don't want to miss this."
   */
  preheader?: string;
  /**
   * The HTML content for the email campaign activity. Only <code>format_type</code> 5 (custom code emails) can contain <code>html_content</code>. When creating a <code>format_type</code> 5 custom code email, make sure that you include <code>[[trackingImage]]</code> in the <code>&lt;body&gt;</code> element of your HTML.
   * @maxLength 150000
   * @example "<html><body>[[trackingImage]] <a href="http://www.constantcontact.com">Visit ConstantContact.com!</a> </body></html>"
   */
  html_content: string;
  /** The physical address for the organization that is sending the email campaign. Constant Contact displays this information to contacts in the email message footer. If you do not include a physical address in the email campaign activity, Constant Contact will use the physical address information saved for the Constant Contact user account. */
  physical_address_in_footer?: EmailPhysicalAddress;
}

export interface EmailCampaignComplete {
  /**
   * The unique and descriptive name that you specify for the email campaign.
   * @maxLength 80
   * @example "December Newsletter for Dog Lovers"
   */
  name: string;
  /** The content of the email campaign as an array that contains a single email campaign activity object. */
  email_campaign_activities: EmailCampaignActivityInput[];
}

export interface ActivityReference {
  /**
   * The ID (UUID) that uniquely identifies a campaign activity.
   * @example "0e3feddd-c8da-4d53-a507-aae5082b8b75"
   */
  campaign_activity_id?: string;
  /**
   * The purpose of the individual campaign activity in the larger email campaign effort. Valid values are: <ul>
   *   <li>primary_email — The main email marketing campaign that you send to contacts. The <code>primary_email</code> contains the complete email content.</li>
   *   <li>permalink — A permanent link to a web accessible version of the <code>primary_email</code> content without any personalized email information. For example, permalinks do not contain any of the contact details that you add to the <code>primary_email</code> email content. </li>
   *   <li>resend — An email campaign that you resend to contacts that did not open the email campaign.</li>
   * </ul> Constant Contact creates a <code>primary_email</code> and a <code>permalink</code> role campaign activity when you create an email campaign.
   * @example "primary_email"
   */
  role?: string;
}

export interface EmailCampaign {
  /** Lists the role and unique activity ID of each campaign activity that is associated with an Email Campaign. */
  campaign_activities?: ActivityReference[];
  /**
   * The unique ID used to identify the email campaign (UUID format).
   * @example "8987dc1a-48ef-433a-b836-7ca4f9aa3481"
   */
  campaign_id?: string;
  /**
   * The system generated date and time that this email campaign was created. This string is readonly and is in ISO-8601 format.
   * @format date-time
   * @example "2018-02-06T22:09:15.000Z"
   */
  created_at?: string;
  /**
   * The current status of the email campaign. Valid values are: <ul>
   *   <li>Draft — An email campaign that you have created but have not sent to contacts.</li>
   *   <li>Scheduled — An email campaign that you have scheduled for Constant Contact to send to contacts.</li>
   *   <li>Executing — An email campaign that Constant Contact is currently sending to contacts. Email campaign activities are only in this status briefly.</li>
   *   <li>Done — An email campaign that you successfully sent to contacts.</li>
   *   <li>Error — An email campaign activity that encountered an error.</li>
   *   <li>Removed — An email campaign that a user deleted. Users can view and restore deleted emails through the UI.</li>
   * </ul>
   * @example "Draft"
   */
  current_status?: string;
  /**
   * The descriptive name the user provides to identify this campaign. Campaign names must be unique for each account ID.
   * @maxLength 80
   * @example "December Newsletter for Dog Lovers"
   */
  name?: string;
  /**
   * Identifies the type of campaign that you select when creating the campaign. Newsletter and Custom Code email campaigns are the primary types.
   * @example "NEWSLETTER"
   */
  type?: string;
  /**
   * The code used to identify the email campaign `type`. <ul>
   *   <li> 1  (Default) </li>
   *   <li> 2  (Bulk Email) </li>
   *   <li> 10 (Newsletter) </li>
   *   <li> 11 (Announcement) </li>
   *   <li> 12 (Product/Service News) </li>
   *   <li> 14 (Business Letter) </li>
   *   <li> 15 (Card) </li>
   *   <li> 16 (Press release)</li>
   *   <li> 17 (Flyer) </li>
   *   <li> 18 (Feedback Request) </li>
   *   <li> 19 (Ratings and Reviews) </li>
   *   <li> 20 (Event Announcement) </li>
   *   <li> 21 (Simple Coupon) </li>
   *   <li> 22 (Sale Promotion) </li>
   *   <li> 23 (Product Promotion) </li>
   *   <li> 24 (Membership Drive) </li>
   *   <li> 25 (Fundraiser) </li>
   *   <li> 26 (Custom Code Email)</li>
   *   <li> 57 (A/B Test)</li>
   * </ul>
   * @example 10
   */
  type_code?: number;
  /**
   * The system generated date and time showing when the campaign was last updated. This string is read only and is in ISO-8601 format.
   * @format date-time
   * @example "2018-06-27T10:28:09.000Z"
   */
  updated_at?: string;
}

export interface EmailCampaignName {
  /**
   * The updated email campaign name. The email campaign name must be unique.
   * @maxLength 80
   * @example "December Newsletter for Dog Lovers"
   */
  name: string;
}

export interface CrossReference {
  /**
   * Identifies an email campaign in the V2 API.
   * @example "1100567546598"
   */
  v2_email_campaign_id?: string;
  /**
   * <p>Identifies a campaign in the V3 API. In the V3 API, each campaign contains one or more activities. For more information, see <a href="/api_guide/v3_v2_email_campaign_deltas.html" target_"blank">V3 Email Campaign Resource Changes<a/>.<p>
   * @format uuid
   * @example "e4cf53f0-e37f-11e8-9f32-f2801f1b9fd1"
   */
  campaign_id?: string;
  /**
   * <p>Identifies a campaign activity in the V3 API. In the V3 API, each campaign contains one or more activities. Email type activities represent the detailed information in an email and contain properties like <code>from_email</code> and <code>from_name</code>. For more information, see <a href="/api_guide/v3_v2_email_campaign_deltas.html" target_"blank">V3 Campaign Resource Changes<a/>.<p>
   * @format uuid
   * @example "4c08372c-957a-48b5-bc45-72c7f00796cd"
   */
  campaign_activity_id?: string;
}

export interface CrossReferenceResponse {
  /** An array of objects that contain a <code>v2_email_campaign_id</code> cross-referenced with a V3 <code>campaign_id</code> and a V3 <code>campaign_activity_id</code> value. */
  xrefs?: CrossReference[];
}

export interface EmailCampaignActivity {
  /**
   * Identifies a campaign activity in the V3 API.
   * @example "4c08372c-957a-48b5-bc45-72c7f00796cd"
   */
  campaign_activity_id?: string;
  /**
   * Identifies a campaign in the V3 API.
   * @example "8987dc1a-48ef-433a-b836-7ca4f9aa3481"
   */
  campaign_id?: string;
  /**
   * The purpose of the individual campaign activity in the larger email campaign effort. Valid values are: <ul>
   *   <li>primary_email — The main email marketing campaign that you send to contacts. The <code>primary_email</code> contains the complete email content.</li>
   *   <li>permalink — A permanent link to a web accessible version of the <code>primary_email</code> content without any personalized email information. For example, permalinks do not contain any of the contact details that you add to the <code>primary_email</code> email content. </li>
   *   <li>resend — An email campaign that you resend to contacts that did not open the email campaign.</li>
   * </ul> Constant Contact creates a <code>primary_email</code> and a <code>permalink</code> role campaign activity when you create an email campaign.
   * @example "primary_email"
   */
  role?: string;
  /** The contacts that Constant Contact sends the email campaign activity to as an array of contact <code>list_id</code> values. You cannot use contact lists and segments at the same time in an email campaign activity. */
  contact_list_ids?: string[];
  /** The contacts that Constant Contact sends the email campaign activity to as an array containing a single <code>segment_id</code> value. Only <code>format_type</code> 3, 4, and 5 email campaign activities support segments. You cannot use contact lists and segments at the same time in an email campaign activity. */
  segment_ids?: number[];
  /**
   * The current status of the email campaign activity. Valid values are: <ul>
   *   <li>DRAFT — An email campaign activity that you have created but have not sent to contacts.</li>
   *   <li>SCHEDULED — An email campaign activity that you have scheduled for Constant Contact to send to contacts.</li>
   *   <li>EXECUTING — An email campaign activity Constant Contact is currently sending to contacts. Email campaign activities are only in this status briefly.</li>
   *   <li>DONE — An email campaign activity that you successfully sent to contacts.</li>
   *   <li>ERROR — An email campaign activity that encountered an error.</li>
   *   <li>REMOVED — An email campaign that a user deleted. Users can view and restore deleted emails through the UI.</li>
   * </ul>
   * @example "DRAFT"
   */
  current_status?: string;
  /**
   * Identifies the type of email format. Valid values are: <ul>
   *   <li>1 - A legacy custom code email created using the V2 API, the V3 API, or the legacy UI HTML editor.</li>
   *   <li>2 - An email created using the second generation email editor UI.</li>
   *   <li>3 - An email created using the third generation email editor UI. This email editor features an improved drag and drop UI and mobile responsiveness.</li>
   *   <li>4 - An email created using the fourth generation email editor UI.</li>
   *   <li>5 - A custom code email created using the V3 API or the new UI HTML editor.</li>
   * </ul>
   * @format int32
   * @example 5
   */
  format_type?: number;
  /**
   * The email "From Email" field for the email campaign activity. You must use a confirmed Constant Contact account email address. Make a GET call to <code>/account/emails</code> to return a collection of account emails and their confirmation status.
   * @example "jdodge@constantcontact.com"
   */
  from_email: string;
  /**
   * The email "From Name" field for the email campaign activity.
   * @example "Jake Dodge"
   */
  from_name: string;
  /**
   * The email "Reply To Email" field for the email campaign activity. You must use a confirmed Constant Contact account email address. Make a GET call to <code>/account/emails</code> to return a collection of account emails and their confirmation status.
   * @example "jdodge@constantcontact.com"
   */
  reply_to_email: string;
  /**
   * The email "Subject" field for the email campaign activity.
   * @example "Holiday Special Newsletter"
   */
  subject: string;
  /**
   * The HTML or XHTML content for the email campaign activity. Only <code>format_type</code> 1 and 5 (legacy custom code emails or modern custom code emails) can contain <code>html_content</code>.
   * @example "<html><body>[[trackingImage]] <a href="http://www.constantcontact.com">Visit ConstantContact.com!</a> </body></html>"
   */
  html_content?: string;
  /**
   * Identifies the email layout and design template that the email campaign activity is using as a base.
   * @example "1000755366001"
   */
  template_id?: string;
  /**
   * The permanent link to a web accessible version of the email campaign content without any personalized email information. The permalink URL becomes accessible after you send an email campaign to contacts.
   * @example "https://conta.cc/2GaQ8AY"
   */
  permalink_url?: string;
  /**
   * The email preheader for the email campaign activity. Only <code>format_type</code> 3, 4, and 5 email campaign activities use the preheader property.
   * @example "You don't want to miss this."
   */
  preheader?: string;
  /** The physical address of the organization that is sending the email campaign. Constant Contact displays this information to contacts in the email message footer. */
  physical_address_in_footer?: EmailPhysicalAddress;
  /** An object that contains optional properties for legacy format type emails (<code>format_type</code> 1 and 2). If you attempt to add a property that does apply to the email <code>format_type</code>, the API will ignore the property. */
  document_properties?: {
    /**
     * Contains style sheet elements for XHTML letter format emails. This property applies only to <code>format_type</code> 1.
     * @maxLength 150000
     * @example ".white{color: #ffffff;}"
     */
    style_content?: string;
    /**
     * Email message format. Valid values are <code>HTML</code> and <code>XHTML</code>. By default, the value is <code>HTML</code>. For more information, see the <a href="http://www.constantcontact.com/display_media.jsp?id=87" target="_blank">Advanced Editor User's Guide</a>. This property applies only to <code>format_type</code> 1. You cannot change this property after you create an email.
     * @default "HTML"
     * @example "XHTML"
     */
    letter_format?: string;
    /**
     * The greeting used in the email message. This property applies only to <code>format_type</code> 1.
     * @maxLength 50
     * @example "Dear"
     */
    greeting_salutation?: string;
    /**
     * The type of name the campaign uses to greet the contact. Valid values are <code>F</code> (First Name), <code>L</code> (Last Name), <code>B</code> (First and Last Name), or <code>N</code> (No greeting). By default, the value is <code>N</code>. This property applies only to <code>format_type</code> 1.
     * @default "N"
     * @example "F"
     */
    greeting_name_type?: string;
    /**
     * A fallback text string the campaign uses to greet the contact when the <code>greeting_name_type</code> is not available or set to <code>N</code>. This property applies only to <code>format_type</code> 1.
     * @maxLength 1500
     * @example "Greetings!"
     */
    greeting_secondary?: string;
    /**
     * If <code>true</code>, the email footer includes a link for subscribing to the list. If <code>false</code>, the message footer does not include a link for subscribing to the list. By default, the value is <code>false</code>. This property applies only to <code>format_type</code> 1.
     * @default "false"
     * @example "false"
     */
    subscribe_link_enabled?: string;
    /**
     * The text displayed as the name for the subscribe link in the email footer. This property applies only to <code>format_type</code> 1.
     * @maxLength 80
     * @example "Subscribe to my email list!"
     */
    subscribe_link_name?: string;
    /**
     * Contains the text content that Constant Contact displays to contacts when their email client cannot display HTML email. If you do not specify text content, Constant Contact displays "Greetings!" as the text content. This property applies only to <code>format_type</code> 1.
     * @maxLength 150000
     * @example "<Text><Greeting/></Text>"
     */
    text_content?: string;
    /**
     * If <code>true</code>, Constant Contact displays your <code>permission_reminder</code> message to contacts at top of the email. If <code>false</code>, Constant Contact does not display the message. By default, the value is <code>false</code>. This property applies to <code>format_type</code> 1 and 2.
     * @default "false"
     * @example "false"
     */
    permission_reminder_enabled?: string;
    /**
     * The message text Constant Contact displays at the top of the email message to remind users that they are subscribed to an email list. This property applies to <code>format_type</code> 1 and 2.
     * @maxLength 1500
     * @example "Hi, just a reminder that you're receiving this email because you have expressed an interest in our company."
     */
    permission_reminder?: string;
    /**
     * If <code>true</code>, Constant Contact displays the view as web page email message. If <code>false</code> Constant Contact does not display the message. By default, the value is <code>false</code>. This property applies to <code>format_type</code> 1 and 2.
     * @default "false"
     * @example "false"
     */
    view_as_webpage_enabled?: string;
    /**
     * The text Constant Contact displays before the view as web page link at the top of the email. This property applies to <code>format_type</code> 1 and 2.
     * @maxLength 50
     * @example "Having trouble viewing this email?"
     */
    view_as_webpage_text?: string;
    /**
     * The name of the link that users can click to view the email as a web page. This property applies to <code>format_type</code> 1 and 2.
     * @example "Click here to view this email as a web page"
     */
    view_as_webpage_link_name?: string;
    /**
     * If <code>true</code>, when the user forwards an email message the footer includes a link for subscribing to the list. If <code>false</code>, when a user forwards an email message the footer does not include a link for subscribing to the list. By default, the value is <code>false</code>. This property applies to <code>format_type</code> 1 and 2.
     * @default "false"
     */
    forward_email_link_enabled?: string;
    /**
     * The text displayed as the name for the forward email link in the footer when a user forwards an email. This property applies to <code>format_type</code> 1 and 2.
     * @maxLength 80
     * @example "Forward email"
     */
    forward_email_link_name?: string;
  };
}

export type EmailScheduleResponse = {
  /**
   * The date when Constant Contact will send the email campaign activity to contacts in ISO-8601 format. For example, <code>2022-05-17</code> and <code>2022-05-17T16:37:59.091Z</code> are valid dates.
   * @format date-time
   */
  scheduled_date?: string;
}[];

export interface EmailScheduleInput {
  /**
   * The date when Constant Contact will send the email campaign activity to contacts in ISO-8601 format. For example, <code>2022-05-17</code> and <code>2022-05-17T16:37:59.091Z</code> are valid dates. Use <code>"0"</code> as the date to have Constant Contact immediately send the email campaign activity to contacts.
   * @format date-time
   */
  scheduled_date: string;
}

export interface EmailTestSendInput {
  /**
   * The recipients of the test email as an array of email address strings. You can send a test email to up to 5 different email addresses at a time.
   * @maxItems 5
   */
  email_addresses: string[];
  /**
   * A personal message for the recipients of the test email. Constant Contact displays this message before the email campaign activity content.
   * @example "This is a test send of the email campaign activity."
   */
  personal_message?: string;
}

export interface EmailCampaignActivityPreview {
  /**
   * The unique ID for an email campaign activity.
   * @example "4c08372c-957a-48b5-bc45-72c7f00796cd"
   */
  campaign_activity_id?: string;
  /**
   * The "from email" email header for the email campaign activity.
   * @example "jdodge@constantconatct.com"
   */
  from_email?: string;
  /**
   * The "from name" email header for the email campaign activity.
   * @example "Jake Dodge"
   */
  from_name?: string;
  /**
   * The email preheader for the email campaign activity. Only <code>format_type</code> 3, 4, and 5 email campaign activities use the preheader property.
   * @example "You don't want to miss this."
   */
  preheader?: string;
  /**
   * An HTML preview of the email campaign activity.
   * @example "<html><body> <a href=\"http://www.constantcontact.com\">Visit ConstantContact.com!</a> </body></html>"
   */
  preview_html_content?: string;
  /**
   * A plain text preview of the email campaign activity.
   * @example "Email Content"
   */
  preview_text_content?: string;
  /**
   * The email "Reply To Email" field for the email campaign activity.
   * @example "jdodge@constantcontact.com"
   */
  reply_to_email?: string;
  /**
   * The email "Subject" field for the email campaign activity.
   * @example "Informed Daily Digest"
   */
  subject?: string;
}

export type EmailSendHistory = {
  /**
   * Uniquely identifies each send history object using the number of times that you sent the email campaign activity as a sequence starting at <code>1</code>. For example, when you send a specific email campaign activity twice this method returns an object with a <code>send_id</code> of 1 for the first send and an object with a <code>send_id</code> of 2 for the second send.
   * @format int32
   * @min 1
   * @example 1
   */
  send_id?: number;
  /** The contacts lists that Constant Contact sent email campaign activity to as an array of contact <code>list_id</code> strings. */
  contact_list_ids?: string[];
  /** The contact segments that Constant Contact sent the email campaign activity to as an array of <code>segment_id</code> integers. */
  segment_ids?: number[];
  /**
   * The number of contacts that Constant Contact sent this email campaign activity to. This property is specific to each send history object. When you resend an email campaign activity, Constant Contact only sends it to new contacts in the contact lists or segments you are using.
   * @format int64
   * @example 200
   */
  count?: number;
  /**
   * The system generated date and time that Constant Contact sent the email campaign activity to contacts in ISO-8601 format.
   * @format date-time
   * @example "2018-06-27T10:28:09.000Z"
   */
  run_date?: string;
  /**
   * The send status for the email campaign activity. Valid values are: <ul>
   *   <li><code>COMPLETED</code>: Constant Contact successfully sent the email campaign activity.</li>
   *   <li><code>ERRORED</code>: Constant Contact encountered an error when sending the email campaign activity.<li>
   * </ul>
   * @example "COMPLETED"
   */
  send_status?: string;
  /**
   * The reason why the send attempt completed or encountered an error. This method returns <code>0</code> if Constant Contact successfully sent the email campaign activity to contacts. Possible <code>reason_code</code> values are: <ul>
   *       <li>0 — Constant Contact successfully sent the email to contacts.</li>
   *       <li>1 — An error occurred when sending this email. Try scheduling it again, or contact <a href='http://support.constantcontact.com' target='_blank'>Customer Support</a>.</li>
   *       <li>2 — We were unable to send the email. Please contact our <a href='http://knowledgebase.constantcontact.com/articles/KnowledgeBase/5782-contact-an-account-review-and-deliverability-specialist' target='_blank'>Account Review Team</a> for more information.</li>
   *       <li>3 — This Constant Contact account cannot currently send emails. This can be due to billing or product expiration.</li>
   *       <li>4 — You're not able to send the email to that many contacts. Remove contacts from the contact lists you are using or select a list with fewer contacts.</li>
   *       <li>5 — The email is currently in staging. For more information, see the <a href='http://knowledgebase.constantcontact.com/articles/KnowledgeBase/7402-email-staging' target='_blank>Email Staging Knowledge Base article</a>.</li>
   *       <li>6 — Constant Contact was unable to finish sending this email to all of the contacts on your list. Please contact <a href='http://support.constantcontact.com' target='_blank'>Customer Support</a> for more information.</li>
   *       <li>7 — The email contains invalid images. This can be caused when one or more images in the email are longer available in your image library.</li>
   *       <li>8 — The email contains a link URL that exceeds 1005 characters.</li>
   *       <li>9 — Constant Contact was unable to verify your authenticated Sender address. Please contact <a href='http://support.constantcontact.com' target='_blank'>Customer Support</a> for more information.</li>
   *       <li>10 — Constant Contact was unable to verify your authenticated Sender address. Please contact <a href='http://support.constantcontact.com' target='_blank'>Customer Support</a> for more information.</li>
   *       <li>11 — This Constant Contact account cannot send survey invitations.</li>
   *       <li>12 — Constant Contact attempted to send the email, but there were no eligible contacts to send it to. This can be caused by an invalid contact list, a contact list with no contacts, or a contact list with no new contacts during a resend. This method displays <code>reason_code</code> 12 as a send attempt with a <code>send_status</code> of COMPLETED and a <code>count</code> of 0.</li>
   * </ul>
   * @format int32
   * @example 0
   */
  reason_code?: number;
}[];

export type ResendToNonOpeners = {
  /**
   * The subject line used when resending the email campaign activity.
   * @example "Our Big Sale is Coming Soon!"
   */
  resend_subject?: string;
  /**
   * The number of days to wait before Constant Contact resends the email. Valid values include <code>1</code> to <code>10</code> days. This value is only returned in the response results if the resend activity was created with <code>delay_days</code> or the <code>delay_minutes</code> equal to an exact day value.
   * @format int32
   * @example 3
   */
  delay_days?: number;
  /**
   * The number of minutes to wait before Constant Contact resends the email. There are 1,440 minutes in a day. Valid values includes a minimum of <code>720</code> (12 hours) and a maximum of <code>14,400</code> minutes (10 days). This property is mutually exclusive with <code>delay_days</code>.
   * @format int32
   * @example 1000
   */
  delay_minutes?: number;
  /**
   * The system generated date and time (in ISO-8601 format) that the email campaign activity was resent to non-openers (only included in the response results for sent resend activities).
   * @format date-time
   */
  resend_date?: string;
  /**
   * For scheduled or sent resend to non-opener emails, the system generates an ID that identifies the resend to non-openers activity. For draft email campaign resend activities, the system returns <code>DRAFT</code>.
   * @example "DRAFT"
   */
  resend_request_id?: string;
  /**
   * The status of the resend to non-openers campaign activity. The <code>resend_status</code> is only returned in the response results if the campaign activity is either scheduled to be sent or was already sent.
   * @example "DRAFT"
   */
  resend_status?: string;
}[];

export interface ResendToNonOpenersInput {
  /**
   * The subject line used when resending the email campaign activity.
   * @example "Our Big Sale is Coming Soon!"
   */
  resend_subject: string;
  /**
   * The number of days to wait before Constant Contact resends the email. Valid values include <code>1</code> to <code>10</code> days. This property is mutually exclusive with <code>delay_minutes</code>. This value is only returned in the response results if the resend activity was created with <code>delay_days</code> or the <code>delay_minutes</code> equal to an exact day value.
   * @format int32
   * @example 3
   */
  delay_days?: number;
  /**
   * The number of minutes to wait before Constant Contact resends the email campaign activity. There are 1,440 minutes in a day. Valid values includes a minimum of <code>720</code> (12 hours) and a maximum of <code>14,400</code> minutes (10 days). This property is mutually exclusive with <code>delay_days</code>
   * @format int32
   * @example 1000
   */
  delay_minutes?: number;
}

export interface ResendToNonOpenersObject {
  /**
   * The subject line for the resend email.
   * @example "Our Big Sale is Coming Soon!"
   */
  resend_subject?: string;
  /**
   * The number of days to wait before Constant Contact resends the email. Valid values include <code>1</code> to <code>10</code> days. This property is mutually exclusive with <code>delay_minutes</code>. This value is only returned in the response results if the resend activity was created with <code>delay_days</code> or the <code>delay_minutes</code> equal to an exact day value.
   * @format int32
   * @example 7
   */
  delay_days?: number;
  /**
   * The number of minutes to wait before Constant Contact resends the email. There are 1,440 minutes in a day. Valid values includes a minimum of <code>720</code> (12 hours) and a maximum of <code>14,400</code> minutes (10 days). This property is mutually exclusive with <code>delay_days</code>.
   * @format int32
   * @example "10,080"
   */
  delay_minutes?: number;
  /**
   * The system generated ISO-8601 format date and time that Constant Contact resent the email to non-openers.
   * @format date-time
   */
  resend_date?: string;
  /**
   * For scheduled or sent resend to non-opener emails, this property is a unique identifier for the resend. For draft email campaign resend activities, the value of this property is <code>DRAFT</code>.
   * @example "DRAFT"
   */
  resend_request_id?: string;
}

export interface ABTestData {
  /**
   * The alternate email subject line to use for A/B testing.
   * @example "Reminder: Our Biggest Sale of the Year is Coming Soon!"
   */
  alternative_subject: string;
  /**
   * The percentage of contact recipients to participate in the A/B Test. For example, if the value is 30, then 30% of contacts will receive the email campaign with subject line A, and 30% of contacts will receive the email campaign with subject line B. Valid values include <code>5</code> to <code>50</code> percent. Currently, A/B tests support subject line only.
   * @format int32
   * @example 30
   */
  test_size: number;
  /**
   * The number of hours Constant Contact waits after the A/B test is sent before determining the winning subject line. The winner is the subject line with the highest number of contact opens. Valid values include <code>6</code>, <code>12</code>, <code>24</code>, and <code>48</code>. After the winner is determined, Constant Contact automatically sends the email campaign with the winning subject line to all the remaining contacts, which did not participate in the A/B test.
   * @format int32
   * @example 24
   */
  winner_wait_duration: number;
}

/** The base contact tracking activity representing sends, opt-outs and forwards to a friend. The basic information provided includes the campaign activity ID, tracking activity type, and time the tracking activity occurred. */
export interface ContactTrackingActivity {
  /**
   * The contact ID.
   * @format uuid
   * @example "71600990-908b-11e6-907f-00166bff25"
   */
  contact_id: string;
  /**
   * The unique ID of the activity for an e-mail campaign.
   * @format uuid
   * @example "010a0-1234-5678-9012-1100a0c1ab2a"
   */
  campaign_activity_id: string;
  /**
   * The time the tracking activity occurred
   * @format date-time
   * @example "2017-04-02T04:08:00.000Z"
   */
  created_time?: string;
  /**
   * The types of the tracking activities included in the request. For example, sends, opens, clicks, bounces, opt-outs, or forwards.
   * @example "em_sends"
   */
  tracking_activity_type?: string;
  /**
   * The campaign activity name.
   * @example "April DLCV Newsletter"
   */
  campaign_activity_name?: string;
}

/** A page of tracking activities for a contact that can include sends, opens, clicks, bounces, opt-outs and forwards to a friend. If it exists, a link to the next page of tracking activities is provided. */
export interface ContactTrackingActivitiesPage {
  /** The list of contact tracking activities in descending date order. */
  tracking_activities?: ContactTrackingActivity[];
  /** The next link if more contact tracking activities are available. */
  _links?: ReportingLinks;
}

/** The average click and open rates for a provided contact. The basic information provided is contact id, open rate, click rate, and emails included in the calculation. */
export interface ContactOpenAndClickRates {
  /**
   * The unique ID of the contact for which the report is being generated.
   * @format uuid
   * @example "71600990-908b-11e6-907f-00166bff25"
   */
  contact_id: string;
  /**
   * The number of activities included in the calculation.
   * @format int32
   * @example 10
   */
  included_activities_count: number;
  /**
   * The average rate the contact opened emails sent to them.
   * @format double
   * @example 0.6
   */
  average_open_rate: number;
  /**
   * The average rate the contact clicked on links in emails sent to them.
   * @format double
   * @example 0.6
   */
  average_click_rate: number;
}

export interface CampaignActivitySummary {
  /**
   * The unique id of the activity for an e-mail campaign.
   * @format uuid
   */
  campaign_activity_id: string;
  /**
   * The last date at which the email was sent to this contact.
   * @format date-time
   */
  start_on: string;
  /**
   * The number of times the email has bounced for this contact.
   * @format int32
   */
  em_bounces: number;
  /**
   * The number of times this contact has clicked a link in this email.
   * @format int32
   */
  em_clicks: number;
  /**
   * The number of times this contact has forwarded this email.
   * @format int32
   */
  em_forwards: number;
  /**
   * The number of times this contact has opened this email.
   * @format int32
   */
  em_opens: number;
  /**
   * The number of times the email was sent to this contact.
   * @format int32
   */
  em_sends: number;
  /**
   * The number of times this contact has opted out.
   * @format int32
   */
  em_unsubscribes: number;
}

export interface ContactCampaignActivitiesSummary {
  /**
   * Unique id of the contact that will have their activity summarized.
   * @format uuid
   * @example "71600990-908b-11e6-907f-00166bff25"
   */
  contact_id: string;
  /** A summary of all the actions for a contact. */
  campaign_activities: CampaignActivitySummary[];
  /** The next link if more summaries of activities are available. */
  _links?: ReportingLinks;
}

export interface EmailLinkClickCount {
  /**
   * The URL of a link in an email campaign activity. This URL is not normalized and appears the same as the URL in the email campaign activity.
   * @example "https://www.constantcontact.com/"
   */
  link_url?: string;
  /**
   * The ID for a unique link URL in an email campaign activity.
   * @example "1100577727321"
   */
  url_id?: string;
  /**
   * The number of unique contacts that clicked the link.
   * @format int32
   * @example 99
   */
  unique_clicks?: number;
  /**
   * If the link uses the click segmentation feature, this property contains the action that contacts trigger when they click the link. Currently the only available action is <code>add</code>, which adds contacts that click the link to a contact list.
   * @example "add"
   */
  list_action?: string;
  /**
   * If the link uses the click segmentation feature, this property contains the contact list linked with the <code>list_action</code> property.
   * @format uuid
   * @example "3377aefd-970a-4de6-8400-ab4ec491624c"
   */
  list_id?: string;
  /**
   * Link tags are not currently available in email campaigns. By default, this method combines results for duplicate link URLs. Link tags will allow users to get a separate link click report for each unique <code>link_tag</code> value they use, even if URLs are not unique.
   * @example "google-link-1"
   */
  link_tag?: string;
}

export interface EmailLinks {
  /**
   * The unique ID for an email campaign activity.
   * @format uuid
   * @example "8892baf9-970a-4de6-8400-fa4ec461987c"
   */
  campaign_activity_id?: string;
  /** An array of objects that contain the contact click count and link metadata for each unique link URL in an email campaign activity. By default, this method combines results for duplicate link URLs. */
  link_click_counts?: EmailLinkClickCount[];
}

export interface SendsTrackingActivity {
  /**
   * The ID that uniquely identifies a contact.
   * @format uuid
   * @example "a2fdc285-f4bc-408c-9e64-f3f89038ec82"
   */
  contact_id: string;
  /**
   * The ID that uniquely identifies an email campaign activity.
   * @format uuid
   * @example "98edac88-f4bc-408c-9e64-acd890384231"
   */
  campaign_activity_id: string;
  /**
   * The type of tracking activity that is associated with this <code>campaign_activity_id</code> and used for reporting purposes.
   * @example "em_sends"
   */
  tracking_activity_type: string;
  /**
   * The email address used to send the email campaign activity to a contact.
   * @example "maddieb@gmail.com"
   */
  email_address: string;
  /**
   * The first name of the contact.
   * @example "Maddie"
   */
  first_name?: string;
  /**
   * The last name of the contact.
   * @example "Brown"
   */
  last_name?: string;
  /**
   * The date and time that you sent the email campaign to the contact.
   * @format date-time
   * @example "2019-04-25T11:08:00.000Z"
   */
  created_time: string;
  /**
   * If applicable, displays the date that the contact was deleted.
   * @format date
   * @example "2019-04-10"
   */
  deleted_at?: string;
}

export interface SendsTrackingActivitiesPage {
  /** Lists the contacts to which the email campaign activity (<code>campaign_activity_id</code>) was sent. */
  tracking_activities: SendsTrackingActivity[];
  /** HAL property that contains the next link, if applicable. */
  _links?: ReportingLinks;
}

export interface OpensTrackingActivity {
  /**
   * The ID that uniquely identifies a contact.
   * @format uuid
   * @example "a2fdc285-f4bc-408c-9e64-f3f89038ec82"
   */
  contact_id: string;
  /**
   * The ID that uniquely identifies an email campaign activity.
   * @format uuid
   * @example "98edac88-f4bc-408c-9e64-acd890384231"
   */
  campaign_activity_id: string;
  /**
   * The type of tracking activity that is associated with this <code>campaign_activity_id</code> and used for reporting purposes.
   * @example "em_opens"
   */
  tracking_activity_type: string;
  /**
   * The email address used to send the email campaign activity to a contact.
   * @example "maddieb@gmail.com"
   */
  email_address: string;
  /**
   * The first name of the contact.
   * @example "Maddie"
   */
  first_name?: string;
  /**
   * The last name of the contact.
   * @example "Brown"
   */
  last_name?: string;
  /**
   * The type of device that the contact used to open the email campaign activity.
   * @example "computer"
   */
  device_type?: string;
  /**
   * The date and time that the contact opened the email campaign activity.
   * @format date-time
   * @example "2019-04-25T11:08:00.000Z"
   */
  created_time: string;
  /**
   * If applicable, displays the date that the contact was deleted.
   * @format date
   * @example "2015-08-10"
   */
  deleted_at?: string;
}

export interface OpensTrackingActivitiesPage {
  /** Lists contacts that opened the specified <code>campaign_activity_id</code>. */
  tracking_activities: OpensTrackingActivity[];
  /** HAL property that contains the next link, if applicable. */
  _links?: ReportingLinks;
}

export interface DidNotOpensTrackingActivity {
  /**
   * The ID that uniquely identifies a contact.
   * @format uuid
   * @example "a2fdc285-f4bc-408c-9e64-f3f89038ec82"
   */
  contact_id: string;
  /**
   * The ID that uniquely identifies an email campaign activity.
   * @format uuid
   * @example "98edac88-f4bc-408c-9e64-acd890384231"
   */
  campaign_activity_id: string;
  /**
   * The type of tracking activity that is associated with this <code>campaign_activity_id</code> and used for reporting purposes.
   * @example "em_sends"
   */
  tracking_activity_type: string;
  /**
   * The email address used to send the email campaign activity to a contact.
   * @example "maddieb@gmail.com"
   */
  email_address: string;
  /**
   * The first name of the contact.
   * @example "Maddie"
   */
  first_name?: string;
  /**
   * The last name of the contact.
   * @example "Brown"
   */
  last_name?: string;
  /**
   * The date and time that the contact was sent the email campaign activity.
   * @format date-time
   * @example "2019-04-25T11:08:00.000Z"
   */
  created_time: string;
  /**
   * If applicable, displays the date that the contact was deleted.
   * @format date
   * @example "2015-08-10"
   */
  deleted_at?: string;
}

export interface DidNotOpensTrackingActivitiesPage {
  /** Lists contacts that did not open the specified <code>campaign_activity_id</code>. */
  tracking_activities: DidNotOpensTrackingActivity[];
  /** HAL property that contains the next link, if applicable. */
  _links?: ReportingLinks;
}

export interface ClicksTrackingActivity {
  /**
   * The ID that uniquely identifies a contact.
   * @format uuid
   * @example "a2fdc285-f4bc-408c-9e64-f3f89038ec82"
   */
  contact_id: string;
  /**
   * The ID that uniquely identifies the email campaign activity.
   * @format uuid
   * @example "98edac88-f4bc-408c-9e64-acd890384231"
   */
  campaign_activity_id: string;
  /**
   * The type of report tracking activity that is associated with the specified <code>campaign_activity_id</code>.
   * @example "em_clicks"
   */
  tracking_activity_type: string;
  /**
   * The email address used to send the email campaign activity to a contact.
   * @example "maddieb@gmail.com"
   */
  email_address: string;
  /**
   * The first name of the contact.
   * @example "Maddie"
   */
  first_name?: string;
  /**
   * The last name of the contact.
   * @example "Brown"
   */
  last_name?: string;
  /**
   * The type of device that the contact was using when they clicked the URL link for the email campaign activity.
   * @example "computer"
   */
  device_type?: string;
  /**
   * The ID used to uniquely identify the URL link.
   * @example "1100407204171"
   */
  url_id: string;
  /**
   * The text used for the URL link.
   * @example "http://www.yoursite.com"
   */
  link_url: string;
  /**
   * The date and time that the contact clicked the specified URL link for the email campaign activity.
   * @format date-time
   * @example "2019-04-25T11:08:00.000Z"
   */
  created_time: string;
  /**
   * If applicable, displays the date that the contact was deleted.
   * @format date
   * @example "2015-08-10"
   */
  deleted_at?: string;
}

export interface ClicksTrackingActivitiesPage {
  /** The list of click tracking activities */
  tracking_activities: ClicksTrackingActivity[];
  /** HAL property that contains next link if applicable. */
  _links?: ReportingLinks;
}

export interface ForwardsTrackingActivity {
  /**
   * The ID that uniquely identifies a contact.
   * @format uuid
   * @example "a2fdc285-f4bc-408c-9e64-f3f89038ec82"
   */
  contact_id: string;
  /**
   * The ID that uniquely identifies the email campaign activity.
   * @format uuid
   * @example "98edac88-f4bc-408c-9e64-acd890384231"
   */
  campaign_activity_id: string;
  /**
   * The type of report tracking activity that is associated with the specified <code>campaign_activity_id</code>.
   * @example "em_forwards"
   */
  tracking_activity_type: string;
  /**
   * The contact's email address.
   * @example "maddieb@gmail.com"
   */
  email_address: string;
  /**
   * The first name of the contact.
   * @example "Maddie"
   */
  first_name?: string;
  /**
   * The last name of the contact.
   * @example "Brown"
   */
  last_name?: string;
  /**
   * The time that the contact forwarded the email campaign activity.
   * @format date-time
   * @example "2019-04-25T11:08:00.000Z"
   */
  created_time: string;
  /**
   * If applicable, displays the date that the contact was deleted.
   * @format date
   * @example "2015-08-10"
   */
  deleted_at?: string;
}

export interface ForwardsTrackingActivitiesPage {
  /** The list of contacts that forwarded the specified email campaign activity.  */
  tracking_activities: ForwardsTrackingActivity[];
  /** HAL property that contains the next link, if applicable. */
  _links?: ReportingLinks;
}

export interface OptoutsTrackingActivity {
  /**
   * The ID that uniquely identifies a contact.
   * @format uuid
   * @example "a2fdc285-f4bc-408c-9e64-f3f89038ec82"
   */
  contact_id: string;
  /**
   * The ID that uniquely identifies the email campaign activity.
   * @format uuid
   * @example "98edac88-f4bc-408c-9e64-acd890384231"
   */
  campaign_activity_id: string;
  /**
   * The type of report tracking activity that is associated with the specified <code>campaign_activity_id</code>.
   * @example "em_optouts"
   */
  tracking_activity_type: string;
  /**
   * The contact's email address.
   * @example "maddieb@gmail.com"
   */
  email_address: string;
  /**
   * The first name of the contact.
   * @example "Maddie"
   */
  first_name?: string;
  /**
   * The last name of the contact.
   * @example "Brown"
   */
  last_name?: string;
  /**
   * The opt-out reason, if the contact entered a reason.
   * @example "The content is not what I expected"
   */
  opt_out_reason?: string;
  /**
   * The time that the contact chose to opt-out from receiving future email campaign activities.
   * @format date-time
   * @example "2019-04-25T11:08:00.000Z"
   */
  created_time: string;
  /**
   * If applicable, displays the date that the contact was deleted.
   * @format date
   * @example "2015-08-10"
   */
  deleted_at?: string;
}

export interface OptoutsTrackingActivitiesPage {
  /** The list of opt-out tracking activities */
  tracking_activities: OptoutsTrackingActivity[];
  /** HAL property that contains the next link, if applicable. */
  _links: ReportingLinks;
}

export interface BouncesTrackingActivity {
  /**
   * The ID that uniquely identifies a contact.
   * @format uuid
   * @example "a2fdc285-f4bc-408c-9e64-f3f89038ec82"
   */
  contact_id: string;
  /**
   * The ID that uniquely identifies the email campaign activity.
   * @format uuid
   * @example "98edac88-f4bc-408c-9e64-acd890384231"
   */
  campaign_activity_id: string;
  /**
   * The type of email tracking activity, <code>em_bounces</code>, that this report includes.
   * @example "em_bounces"
   */
  tracking_activity_type: string;
  /**
   * The contact's email address that was used when the email campaign activity bounced.
   * @example "maddieb@gmail.com"
   */
  email_address: string;
  /**
   * The first name of the contact.
   * @example "Maddie"
   */
  first_name?: string;
  /**
   * The last name of the contact.
   * @example "Brown"
   */
  last_name?: string;
  /**
   * The one-character string used to specify the reason for the email bounce. Valid codes include:
   *
   * <ul><li><code>B</code> - Non-existent address; the contact's Internet Service Provider (ISP) indicates that the email address doesn't exist.</li>
   *
   * <li><code>D</code> - Undeliverable; after repeated delivery attempts, no response was received from the contact's ISP.</li>
   *
   * <li><code>F</code> - Full; the contact's mailbox is full.</li>
   *
   * <li><code>S</code> - Suspended; the contact's address was reported as non-existent by the ISP and is suspended from delivery.</li>
   *
   * <li><code>V</code> - Vacation/autoreply; the contact set an autoreply, but the message was delivered.</li>
   *
   * <li><code>X</code> - Other; the contact's ISP specified another reason that the message cannot be delivered.</li>
   *
   * <li><code>Z</code> - Blocked; the recipient's ISP chose not to deliver the email. For example, the ISP may have flagged the email as spam.</li></ul>
   * @example "B"
   */
  bounce_code: string;
  /**
   * The contact's most current email address. If <code>email_address</code> was updated after the email bounce activity occurred, <code>current_ email_address</code> displays the updated address. If updates were not made to <code>email_address</code>, the <code>email_address</code> and <code>current_email_address</code> are the same.
   * @example "maddie_brown@yahoo.com"
   */
  current_email_address?: string;
  /**
   * The date and time that the email bounce tracking activity occurred.
   * @format date-time
   * @example "2019-04-25T11:08:00.000Z"
   */
  created_time: string;
  /**
   * If applicable, the date when the contact was deleted.
   * @format date
   * @example "2015-08-10"
   */
  deleted_at?: string;
}

export interface BouncesTrackingActivitiesPage {
  /** The list of email bounce tracking activities associated with a given `campaign_activity_id'. */
  tracking_activities: BouncesTrackingActivity[];
  /** HAL property that contains next link if applicable */
  _links: ReportingLinks;
}

export interface UniqueEmailCounts {
  /**
   * The total number of unique sends.
   * @format int32
   * @example 3129
   */
  sends: number;
  /**
   * The total number of unique opens.
   * @format int32
   * @example 1672
   */
  opens: number;
  /**
   * The total number of unique clicks.
   * @format int32
   * @example 256
   */
  clicks: number;
  /**
   * The total number of unique forwards.
   * @format int32
   * @example 21
   */
  forwards: number;
  /**
   * The total number of unique optouts (unsubscribes).
   * @format int32
   * @example 3
   */
  optouts: number;
  /**
   * The total number of unique abuse count (spam).
   * @format int32
   * @example 1
   */
  abuse: number;
  /**
   * The total number of unique bounce count.
   * @format int32
   * @example 210
   */
  bounces: number;
  /**
   * The total number of unique non-opens
   * @format int32
   * @example 1211
   */
  not_opened: number;
}

export interface BulkEmailCampaignSummary {
  /**
   * The ID that uniquely identifies an email campaign.
   * @example "82ee2c37-c8f8-4974-9560-ef93ad51d58z"
   */
  campaign_id: string;
  /**
   * Identifies the email campaign type.
   * @example "Newsletter"
   */
  campaign_type: string;
  /**
   * The date and time that the email campaign was last sent.
   * @format date-time
   * @example "2019-04-25T11:08:00.000Z"
   */
  last_sent_date: string;
  /** The total number of times each unique contact interacted with a tracked email campaign activity. */
  unique_counts: UniqueEmailCounts;
}

export interface BulkEmailCampaignSummariesPercents {
  /**
   * Aggregated click rate for campaigns on the current page.
   * @example 43
   */
  click?: number;
  /**
   * Aggregated open rate for campaigns on the current page.
   * @example 12
   */
  open?: number;
  /**
   * Aggregated did-not-open rate for campaigns on the current page.
   * @example 23
   */
  did_not_open?: number;
  /**
   * Aggregated bounce rate for campaigns on the current page.
   * @example 21
   */
  bounce?: number;
  /**
   * Aggregated unsubscribe (optout) rate for campaigns on the current page.
   * @example 2
   */
  unsubscribe?: number;
}

export interface BulkEmailCampaignSummariesPage {
  /** Lists and provides details about each bulk email campaign activity including total unique counts for tracked activities. */
  bulk_email_campaign_summaries: BulkEmailCampaignSummary[];
  /** Lists aggregate percents for  `click`, `open`, `did_not_open`, `bounce`, and  `unsubscribe` activities for all campaigns included on a page of results. */
  aggregate_percents?: BulkEmailCampaignSummariesPercents;
  /** HAL property that contains next link if applicable */
  _links: ReportingLinks;
}

export interface StatsError {
  /**
   * The unique error key.
   * @example "reportingsvc.not_found.invalid_path_param.campaign_ids."
   */
  error_key?: string;
  /**
   * A error description.
   * @example "Could not find any campaign stats for all requested campaigns."
   */
  error_message?: string;
}

export interface StatsEmail {
  /**
   * Number of unique email bounces.
   * @format int32
   * @example 10
   */
  em_bounces?: number;
  /**
   * Number of unique recipients who clicked any link in the email.
   * @format int32
   * @example 280
   */
  em_clicks?: number;
  /**
   * Total number of non-unique email clicks.
   * @format int32
   * @example 387
   */
  em_clicks_all?: number;
  /**
   * Number of non-unique email clicks on a standard desktop or laptop computer.
   * @format int32
   * @example 123
   */
  em_clicks_all_computer?: number;
  /**
   * Number of non-unique email clicks on a mobile phone or similar small mobile device (e.g. iPhone).
   * @format int32
   * @example 211
   */
  em_clicks_all_mobile?: number;
  /**
   * Number of non-unique email clicks on a small tablet type computer (e.g. iPad).
   * @format int32
   * @example 85
   */
  em_clicks_all_tablet?: number;
  /**
   * Number of non-unique email clicks on an unknown device (e.g. Game Console or Wearable).
   * @format int32
   * @example 4
   */
  em_clicks_all_other?: number;
  /**
   * Number of non-unique email clicks for which the device type was not captured. This will account for any clicks prior to when device type was collected and stored.
   * @format int32
   * @example 2
   */
  em_clicks_all_none?: number;
  /**
   * Number of unique recipients who forwarded the email using the forward to a friend feature (not available for all types of emails).
   * @format int32
   * @example 39
   */
  em_forwards?: number;
  /**
   * Number of unique recipients who did not open the email. This is calculated as follows: <code>em_not_opened</code> is equal to <code>em_sends - em_opens - em_bounces</code>. This value is reported as zero if the calculation results in a negative value.
   * @format int32
   * @example 25
   */
  em_not_opened?: number;
  /**
   * Number of unique recipients who opened the email.
   * @format int32
   * @example 220
   */
  em_opens?: number;
  /**
   * Total number of non-unique email opens.
   * @format int32
   * @example 399
   */
  em_opens_all?: number;
  /**
   * Number of non-unique email opens on a standard desktop or laptop computer.
   * @format int32
   * @example 65
   */
  em_opens_all_computer?: number;
  /**
   * Number of non-unique email opens on a mobile phone or similar small mobile device (e.g. iPhone).
   * @format int32
   * @example 270
   */
  em_opens_all_mobile?: number;
  /**
   * Number of non-unique email opens on a small tablet type computer (e.g. iPad).
   * @format int32
   * @example 199
   */
  em_opens_all_tablet?: number;
  /**
   * Number of non-unique email opens on an unknown device (e.g. Game Console or Wearable).
   * @format int32
   * @example 10
   */
  em_opens_all_other?: number;
  /**
   * Number of non-unique email opens for which the device type was not captured. This will account for any opens prior to when device type was collected and stored.
   * @format int32
   * @example 2
   */
  em_opens_all_none?: number;
  /**
   * Number of unique recipients who unsubscribed due to this email.
   * @format int32
   * @example 2
   */
  em_optouts?: number;
  /**
   * Number of unique email sends.
   * @format int32
   * @example 308
   */
  em_sends?: number;
}

export interface PercentsEmail {
  /**
   * Percentage of emails sent to unique recipients that bounced.
   * @example 0
   */
  bounce?: number;
  /**
   * Percentage of recipients who opened the email who also clicked one or more links in it.
   * @example 40
   */
  click?: number;
  /**
   * Percentage of clicks that came from a standard desktop or laptop computer.
   * @example 10
   */
  desktop_click?: number;
  /**
   * Percentage of opens that came from a standard desktop or laptop computer.
   * @example 20
   */
  desktop_open?: number;
  /**
   * Percentage of recipients that received the email (did not bounce) but did not open it.
   * @example 30
   */
  did_not_open?: number;
  /**
   * Percentage of clicks that came from a mobile phone, tablet computer, or similar small mobile device (e.g. iPhone or iPad).
   * @example 40
   */
  mobile_click?: number;
  /**
   * Percentage of opens that came from a mobile phone, tablet computer, or similar small mobile device (e.g. iPhone or iPad).
   * @example 10
   */
  mobile_open?: number;
  /**
   * Percentage of recipients that received the email (did not bounce) and opened it.
   * @example 70
   */
  open?: number;
  /**
   * Percentage of recipients that received the email (did not bounce) and chose to unsubscribe.
   * @example 0
   */
  unsubscribe?: number;
}

export interface CampaignStatsResultGenericStatsEmailPercentsEmail {
  /**
   * The ID that uniquely identifies the campaign (UUID).
   * @example "82ee2c37-c8f8-4974-9560-ef93ad51d58z"
   */
  campaign_id?: string;
  /** Key-value pairs of campaign related statistics. */
  stats?: StatsEmail;
  /** Key-value pairs of campaign related percentages. */
  percents?: PercentsEmail;
  /**
   * The date and time that the campaign stats were last refreshed.
   * @format date-time
   * @example "2015-08-25T22:00:09.908Z"
   */
  last_refresh_time?: string;
}

export interface CampaignStatsQueryResultEmail {
  /** An array of errors indicating any partial failures in the query. */
  errors?: StatsError[];
  /** An array of results listing statistics for each requested <code>campaign_id</code>. */
  results?: CampaignStatsResultGenericStatsEmailPercentsEmail[];
}

export interface StatsEmailActivity {
  /**
   * Number of unique email bounces.
   * @format int32
   * @example 10
   */
  em_bounces?: number;
  /**
   * Number of unique recipients who clicked any link in the email.
   * @format int32
   * @example 280
   */
  em_clicks?: number;
  /**
   * Total number of non-unique email clicks.
   * @format int32
   * @example 387
   */
  em_clicks_all?: number;
  /**
   * Number of non-unique email clicks on a standard desktop or laptop computer.
   * @format int32
   * @example 123
   */
  em_clicks_all_computer?: number;
  /**
   * Number of non-unique email clicks on a mobile phone or similar small mobile device (e.g. iPhone).
   * @format int32
   * @example 211
   */
  em_clicks_all_mobile?: number;
  /**
   * Number of non-unique email clicks on a small tablet type computer (e.g. iPad).
   * @format int32
   * @example 85
   */
  em_clicks_all_tablet?: number;
  /**
   * Number of non-unique email clicks on an unknown device (e.g. Game Console or Wearable).
   * @format int32
   * @example 4
   */
  em_clicks_all_other?: number;
  /**
   * Number of non-unique email clicks for which the device type was not captured. This will account for any clicks prior to when device type was collected and stored.
   * @format int32
   * @example 2
   */
  em_clicks_all_none?: number;
  /**
   * Number of unique recipients who forwarded the email using the forward to a friend feature (not available for all types of emails).
   * @format int32
   * @example 39
   */
  em_forwards?: number;
  /**
   * Number of unique recipients who did not open the email. This is calculated as follows: <code>em_not_opened</code> is equal to <code>em_sends - em_opens - em_bounces</code>. This value is reported as zero if the calculation results in a negative value.
   * @format int32
   * @example 25
   */
  em_not_opened?: number;
  /**
   * Number of unique recipients who opened the email.
   * @format int32
   * @example 220
   */
  em_opens?: number;
  /**
   * Total number of non-unique email opens.
   * @format int32
   * @example 399
   */
  em_opens_all?: number;
  /**
   * Number of non-unique email opens on a standard desktop or laptop computer.
   * @format int32
   * @example 65
   */
  em_opens_all_computer?: number;
  /**
   * Number of non-unique email opens on a mobile phone or similar small mobile device (e.g. iPhone).
   * @format int32
   * @example 270
   */
  em_opens_all_mobile?: number;
  /**
   * Number of non-unique email opens on a small tablet type computer (e.g. iPad).
   * @format int32
   * @example 199
   */
  em_opens_all_tablet?: number;
  /**
   * Number of non-unique email opens on an unknown device (e.g. Game Console or Wearable).
   * @format int32
   * @example 10
   */
  em_opens_all_other?: number;
  /**
   * Number of non-unique email opens for which the device type was not captured. This will account for any opens prior to when device type was collected and stored.
   * @format int32
   * @example 2
   */
  em_opens_all_none?: number;
  /**
   * Number of unique recipients who unsubscribed due to this email.
   * @format int32
   * @example 2
   */
  em_optouts?: number;
  /**
   * Number of unique email sends.
   * @format int32
   * @example 308
   */
  em_sends?: number;
  /**
   * Number of abuse (spam) complaints received.
   * @format int32
   * @example 1
   */
  em_abuse?: number;
  /**
   * Unique number bounced because as blocked by the receiving system.
   * @format int32
   * @example 1
   */
  em_bounces_blocked?: number;
  /**
   * Unique number that bounced back with a mailbox full message.
   * @format int32
   * @example 2
   */
  em_bounces_mailbox_full?: number;
  /**
   * Unique number that bounced as a non-existent address.
   * @format int32
   * @example 3
   */
  em_bounces_nonexistent_address?: number;
  /**
   * Unique number that bounced without an identifiable cause.
   * @format int32
   * @example 2
   */
  em_bounces_other?: number;
  /**
   * Unique number that bounced as suspended. Email address bounces as suspended when multiple non-existent bounces have been received for the same address.
   * @format int32
   * @example 1
   */
  em_bounces_suspended?: number;
  /**
   * Unique number that bounced as undeliverable.
   * @format int32
   * @example 19
   */
  em_bounces_undeliverable?: number;
  /**
   * Unique number that bounced back with a vacation or out of office autoreply.
   * @format int32
   * @example 2
   */
  em_bounces_vacation?: number;
}

export interface CampaignActivityStatsResultGenericStatsEmailActivity {
  /** The unique ID used to identify the campaign (UUID). */
  campaign_id?: string;
  /** The unique ID used to identify the campaign activity (UUID). */
  campaign_activity_id?: string;
  /** Key-value pairs of campaign activity statistics. */
  stats?: StatsEmailActivity;
  /** The time at which the campaign activity stats were last refreshed in ISO 8601 format (e.g. '2015-08-25T22:00:09.908Z'). */
  last_refresh_time?: string;
}

export interface CampaignActivityStatsQueryResultEmail {
  /** Array of errors indicating any partial failures in the query */
  errors?: StatsError[];
  /** An array of results containing statistics for each requested campaign activity */
  results?: CampaignActivityStatsResultGenericStatsEmailActivity[];
}

export interface TrackingActivitySmsChannelDTO {
  /**
   * The ISO country code that is associated with SMS address.
   * @example "US"
   */
  country_code?: string;
  /**
   * The SMS channel status:
   *   <ul><li><code>N</code>: not_set<li>
   *      <li><code>T</code>: temp_hold<li>
   *      <li><code>P</code>: pending_confirmation<li>
   *      <li><code>I</code>: implicit<li>
   *      <li><code>E</code>: explicit<li>
   *      <li><code>O</code>: unsubscribed<li>
   *      <li><code>D</code>:deprecated<li></ul>
   */
  state?: string;
  /**
   * The formatted SMS number returned if the SMS <code>country_code</code> does not match the contacts <code>country_code</code>.
   * @example "+1 234-555-6789"
   */
  formatted_international?: string;
  /**
   * The formatted SMS number returned if the SMS <code>country_code</code> matches the contacts <code>country_code</code>.
   * @example "(234) 555-6789"
   */
  formatted_national?: string;
}

export interface PContactClickTrackingActivity {
  /**
   * The unique ID that identifies the contact.
   * @format uuid
   * @example "a2fdc285-f4bc-408c-9e64-f3f89038ec82"
   */
  contact_id: string;
  /**
   * The unique ID that identifies of the campaign activity to use.
   * @format uuid
   * @example "98edac88-f4bc-408c-9e64-acd890384231"
   */
  campaign_activity_id: string;
  /**
   * The tracked activity event type.
   * @example "p_contact_click"
   */
  tracking_activity_type: string;
  /**
   * The email address for the contact and tracking activity.
   * @example "maddieb@gmail.com"
   */
  email_address: string;
  /**
   * The first name of the contact.
   * @example "Maddie"
   */
  first_name?: string;
  /**
   * The last name of the contact.
   * @example "Brown"
   */
  last_name?: string;
  /**
   * The type of device that was used to click the link.
   * @example "tablet"
   */
  device_type?: string;
  /**
   * The ID used to uniquely identify the link.
   * @example "1100407204171"
   */
  url_id?: string;
  /**
   * The URL link text.
   * @example "http://www.amazon.com"
   */
  link_url: string;
  /**
   * The time the tracking activity occurred.
   * @format date-time
   * @example "2019-04-25T11:08:00.000Z"
   */
  created_time: string;
  /**
   * The time the Contact was deleted
   * @format date
   * @example "2015-08-10"
   */
  deleted_at?: string;
  /** Sms channel info for this contact */
  sms_channel?: TrackingActivitySmsChannelDTO;
}

export interface PContactClickTrackingActivitiesPage {
  /** The list of landing page contact click tracking activities. */
  tracking_activities: PContactClickTrackingActivity[];
  /** HAL property that contains next link if applicable */
  _links: LpreportingLinks;
}

export interface PContactOpenTrackingActivity {
  /**
   * The unique ID that identifies the contact.
   * @format uuid
   * @example "a2fdc285-f4bc-408c-9e64-f3f89038ec82"
   */
  contact_id: string;
  /**
   * The unique ID that identifies of the campaign activity to use.
   * @format uuid
   * @example "98edac88-f4bc-408c-9e64-acd890384231"
   */
  campaign_activity_id: string;
  /**
   * The tracked activity event type.
   * @example "p_contact_opens"
   */
  tracking_activity_type: string;
  /**
   * The email address for the contact and tracking activity.
   * @example "maddieb@gmail.com"
   */
  email_address: string;
  /**
   * The first name of the contact.
   * @example "Maddie"
   */
  first_name?: string;
  /**
   * The last name of the contact.
   * @example "Brown"
   */
  last_name?: string;
  /**
   * The type of device that was used to open the link.
   * @example "tablet"
   */
  device_type?: string;
  /**
   * The time the tracking activity occurred.
   * @format date-time
   * @example "2019-04-25T11:08:00.000Z"
   */
  created_time: string;
  /**
   * The time the Contact was deleted
   * @format date
   * @example "2015-08-10"
   */
  deleted_at?: string;
  /** Sms channel info for this contact */
  sms_channel?: TrackingActivitySmsChannelDTO;
}

export interface PContactOpensTrackingActivitiesPage {
  /** The list of landing page contact opens tracking activities. */
  tracking_activities: PContactOpenTrackingActivity[];
  /** HAL property that contains next link if applicable */
  _links: LpreportingLinks;
}

export interface PContactUpdateTrackingActivity {
  /**
   * The unique ID that identifies the contact.
   * @format uuid
   * @example "a2fdc285-f4bc-408c-9e64-f3f89038ec82"
   */
  contact_id: string;
  /**
   * The unique ID that identifies of the campaign activity to use.
   * @format uuid
   * @example "98edac88-f4bc-408c-9e64-acd890384231"
   */
  campaign_activity_id: string;
  /**
   * The tracked activity event type.
   * @example "p_contact_updates"
   */
  tracking_activity_type: string;
  /**
   * The email address for the contact and tracking activity.
   * @example "maddieb@gmail.com"
   */
  email_address: string;
  /**
   * The first name of the contact.
   * @example "Maddie"
   */
  first_name?: string;
  /**
   * The last name of the contact.
   * @example "Brown"
   */
  last_name?: string;
  /**
   * The time the tracking activity occurred.
   * @format date-time
   * @example "2019-04-25T11:08:00.000Z"
   */
  created_time: string;
  /**
   * The time the Contact was deleted
   * @format date
   * @example "2015-08-10"
   */
  deleted_at?: string;
  /** Sms channel info for this contact */
  sms_channel?: TrackingActivitySmsChannelDTO;
}

export interface PContactUpdateTrackingActivitiesPage {
  /** The list of landing page contact update tracking activities. */
  tracking_activities: PContactUpdateTrackingActivity[];
  /** HAL property that contains next link if applicable */
  _links: LpreportingLinks;
}

export interface PContactAddTrackingActivity {
  /**
   * The unique ID that identifies the contact.
   * @format uuid
   * @example "a2fdc285-f4bc-408c-9e64-f3f89038ec82"
   */
  contact_id: string;
  /**
   * The unique ID that identifies of the campaign activity to use.
   * @format uuid
   * @example "98edac88-f4bc-408c-9e64-acd890384231"
   */
  campaign_activity_id: string;
  /**
   * The tracked activity event type.
   * @example "p_contact_adds"
   */
  tracking_activity_type: string;
  /**
   * The email address for the contact and tracking activity.
   * @example "maddieb@gmail.com"
   */
  email_address: string;
  /**
   * The first name of the contact.
   * @example "Maddie"
   */
  first_name?: string;
  /**
   * The last name of the contact.
   * @example "Brown"
   */
  last_name?: string;
  /**
   * The time the tracking activity occurred.
   * @format date-time
   * @example "2019-04-25T11:08:00.000Z"
   */
  created_time: string;
  /**
   * The time the Contact was deleted
   * @format date
   * @example "2015-08-10"
   */
  deleted_at?: string;
  /** Sms channel info for this contact */
  sms_channel?: TrackingActivitySmsChannelDTO;
}

export interface PContactAddTrackingActivitiesPage {
  /** The list of landing page contact adds tracking activities. */
  tracking_activities: PContactAddTrackingActivity[];
  /** HAL property that contains next link if applicable */
  _links: LpreportingLinks;
}

export interface PContactSMSOptInTrackingActivity {
  /**
   * The unique ID that identifies the contact.
   * @format uuid
   * @example "a2fdc285-f4bc-408c-9e64-f3f89038ec82"
   */
  contact_id: string;
  /**
   * The unique ID that identifies of the campaign activity to use.
   * @format uuid
   * @example "98edac88-f4bc-408c-9e64-acd890384231"
   */
  campaign_activity_id: string;
  /**
   * The tracked activity event type.
   * @example "p_contact_sms_optins"
   */
  tracking_activity_type: string;
  /**
   * The email address for the contact and tracking activity.
   * @example "maddieb@gmail.com"
   */
  email_address: string;
  /**
   * The first name of the contact.
   * @example "Maddie"
   */
  first_name?: string;
  /**
   * The last name of the contact.
   * @example "Brown"
   */
  last_name?: string;
  /**
   * The time the tracking activity occurred.
   * @format date-time
   * @example "2019-04-25T11:08:00.000Z"
   */
  created_time: string;
  /**
   * The time the Contact was deleted
   * @format date
   * @example "2015-08-10"
   */
  deleted_at?: string;
  /** Sms channel info for this contact */
  sms_channel?: TrackingActivitySmsChannelDTO;
}

export interface PContactSMSOptInTrackingActivitiesPage {
  /** The list of landing page contact opt in tracking activities. */
  tracking_activities: PContactSMSOptInTrackingActivity[];
  /** HAL property that contains next link if applicable */
  _links: LpreportingLinks;
}

export interface PaginationLinks {
  /** Contains the next page link, if applicable. */
  next?: PartnersLink;
}

export interface PartnerAccount {
  /** Lists all Constant Contact client accounts that are managed under a partner account. */
  site_owner_list: {
    /**
     * The obfuscated ID used to uniquely identify a client account.
     * @example "a08e1izvh8t9"
     */
    encoded_account_id?: string;
    /**
     * The total number of subscriber contacts that are associated with a client account.
     * @format int64
     * @example 65
     */
    subscriber_count?: number;
    /**
     * The name of the organization associated with this client account.
     * @example "Zenomatic"
     */
    organization_name?: string;
    /**
     * The user name that identifies a client account.
     * @example "Zen1016153"
     */
    site_owner_name?: string;
    /**
     * The client's account billing status. When you first create a client account the `billing status` defaults to `Trial`. Billing status values include: <ul>
     *   <li><code>Trial</code> - A non-paying trial client account (default value).</li>
     *   <li><code>Open</code> - An active and paying client account.</li>
     *   <li><code>Canceled</code> - A canceled client account.</li>
     *   <li><code>Trial End</code> - The trial period has ended for this client account.</li>
     * </ul>
     * @example "Open"
     */
    billing_status?: string;
    /**
     * The system generated date and time (ISO-8601) showing when the client last logged into their Constant Contact account. If a client has not logged into their account, the value is `null`. This property does not display in the results.
     * @format date-time
     * @example "2019-04-25T11:08:00.000Z"
     */
    last_login_date?: string;
  }[];
  /** HAL property that contains the next link, if applicable. */
  _links?: PaginationLinks;
}

export interface Provision {
  /**
   * A valid email address to associate with the client account.
   * @maxLength 80
   * @example "clients_email@gmail.com"
   */
  contact_email: string;
  /**
   * The contact phone number to associate with the client account.
   * @minLength 5
   * @maxLength 25
   * @example "588-768-6868"
   */
  contact_phone?: string;
  /**
   * The two-letter country code (ISO 3166-1 code) that specifies the country in which the client resides.
   * @minLength 2
   * @maxLength 3
   * @example "US"
   */
  country_code: string;
  /**
   * The name of organization that identifies the client account.
   * @minLength 1
   * @maxLength 50
   * @example "Hanks Fresh Fruit Delivery"
   */
  organization_name?: string;
  /**
   * The organization phone number. To set the organization phone number using the user interface, select <b>My Settings</b> and in the <b>Organization Information</b> section, select <b>Edit Organization Information</b>.
   * @minLength 5
   * @maxLength 25
   * @example "401-244-1000"
   */
  organization_phone?: string;
  /**
   * The two-letter state code that represents the US state (<code>country_code</code> is <code>US</code> ) or Canadian province (<code>country_code</code> is <code>CA</code>) where the client's organization is physically located. Leave the <code>state_code</code> blank for non-US states and Canadian provinces.
   * @example "MA"
   */
  state_code: string;
  /**
   * The offical time zone to use to represent the physical location associated with the client account.
   * @example "US/Eastern"
   */
  time_zone_id?: string;
  /**
   * The client's website URL. Specifying the website URL eliminates the need for clients to provide that information. Requires a valid URL starting with http:// or https://.
   * @example "http://your.company.website"
   */
  website?: string;
  /**
   * A unique login name to associate with the client account. The name must only contain alphanumeric characters and '-', '_', '@','.','+'.
   * @minLength 6
   * @maxLength 50
   * @example "hank_smith"
   */
  login_name: string;
  /**
   * Required if not using Single Sign On (SSO) or external authenticator. The password to associate with the client account. Passwords must be a minimum of six characters in length and have no spaces. The password is not returned in the response payload for security reasons. If using SSO authentication, use <code>external_provider</code> and <code>external_id</code> instead of <code>password</code>.
   * @minLength 6
   * @maxLength 80
   * @example "123456789"
   */
  password?: string;
  /**
   * The client account owner's first name.
   * @minLength 2
   * @maxLength 80
   * @example "Hank"
   */
  first_name?: string;
  /**
   * The client account owner's last name.
   * @minLength 2
   * @maxLength 80
   * @example "Smith"
   */
  last_name?: string;
  /**
   * The unique client account identifier that partners define and use for billing and reporting purposes.
   * @maxLength 80
   * @example "partner1234"
   */
  partner_account_id?: string;
  /**
   * The currency to use when billing the client account. Valid values are: <code>en_US</code> (default, US Dollars) or <code>en_GB</code> (British Pounds).
   * @example "en_US."
   */
  billing_locale?: string;
  /**
   * By default, if the client account is setup as a managed account <code>managed_site_owner</code> is automatically set to <code>true</code> and attempting to override the setting with <code>false</code> is ignored. This helps to avoid getting an account into an unknown state.
   * @example true
   */
  managed_site_owner?: boolean;
  /**
   * If a partner account is setup to allow for single billing and the <code>managed_site_owner</code> property is set to <code>true</code>, use this property to enable the single billing feature for the client account. See your account manager for more information.
   * @example true
   */
  enable_single_billing?: boolean;
  /**
   * When creating accounts for users who have opted-out of any marketing communications, set  the <code> gdpr_opt_out</code>  to <code>true</code>  so that Constant Contact does not send any marketing communications to the account.
   * @example true
   */
  gdpr_opt_out?: boolean;
  /**
   * The ID used to uniquely identify the client account for the external authenticator. Do not use the <code>password</code> property when using an external authenticator.
   * @maxLength 255
   * @example "123456789123456789"
   */
  external_id?: string;
  /**
   * The name of the provider who externally authenticates this customer. For example, PayPal or Yahoo. Do not use the <code>password</code> property when using an external authenticator.
   * @maxLength 80
   * @example "Yahoo"
   */
  external_provider?: string;
}

export interface ProvisionResponse {
  /**
   * The system generated ID used to uniquely identify a client account.
   * @example "a08e1izzh8t9"
   */
  encoded_account_id?: string;
  /**
   * The system generated ID used to uniquely identify the provisioning of a client account.
   * @example "x9xx2ede-5a58-4e23-8168-25930c5x7bxb"
   */
  provision_uuid?: string;
}

/** The usage tier that is associated with a client's Constant Contact account and is used to calculate the monthly billing price. */
export interface TierObject {
  /**
   * Identifies the tier usage type that is associated with the billing plan.
   * @default "CONTACTS"
   * @example "CONTACTS"
   */
  usage_type?: string;
  /**
   * The number of active contacts (default) used within the current tier.
   * @format float
   * @example 10
   */
  current_usage?: number;
  /**
   * The billing tier level that is associated with a client account. By default, the system determines the tier level to use based on the number of active contacts currently in the client account at the time of billing. Billing tiers may differ. The following shows an example billing tier: <ul>
   *   <li>level <code>1</code> = 0 - 500 contacts</li>
   *   <li>level <code>2</code> = 501 - 1000 contacts</li>
   *   <li>level <code>3</code> = 1001 - ...</li>
   * </ul>
   * @format int32
   * @example 1
   */
  tier?: number;
  /**
   * The minimum number of active contacts for the tier level.
   * @format float
   * @example 0
   */
  tier_min?: number;
  /**
   * The maximum number of active contacts for the tier level.
   * @format float
   * @example 500
   */
  tier_max?: number;
  /**
   * The billing price set for the tier used to bill the client account each month.
   * @format float
   * @example 20
   */
  price?: number;
  /**
   * The currency (ISO currency code) used to price the tier for a client account.
   * @example "USD"
   */
  currency_code?: string;
}

/** Specifies client billing plan details including the type of plan, the plan tiers used, the current billing status, and the day of the month that the client is billed. When a client account is first provisioned, the `plan_type` defaults to a `Trial` account. After you change an account `billing_status` from `Trial` to any other `billing_status`, you cannot change it back to a `Trial` account. */
export interface PlanTiersObject {
  /**
   * The billing plan that is associated with a client's Constant Contact account. The billing plan determines which Constant Contact product features that the client account can access. If you are not on the latest billing plan, contact the Constant Contact Partner Team. However, older billing plans and <code>plan_type</code> enum values will continue to be supported. <ul>
   *   <li><code>TRIAL</code>: Provides limited product features for a non-billed account and the account has an expiration date.</li>
   *   <li><code>BRONZE</code>: Billable plan that provides basic email and marketing tools.</li>
   *   <li><code>SILVER</code>: Billable plan that provides all features available in the <code>BRONZE</code> plan, and adds some additional email campaign to features, such as contact segmentation and social media ads integration.</li>
   *   <li><code>GOLD</code>: Billable plan that provides all available product features.</li>
   * </ul>
   * @example "GOLD"
   */
  plan_type?: string;
  /** Lists the billing plan tiers that are currently associated with a client account. */
  current_tiers?: TierObject[];
  /**
   * The client's account billing status. When you first create a client account the <code>billing_status</code> defaults to <code>Trial</code>. Billing status values include:
   *   <ul>
   *     <li><code>Trial</code> - A non-paying trial client account (default value).</li>
   *     <li><code>Open</code> - An active and paying client account.</li>
   *     <li><code>Canceled</code> - A canceled client account.</li>
   *     <li><code>Trial End</code> - The trial period has ended for this client account.</li>
   *   </ul>
   * @example "Open"
   */
  billing_status?: string;
  /**
   * This property is required when an account is not set up to use single billing. For trial accounts, the value is initially set to <code>null</code>. The value can only be changed when changing the <code>plan_type</code> from a trial account to a different type of plan, otherwise the value you enter is ignored. You can choose to enter a specific day of month or except the default value, which is the day that the <code>plan_type</code> value changes from a trial account plan to a different plan. Valid <code>billing_day_of_month</code> values include <code>1</code> through and including <code>31</code>.
   * @format int32
   * @example 15
   */
  billing_day_of_month?: number;
}

/** Specifies the type of billing plan (`plan_type`) and the billing date (`billing_day_of_month`) used for a client account. */
export interface PlanInfo {
  /**
   * The type of billing plan (<code>plan_type</code>) to associate with a client's Constant Contact account. The type of billing plan determines which Constant Contact product features that the client account can access. The billing plan type that you enter must already exist in your plan group or a 400 error message is returned. After changing the <code>plan_type</code> from <code>TRIAL</code> to any other billing plan type, you cannot change it back to <code>TRIAL</code>.
   *   <ul>
   *     <li><code>TRIAL</code>: A non-billable account with an expiration date that allows clients to try Constant Contact product features.</li>
   *      <li><code>GOLD</code>: A billable client account plan.</li>
   *      <li><code>SILVER</code>: A billable client account plan.</li>
   *      <li><code>BRONZE</code>: A billable client account plan.</li>
   *   </ul>
   * @example "GOLD"
   */
  plan_type?: string;
  /**
   * This property is required if a client account is not set up to use single billing. You can choose to enter a specific day of the month or accept the default value, which is the day on which the <code>plan_type</code> value changes from a <code>TRIAL</code> plan to a different <code>plan_type</code>. For trial accounts, the value defaults to null. You can only change the <code>billing_day_of_month</code> when changing the <code>plan_type</code> value from <code>TRIAL</code> to a different <code>plan_type</code>, otherwise the value you enter is ignored.
   * @format int32
   * @example 15
   */
  billing_day_of_month?: number;
}

/** Specifies the date and time a client requests to cancel their Constant Contact account and changes the account `billing_status` to `Canceled`. By default, this is the current date and time in ISO format. In the request body, you can optionally specify a future cancellation date (in ISO format) and a reason (`reason_code`) that the client wants to cancel their account. */
export interface AccountCancellation {
  /**
   * Specifies the reason that the client is canceling their Constant Contact account as follows:
   *   <ul>
   *     <li><code>1</code>  Cost Too High</li>
   *     <li><code>2</code>  Using A Competitive Service</li>
   *     <li><code>3</code>  Not Doing Email Marketing</li>
   *     <li><code>11</code> Something Missing Or Not Working </li>
   *     <li><code>12</code> Doing It In-House</li>
   *     <li><code>14</code> Poor Results</li>
   *     <li><code>21</code> Too Difficult To Use</li>
   *     <li><code>27</code> Canceled Online by Customer</li>
   *     <li><code>30</code> Dissatisfied With Billing Policies</li>
   *   </ul>
   * @format int32
   * @example 1
   */
  reason_id?: number;
  /**
   * The client account cancellation date and time in ISO-8601 format.
   * @format date-time
   * @example "2020-02-06T22:09:15.000Z"
   */
  effective_date?: string;
}

export interface QueryParamObject {
  /**
   * The name of the query parameter.
   * @example "include"
   */
  query_param_key?: string;
  /**
   * The value of the query parameter.
   * @example "list_memberships"
   */
  query_param_value?: string;
}

export interface PathParamObject {
  /**
   * The name of the path parameter.
   * @example "contact_id"
   */
  path_param_key?: string;
  /**
   * The value of the path parameter.
   * @example "04fe9a-a579-43c5-bb1a-58ed29bf0a6a"
   */
  path_param_value?: string;
}

export interface HeadersObject {
  /**
   * The name of the header.
   * @example "Accept"
   */
  header_key?: string;
  /**
   * The value of the header.
   * @example "application/json"
   */
  header_value?: string;
}

/** JSON object that contains the fields Constant Contact uses to construct the HTTP request you are sending on behalf of a managed account. */
export interface PartnerAccountOperationsRequest {
  /**
   * The API method path for the request you are sending on behalf of a managed child account. This value should be a V3 API URL without the https://api.cc.email/v3 base url and with any path parameter names included. For example: <code>/emails/activities/{campaign_activity_id}</code>.
   * @example "/contacts/{contact_id}"
   */
  account_operation_url: string;
  /**
   * The http method for the request you are sending on behalf of a managed child account.
   * @example "GET"
   */
  account_operation_method: string;
  /**
   * The request payload for the request you are sending on behalf of a managed child account. If you provide a JSON payload using this parameter, make sure that the JSON is string escaped.
   * @example ""
   */
  account_operation_payload?: string;
  /** An array containing the query parameters for the request you are sending on behalf of a managed child account. */
  account_operation_query_parameters?: QueryParamObject[];
  /** An array containing the path parameters for the request you are sending on behalf of a managed child account. */
  account_operation_path_parameters?: PathParamObject[];
  /** An array containing the headers for the request you are sending on behalf of a managed child account. */
  account_operation_headers?: HeadersObject[];
}

/** Specify client account user's details. All fields are required. */
export interface SSOUser {
  /**
   * The client account user's first name.
   * @maxLength 80
   * @example "Josie"
   */
  first_name: string;
  /**
   * The client account user's last name.
   * @maxLength 80
   * @example "Lang"
   */
  last_name: string;
  /**
   * The role (<code>account_manager</code> or <code>campaign_creator</code>) to assign the client account user.
   * @example "campaign_creator"
   */
  role_name: string;
  /**
   * The unique email address to associate with the new client account user.
   * @maxLength 80
   * @example "josie.lang@gmail.com"
   */
  contact_email: string;
  /**
   * The login name to associate with the new client account user.
   * @maxLength 50
   * @example "josie.lang"
   */
  login_name: string;
  /**
   * The unique ID used to identify the client account user to the external authenticator.
   * @maxLength 255
   * @example "23378234122161121"
   */
  external_id: string;
  /**
   * The unique name used to identify the external provider used to authenticate the client account user. For a list of external providers, contact the Constant Contact Partner Team.
   * @maxLength 80
   * @example "Yahoo"
   */
  external_provider: string;
}

export interface AccountSuspension {
  /** Suspended plan group id. */
  suspend_plan_id: number;
  /** The suspended plan group id. */
  suspend_plan_group_id: number;
  /**
   * The date when the customer will start being suspended. If omitted defaults to the current date and time and suspends the account at the next billing cycle.
   * @format date-time
   */
  suspend_date?: string;
  /** The reason the customer is suspended. */
  suspend_reason_id?: number;
  /** The subreason why the customer is suspended. */
  suspend_subreason_id?: number;
  /** Comment field for user suspension. */
  suspend_comment?: string;
  /**
   * Estimated date when the customer will be reactivated.
   * @format date-time
   */
  suspend_estimated_reactivation_date?: string;
}

/** An array of webhook subscriptions. */
export type WebhooksSubscriptionCollection = {
  /**
   * Identifies the topic using an integer to indicate the type of topic.
   * @example 2
   */
  topic_id?: number;
  /**
   * Your webhook callback URI. Constant Contact automatically sends POST requests to this URI to notify you about the topic.
   * @example "https://www.examplename.com/webhooks/billingTier"
   */
  hook_uri?: string;
  /**
   * The name of the topic.
   * @example "Billing Tier Downgrade"
   */
  topic_name?: string;
  /**
   * A description of what the topic is and when Constant Contact notifies you concerning it.
   * @example "Executes when an account's billing tier is downgraded."
   */
  topic_description?: string;
}[];

export interface WebhooksSubscriptionResponse {
  /**
   * Identifies the topic using an integer to indicate the type of topic.
   * @example 2
   */
  topic_id?: number;
  /**
   * Your webhook callback URI. Constant Contact automatically sends POST requests to this URI to notify you about the topic.
   * @example "https://www.examplename.com/webhooks/billingTier"
   */
  hook_uri?: string;
  /**
   * The name of the topic.
   * @example "Billing Tier Downgrade"
   */
  topic_name?: string;
  /**
   * A description of what the topic is and when Constant Contact notifies you concerning it.
   * @example "Executes when an account's billing tier is downgraded."
   */
  topic_description?: string;
}

export interface WebhooksSubscriptionBody {
  /**
   * The callback URI you would like to use to receive webhook notifications. Constant Contact will automatically send POST notifications about your chosen topic to this URI.
   * @example "https://www.examplename.com/webhooks/billingTier"
   */
  hook_uri?: string;
}

export interface WebhooksSubscriptionPutResp {
  /**
   * Identifies the topic using an integer to indicate the type of topic.
   * @example 1
   */
  topic_id?: number;
  /**
   * Your webhook callback URI. Constant Contact automatically sends POST requests to this URI to notify you about the topic.
   * @example "https://www.examplename.com/webhooks/billingTier"
   */
  hook_uri?: string;
}

export interface WebhooksTestSend {
  /**
   * Identifies the topic using an integer to indicate the type of topic.
   * @example 2
   */
  topic_id?: number;
  /**
   * The webhook callback URI. Constant Contact automatically sends POST requests to this URI to notify you about the topic.
   * @example "https://www.examplename.com/webhooks/billingTier"
   */
  hook_uri?: string;
  /**
   * The name of the topic.
   * @example "Billing Tier Downgrade"
   */
  topic_name?: string;
  /**
   * A description of what the topic is and when Constant Contact notifies you concerning it. When you use the test send API method, Constant Contact will immediately send a test event to you.
   * @example "Executes when an account's billing tier is downgraded."
   */
  topic_description?: string;
}

export type MyLibraryFileCollection = {
  /** Identifies the MyLibrary file. */
  id?: number;
  /** The file name. */
  name?: string;
  /** The image height. */
  height?: number;
  /** The image width. */
  width?: number;
  /** The image size. */
  size?: number;
  /** The image URL. */
  url?: string;
  /** The image description. */
  description?: string;
  /** The image folder */
  folder?: string;
  /** The application that uploaded this image. */
  source?: string;
  /** The image format. */
  type?: string;
  /** The image status. */
  status?: string;
  thumbnail?: {
    /**
     * Thumbnail width.
     * @format int32
     */
    width?: number;
    /**
     * Thumbnail height.
     * @format int32
     */
    height?: number;
    /** Thumbnail url. */
    url?: string;
  };
  /** Boolean indicating if this file is an image. */
  image?: boolean;
  /**
   * Identifies a folder in MyLibrary.
   * @format int32
   */
  folder_id?: number;
  /** The external url for the file. */
  external_url?: string;
  /** Identifies the time a user last modified the file. */
  modified_date?: string;
  /** Identifies the time a user originally added the file to MyLibrary. */
  added_date?: string;
  /** External identifier for the file. */
  external_file_id?: string;
}[];

export interface FileObject {
  /** Identifies the MyLibrary file. */
  id?: number;
  /** The file name. */
  name?: string;
  /** The image height. */
  height?: number;
  /** The image width. */
  width?: number;
  /** The image size. */
  size?: number;
  /** The image URL. */
  url?: string;
  /** The image description. */
  description?: string;
  /** The image folder */
  folder?: string;
  /** The application that uploaded this image. */
  source?: string;
  /** The image format. */
  type?: string;
  /** THe image status. */
  status?: string;
  thumbnail?: {
    /**
     * Thumbnail width.
     * @format int32
     */
    width?: number;
    /**
     * Thumbnail height.
     * @format int32
     */
    height?: number;
    /** Thumbnail url. */
    url?: string;
  };
  /** Boolean indicating if this file is an image. */
  image?: boolean;
  /**
   * Identifies a folder in MyLibrary.
   * @format int32
   */
  folder_id?: number;
  /** The external url for the file. */
  external_url?: string;
  /** Identifies the time a user last modified the file. */
  modified_date?: string;
  /** Identifies the time a user originally added the file to MyLibrary. */
  added_date?: string;
  /** External identifier for the file. */
  external_file_id?: string;
}

export type FileStatusArray = {
  /** The upload status. */
  status?: string;
  /** File description. */
  description?: string;
  /** Identifies the file in MyLibrary. */
  file_id?: number;
}[];

export interface EmailsLink {
  href?: string;
}

export interface ReportingLinks {
  /** Contains the next page link if it is available. */
  next: ReportingNext;
}

export interface TagsActivityLinks {
  /** The link returned in the response that you use to retrieve the status for the specified activity. */
  self?: {
    /** @example "/v3/activities/04fe9a97-a579-43c5-bb1a-58ed29bf0a6a" */
    href?: string;
  };
}

export interface TagsLinks {
  href?: string;
  /** Contains the next page link, if applicable. */
  next?: ReportingNext;
}

export interface EmailsPagingLinks {
  next?: EmailsLink;
}

export interface LpreportingNext {
  /** The next link in the page or null if there are no additional pages */
  href: string;
}

export interface ReportingNext {
  /** The next link in the page or null if there are no additional pages. */
  href: string;
}

export interface PartnersLink {
  href?: string;
}

export interface LpreportingLinks {
  /** Contains the next link if it is available. */
  next: LpreportingNext;
}

export interface TagsPagingLinks {
  /** The link to the next page of results. */
  next?: TagsLinks;
}

export type GetUserPrivilegesData = UserPrivilegesResource;

export interface GetAccountByIdParams {
  /**
   * Use the `extra_fields` query parameter to include the `physical_address` and/or `company_logo` details in the response body. Use a comma separated list to include both (physical_address, company logo).
   * @format csv
   * @example "company_logo"
   */
  extra_fields?: string;
}

export type GetAccountByIdData = Customer;

export type PutCustomerByIdData = CustomerPut;

export type GetPhysicalAddressData = AccountPhysicalAddress;

export type PutPhysicalAddressData = AccountPhysicalAddress;

export interface RetrieveEmailAddressesParams {
  /** Use the `confirm_status` query parameter to search for account emails using the email status. Possible values are `CONFIRMED` or `UNCONFIRMED`. You can also abbreviate the values of this query parameter and use `C` or `U`. */
  confirm_status?: 'CONFIRMED' | 'C' | 'UNCONFIRMED' | 'U';
  /** Use the `role_code` query parameter to search for account emails that have a specific role. Each each email address in an account can have multiple roles or no role. Possible values are `CONTACT`, `BILLING`, `REPLY_TO`, `JOURNALING`, or `OTHER`. You can also abbreviate the value of this query parameter and use `C`,`B`,`R`,`J`, or `O`. */
  role_code?: 'CONTACT' | 'C' | 'BILLING' | 'B' | 'JOURNALING' | 'J' | 'REPLY_TO' | 'R' | 'OTHER' | 'O';
  /** Use the `email_address` query parameter to search for a specific account email address. */
  email_address?: string;
}

export type RetrieveEmailAddressesData = AccountEmails;

export type AddAccountEmailAddressData = AccountEmailCreateResponse;

export interface GetActivityStatusCollectionParams {
  /**
   * Specifies the number of results displayed per page of output, from 1 - 500, default = 50.
   * @min 1
   * @max 500
   * @default 50
   * @example 25
   */
  limit?: number;
  /**
   * Use this parameter to filter the response to include only activities in one of the following states: cancelled, completed, failed, processing, or timed_out.
   * @example "processing"
   */
  state?: 'processing' | 'completed' | 'cancelled' | 'failed' | 'timed_out';
}

export type GetActivityStatusCollectionData = Activities;

export type GetActivityData = Activity;

export type PostContactsExportData = ActivityExportStatus;

export type GetContactsExportData = ActivityGetExport;

export type PostContactDeleteData = ActivityDeleteStatus;

export interface ContactsCsvImportPayload {
  /**
   * The CSV file you are importing. The column headings that you can use in the file are: `first_name`, `last_name`, `email`, `phone`, `job_title`, `anniversary`, `birthday_day`, `birthday_month`, `company_name`, `street`, `street2`, `city`, `state`, `zip`, and `country`. The only required column heading is `email`.
   *
   * You can also use custom fields as column headings. Enter the custom field name prefixed with `cf:` as the column heading. For example, use `cf:first_name` as the header name if you have a custom field named "first_name". The custom field must already exist in the Constant Contact account you are using. Depending on the custom field data type, you can enter dates or strings as the value of the custom field. Each contact can contain up to 25 different custom fields.
   * @format binary
   * @example "new_contacts_import.csv"
   */
  file: File;
  /**
   * Specify which contact lists you are adding all imported contacts to as an array of up to 50 contact `list_id` values.
   * @maxItems 50
   * @example "8c077f20-1586-11e4-bcb3-00163e56be7c"
   */
  list_ids: string[];
}

export type ContactsCsvImportData = ActivityImport;

export type BulkImportContactsJsonData = ActivityImport;

export type PostListRemoveContactData = ActivityListsMembership;

export type PostListAddContactData = ActivityListsMembership;

export type PostListDeleteData = ActivityDeleteListsResponse;

export type PostTagRemoveContactData = ActivityTagging;

export type PostTagAddContactData = ActivityTagging;

export type PostTagDeleteData = ActivityTagging;

export type PostCustomFieldDeleteData = ActivityDeleteCustomFields;

export interface GetAccountSegmentsParams {
  /**
   * The number of segments to return on a page.
   * @default "1000"
   * @example "1000"
   */
  limit?: string;
  /**
   * Specify the segment sort order to use. Sort by name (`sort_by=name`) in ascending order, or sort by date (`sort_by=date`) in descending order with the most recently updated segments listed first.
   * @default "date"
   * @example "sort_by=date"
   */
  sort_by?: string;
}

export type GetAccountSegmentsData = SegmentsDTO;

export type CreateSegmentData = SegmentDetail;

export type GetSegmentDetailData = SegmentDetail;

export type UpdateSegmentData = SegmentDetail;

export type DeleteSegmentData = any;

export type UpdateSegmentNameData = SegmentDetail;

export interface GetContactParams {
  /**
   * Use `include` to specify which contact sub-resources to include in the response. Use a comma to separate multiple sub-resources. Valid values: `custom_fields`, `list_memberships`, `phone_numbers`, `street_addresses`, `notes`, `sms_channel`, and `taggings`.
   * @format csv
   * @example "custom_fields,list_memberships"
   */
  include?: string;
  /**
   * Unique ID of contact to GET
   * @example "04fe9a-a579-43c5-bb1a-58ed29bf0a6a"
   */
  contactId: string;
}

export type GetContactData = ContactResource;

export type PutContactData = ContactResource;

export type DeleteContactData = any;

export interface GetContactsParams {
  /**
   * Use the `status` query parameter to search for contacts by status. This parameter accepts one or more comma separated values: `all`, `active`, `deleted`, `not_set`, `pending_confirmation`, `temp_hold`, and `unsubscribed`.
   * @format csv
   */
  status?: string;
  /**
   * Use the `email` query parameter to search for a contact using a specific email address.
   * @example "xyz@example.com"
   */
  email?: string;
  /**
   * Use the `lists` query parameter to search for contacts that are members of one or more specified lists. Use a comma to separate multiple `list_id` values, up to a maximum of 25.
   * @max 25
   * @example "04fe9a-a579-43c5-bb1a-58ed29bf0a6a,04fe9a-a579-43c5-bb1a-58ed29bf0a6a,04fe9a-a579-43c5-bb1a-58ed29bf0a6a"
   */
  lists?: string;
  /**
   * Use to get contacts that meet the segment criteria for a single specified `segment_id`. This query parameter can only be combined with the limit query parameter. When using the `segment_id` query parameter, the V3 API may return a 202 response code instead of a 200 response. The 202 response code indicates that your request has been accepted, but not fully completed. Retry sending your API request to return the completed results and a 200 response code.
   * @max 1
   * @example "14"
   */
  segment_id?: string;
  /**
   * Use to get contact details for up to 50 specified tags. Use a comma to separate each `tag_id`.
   * @format uuid
   * @max 50
   * @example "fa85f64-5717-4562-b3fc-2c963f66afa6"
   */
  tags?: string;
  /**
   * Use `updated_after` to search for contacts that have been updated after the date you specify. To search for updated contacts within a date range, specify both `updated_after` and `updated_before` dates. Accepts ISO-8601 formatted dates.
   * @format date-time
   * @example "2022-01-01T16:37:59.091Z"
   */
  updated_after?: string;
  /**
   * Use `updated_before` to search for contacts that have been updated before a specified date. To search for updated contacts within a date range, specify both `updated_after` and `updated_before` dates. Accepts ISO-8601 formatted dates.
   * @format date-time
   * @example "2022-07-16T16:37:59.091Z"
   */
  updated_before?: string;
  /**
   * Use `created_after` to search for contacts created after a specified date. To search for contacts created within a date range, specify both `created_after` and `created_before` dates. Accepts ISO-8601 formatted dates.
   * @format date-time
   * @example "2021-01-01T16:37:59.091Z"
   */
  created_after?: string;
  /**
   * Use `created_before` to search for contacts created before a specified date. To search for contacts created within a date range, specify both `created_after` and `created_before` dates. Accepts ISO-8601 formatted dates.
   * @format date-time
   * @example "2022-07-16T16:37:59.091Z"
   */
  created_before?: string;
  /**
   * Use `optout_after` to search for contacts that unsubscribed after a specified date.
   * @format date-time
   * @example "2022-11-16T16:20:59.091Z"
   */
  optout_after?: string;
  /**
   * Use `optout_before` to search for contacts that unsubscribed before a specified date.
   * @format date-time
   * @example "2022-11-16T16:20:59.091Z"
   */
  optout_before?: string;
  /**
   * Use `include` to specify which contact sub-resources to include in the response. Use a comma to separate multiple sub-resources. Valid values: `custom_fields`, `list_memberships`, `taggings`, `notes`,`phone_numbers`, `street_addresses`, `sms_channel`.
   * @format csv
   * @example "custom_fields,list_memberships"
   */
  include?: string;
  /**
   * Use to get contacts by their SMS status. This parameter accepts one or more comma separated values: `all`, `explicit`, `unsubscribed`, `pending_confirmation`, `not_set`.
   * @format csv
   */
  sms_status?: string;
  /**
   * Set `include_count=true` to include the total number of contacts (`contacts_count`) that meet all search criteria in the response body.
   * @example "true"
   */
  include_count?: boolean;
  /**
   * Specifies the number of results displayed per page of output in the response, from 1 - 500, default = 50.
   * @min 1
   * @max 500
   * @default 50
   * @example 25
   */
  limit?: number;
}

export type GetContactsData = Contacts;

export type CreateContactData = ContactResource;

export type CreateOrUpdateContactData = ContactCreateOrUpdateResponse;

export interface GetContactIdXrefsParams {
  /**
   * Comma delimited list of V2 API contact `ids` to cross-reference with the V3 API `contact_id` value. Endpoint accepts a maximum of 500 ids at a time.
   * @format csv
   * @maxItems 500
   * @example "1995998026,1882999944,1775099999"
   */
  sequence_ids: string;
}

export type GetContactIdXrefsData = ContactXrefs;

export type GetCustomFieldData = CustomFieldResource;

export type PutCustomFieldData = CustomFieldResource;

export type DeleteCustomFieldData = any;

export interface GetCustomFieldsParams {
  /**
   * Specifies the number of results displayed per page of output, from 1 - 100, default = 50.
   * @min 1
   * @max 100
   * @default 50
   */
  limit?: number;
}

export type GetCustomFieldsData = CustomFields;

export type PostCustomFieldsData = CustomFieldResource;

export interface GetListParams {
  /**
   * Returns the total number of contacts per list that meet your selection criteria. Set the `include_membership_count` to `active`, to count only active contacts, or `all` to include all contacts in the count.
   * @example "all"
   */
  include_membership_count?: 'all' | 'active';
  /**
   * The system generated ID that uniquely identifies a contact list.
   * @format uuid
   * @example "cbc05bac-6a41-46fa-a063-79961763bf4b"
   */
  listId: string;
}

export type GetListData = ContactList;

export type PutListData = ContactListPutPost;

export type DeleteListActivityData = ActivityDeleteListResponse;

export interface GetListsParams {
  /**
   * Use to specify the number of results displayed per page of output, from 1 - 500, default = 50.
   * @min 1
   * @max 1000
   * @default 50
   */
  limit?: number;
  /**
   * Set `include_count` to `true` to return the total number of contact lists that meet your selection criteria.
   * @default false
   * @example true
   */
  include_count?: boolean;
  /**
   * Use to include the total number of contacts per list. Set to  `active`, to count only active (mailable) contacts, or `all` to count all contacts.
   * @example "all"
   */
  include_membership_count?: 'all' | 'active';
  /**
   * Use to get details for a single list by entering the full name of the list.
   * @example "TopTier"
   */
  name?: string;
  /**
   * Use to get lists by status. Accepts comma-separated status values.
   * @example "all"
   */
  status?: 'all' | 'active' | 'deleted';
}

export type GetListsData = ContactListArray;

export type CreateListData = ContactListPutPost;

export interface GetListIdXrefsParams {
  /**
   * Comma delimited list of V2 API list `ids` to cross-reference with the V3 API `list_id` value. Endpoint accepts a maximum of 500 ids at a time.
   * @format csv
   * @maxItems 500
   * @example "1995998026,1882999944,1775099999"
   */
  sequence_ids: string;
}

export type GetListIdXrefsData = ListXrefs;

export type GetSmsEngagementHistoryData = SmsEngagementHistory;

export interface CountContactParams {
  /**
   * Use to return the total number of new contact subscribers in the results.
   * @example "new_subscriber"
   */
  include?: 'new_subscriber';
}

export type CountContactData = ContactsCounts;

export interface GetTagParams {
  /**
   * Use to include (`true`) or exclude (`false`) the total number of tagged contacts (`contacts_count`) from the results.
   * @default false
   * @example true
   */
  include_count?: boolean;
  /**
   * The ID that uniquely identifies a tag (UUID format).
   * @format uuid
   * @example "d938260a-af1e-11e9-a540-fa163e595123"
   */
  tagId: string;
}

export type GetTagData = Tag;

export type PutTagData = Tag;

export type DeleteTagData = ActivityGeneric;

export interface GetTagsParams {
  /**
   * Use to specify the number of tag results (up to `500`) to display per page of output. The default is `50`.
   * @minLength 1
   * @maxLength 500
   * @default 50
   * @example 25
   */
  limit?: number;
  /**
   * Returns the total number of contacts (`contacts_count`) to which a tag applies.
   * @default false
   * @example true
   */
  include_count?: boolean;
}

export type GetTagsData = Tags;

export type PostTagData = Tag;

export interface RetrieveEmailCampaignsUsingGetParams {
  /**
   * Specifies the number of campaigns to display on each page of output that is returned (from return 1 - 500). The default returns 50 campaigns per page.
   * @format int32
   * @default 50
   */
  limit?: number;
  /**
   * Use to return email campaigns with `updated_at` timestamps that are before a specific date and time (in ISO-8601 format). Use with the `after_date` query parameter to get email campaigns sent within a specific date range.
   * @format date-time
   * @example "2021-01-10T11:42:57.000Z"
   */
  before_date?: string;
  /**
   * Use to return email campaigns with last `updated_at` timestamps that are after a specific date and time (in ISO-8601 format). Use with the `before_date` query parameter to get email campaigns sent within a specific date range.
   * @format date-time
   * @example "2021-03-10T11:42:57.000Z"
   */
  after_date?: string;
}

export type RetrieveEmailCampaignsUsingGetData = PagedEmailCampaignResponse;

export type CreateEmailCampaignUsingPostData = EmailCampaign;

export type RetrieveEmailCampaignUsingGetData = EmailCampaign;

export type RemoveEmailCampaignUsingDeleteData = any;

export type RenameEmailCampaignUsingPatchData = EmailCampaign;

export interface RetrieveXrefMappingsUsingGetParams {
  /**
   * Comma separated list of V2 API `campaignId` values. You can enter up to 50 V2 `campaignId` values in each request.
   * @format csv
   * @maxItems 50
   * @example "1100567546598,1604567396117,12002485195578"
   */
  v2_email_campaign_ids: string;
}

export type RetrieveXrefMappingsUsingGetData = CrossReferenceResponse;

export interface RetrieveEmailCampaignActivityUsingGetParams {
  /**
   * Use the `include` query parameter to enter a comma separated list of additional email campaign activity properties for the V3 API to return. Valid values are `physical_address_in_footer`, `permalink_url`, `html_content`, and `document_properties`.
   * @format csv
   */
  include?: string;
  /**
   * The unique ID for an email campaign activity.
   * @example "91569d46-00e4-4a4d-9a4c-d17d98740d04"
   */
  campaignActivityId: string;
}

export type RetrieveEmailCampaignActivityUsingGetData = EmailCampaignActivity;

export type UpdateEmailCampaignActivityUsingPutData = EmailCampaignActivity;

export type RetrieveEmailSchedulesUsingGetData = EmailScheduleResponse;

export type ScheduleEmailCampaignActivityUsingPostData = EmailScheduleResponse;

export type UnscheduleEmailCampaignActivityUsingDeleteData = any;

export type TestSendCampaignActivityUsingPostData = any;

export type RetrieveEmailCampaignActivityPreviewUsingGetData = EmailCampaignActivityPreview;

export type RetrieveEmailSendHistoryUsingGetData = EmailSendHistory;

export type RetrieveResendToNonOpenersUsingGetData = ResendToNonOpeners;

export type CreateResendToNonOpenersUsingPostData = ResendToNonOpenersObject;

export type DeleteResendToNonOpenersUsingDeleteData = any;

export type RetrieveEmailCampaignAbTestUsingGetData = ABTestData;

export type CreateEmailCampaignAbTestUsingPostData = ABTestData;

export type DeleteEmailCampaignAbTestUsingDeleteData = any;

export interface GetContactTrackingParams {
  /**
   * Specify one or more tracking activity types to include as a comma-delimited string. The `tracking_activities_list`  and `tracking_activities_type` query parameters are mutually exclusive.
   * @format csv
   * @example "em_clicks,em_opens"
   */
  tracking_activities_list?: string;
  /**
   * Specify one or more tracking activity types to include as an array. The `tracking_activities_list`  and `tracking_activities_type` query parameters are mutually exclusive.
   * @example "`tracking_activity_type=em_sends&tracking_activity_type=em_opens`"
   */
  tracking_activity_type?: string[];
  /**
   * Default (`true`) returns campaign activity names in the results. Not including campaign activity names in the results (`false`), is more efficient.
   * @default true
   * @example "true"
   */
  include_campaign_activity_names?: boolean;
  /**
   * The number of tracking activities to return in a single page. Valid values are 1 to 100. Default is 100.
   * @min 1
   * @max 100
   * @default "100"
   * @example "20"
   */
  limit?: string;
  /**
   * The contact's ID for which tracking activity data is requested.
   * @example "aa9ff7b0-478d-11e6-8059-00163e3c8e19"
   */
  contactId: string;
}

export type GetContactTrackingData = ContactTrackingActivitiesPage;

export interface GetContactOpenClickRateParams {
  /** The starting date, in ISO 8601 format, to use to get campaigns. For example: 2019-01-01T00:00:00-0500. */
  start: string;
  /** The ending date, in ISO 8601 format, to use to get campaigns. For example: 2019-12-01T00:00:00-0500. */
  end: string;
  /**
   * The contact id which is requesting tracking activity data (e.g. aa9ff7b0-478d-11e6-8059-00163e3c8e19)
   * @example "aa9ff7b0-478d-11e6-8059-00163e3c8e19"
   */
  contactId: string;
}

export type GetContactOpenClickRateData = ContactOpenAndClickRates;

export interface GetContactTrackingCountParams {
  /** The starting date, in ISO 8601 format, to use to get campaigns. For example: 2019-01-01T00:00:00-0500. */
  start: string;
  /** The ending date, in ISO 8601 format, to use to get campaigns. For example: 2019-12-01T00:00:00-0500. */
  end: string;
  /**
   * The contact id which is requesting tracking activity data (e.g. aa9ff7b0-478d-11e6-8059-00163e3c8e19)
   * @example "aa9ff7b0-478d-11e6-8059-00163e3c8e19"
   */
  contactId: string;
}

export type GetContactTrackingCountData = ContactCampaignActivitiesSummary;

export interface GetCampaignActivityLinkStatsParams {
  /**
   * Set this query parameter to `true` to  return details for links that were not clicked in the response results.
   * @default false
   * @example "true"
   */
  no_clicks?: boolean;
  /**
   * The unique ID for an email campaign activity.
   * @format uuid
   * @example "8892baf9-970a-4de6-8400-fa4ec461987c"
   */
  campaignActivityId: string;
}

export type GetCampaignActivityLinkStatsData = EmailLinks;

export interface GetSendsParams {
  /**
   * The number of tracking activities to return on a page.
   * @min 1
   * @max 500
   * @default "500"
   */
  limit?: string;
  /**
   * The unique ID for an email campaign activity to use for this report.
   * @format uuid
   * @example "8892baf9-970a-4de6-8400-fa4ec461987c"
   */
  campaignActivityId: string;
}

export type GetSendsData = SendsTrackingActivitiesPage;

export interface GetOpensParams {
  /**
   * The number of tracking activities to return on a page.
   * @min 1
   * @max 500
   * @default "500"
   */
  limit?: string;
  /**
   * The unique ID for an email campaign activity to use for this report.
   * @format uuid
   * @example "8892baf9-970a-4de6-8400-fa4ec461987c"
   */
  campaignActivityId: string;
}

export type GetOpensData = OpensTrackingActivitiesPage;

export interface GetUniqueOpensParams {
  /**
   * The number of tracking activities to return on a page.
   * @min 1
   * @max 500
   * @default "500"
   */
  limit?: string;
  /**
   * The ID that uniquely identifies the email campaign activity to use for this report.
   * @format uuid
   * @example "8892baf9-970a-4de6-8400-fa4ec461987c"
   */
  campaignActivityId: string;
}

export type GetUniqueOpensData = OpensTrackingActivitiesPage;

export interface GetDidNotOpensParams {
  /**
   * The number of tracking activities to return on a page.
   * @min 1
   * @max 500
   * @default "500"
   */
  limit?: string;
  /**
   * The ID that uniquely identifies the email campaign activity to use for this report.
   * @format uuid
   * @example "8892baf9-970a-4de6-8400-fa4ec461987c"
   */
  campaignActivityId: string;
}

export type GetDidNotOpensData = DidNotOpensTrackingActivitiesPage;

export interface GetClicksParams {
  /**
   * The ID that uniquely identifies a single link URL for which you want to get a clicks report.
   * @format int64
   * @example "49920742166"
   */
  url_id?: number;
  /**
   * The number of tracking activities to return on a page.
   * @min 1
   * @max 500
   * @default "500"
   */
  limit?: string;
  /**
   * The ID that uniquely identifies the email campaign activity to use for this report.
   * @format uuid
   * @example "c8cdf384-15ca-4dcc-9b6f-4c91121fdc23"
   */
  campaignActivityId: string;
}

export type GetClicksData = ClicksTrackingActivitiesPage;

export interface GetForwardsParams {
  /**
   * The number of tracking activities to return on a page.
   * @min 1
   * @max 500
   * @default "500"
   */
  limit?: string;
  /**
   * The ID that uniquely identifies the email campaign activity to use for this report.
   * @format uuid
   */
  campaignActivityId: string;
}

export type GetForwardsData = ForwardsTrackingActivitiesPage;

export interface GetOptoutsParams {
  /**
   * The number of tracking activities to return on a page.
   * @min 1
   * @max 500
   * @default "500"
   */
  limit?: string;
  /**
   * The ID that uniquely identifies the email campaign activity to use for this report.
   * @format uuid
   */
  campaignActivityId: string;
}

export type GetOptoutsData = OptoutsTrackingActivitiesPage;

export interface GetBouncesParams {
  /** To return results for a specific bounce code, select the `bounce_code` from the drop-down list. To return results for multiple codes, repeat the bounce code parameter for each. For example, to return results for bounce codes `B` and `D` use `bounce_code=B&bounce_code=D`. */
  bounce_code?: ('B' | 'D' | 'F' | 'S' | 'V' | 'X' | 'Z')[];
  /**
   * The number of tracking activities to return on a page.
   * @min 1
   * @max 500
   * @default "500"
   */
  limit?: string;
  /**
   * The ID that uniquely identifies the email campaign activity to use for this report.
   * @format uuid
   */
  campaignActivityId: string;
}

export type GetBouncesData = BouncesTrackingActivitiesPage;

export interface GetAllBulkEmailCampaignSummariesParams {
  /**
   * Use the `limit` query parameter to limit the number of email campaign summaries to return on a single page. The default is `50` and the maximum is `500` per page.
   * @default "50"
   * @example "100"
   */
  limit?: string;
}

export type GetAllBulkEmailCampaignSummariesData = BulkEmailCampaignSummariesPage;

export type GetEmailSummaryData = CampaignStatsQueryResultEmail;

export type GetEmailCampaignActivitySummaryData = CampaignActivityStatsQueryResultEmail;

export interface GetUniqueContactClicksParams {
  /**
   * Use to limit the number of contact tracking activities to return on a single page. The default is `50` and the maximum is `500` per page.
   * @default "50"
   * @example "100"
   */
  limit?: string;
  /**
   * Use to filter the results to return only contacts that match a contacts full or partial first or last name, or email. For example: Josie or Jo.
   * @example "Jo"
   */
  contacts_filter?: string;
  /**
   * The landing page `campaign_activity_id` (UUID's) to use to get unique contact click results.
   * @format uuid
   * @example "82ee2c37-c8f8-4974-9560-ef93ad51d58z"
   */
  campaignActivityId: string;
}

export type GetUniqueContactClicksData = PContactClickTrackingActivitiesPage;

export interface GetUniqueContactOpensParams {
  /**
   * Use to limit the number of contact tracking activities to return on a single page. The default is `50` and the maximum is `500` per page.
   * @default "50"
   * @example "100"
   */
  limit?: string;
  /**
   * Use to filter the results to only include contacts that contain a certain value. This parameter does full and partial matches and applies to the contact first name, last name, and email fields. For example: Josie or Jo.
   * @example "Jo"
   */
  contacts_filter?: string;
  /**
   * The landing page `campaign_activity_id` (UUID's) to use to get unique contact open results.
   * @format uuid
   * @example "82ee2c37-c8f8-4974-9560-ef93ad51d58z"
   */
  campaignActivityId: string;
}

export type GetUniqueContactOpensData = PContactOpensTrackingActivitiesPage;

export interface GetContactOpensParams {
  /**
   * Use to limit the number of contact tracking activities to return on a single page. The default is `50` and the maximum is `500` per page.
   * @default "50"
   * @example "100"
   */
  limit?: string;
  /**
   * Use to filter the results to only include contacts that contain a certain value. This parameter does full and partial matches and applies to the contact first name, last name, and email fields. For example: Josie or Jo.
   * @example "Jo"
   */
  contacts_filter?: string;
  /**
   * The landing page `campaign_activity_id` (UUID's) to use to get unique contact open results.
   * @format uuid
   * @example "82ee2c37-c8f8-4974-9560-ef93ad51d58z"
   */
  campaignActivityId: string;
}

export type GetContactOpensData = PContactOpensTrackingActivitiesPage;

export interface GetUniqueContactUpdatesParams {
  /**
   * Use to limit the number of contact tracking activities to return on a single page. The default is `50` and the maximum is `500` per page.
   * @default "50"
   * @example "100"
   */
  limit?: string;
  /**
   * Use to filter the results to only include contacts that contain a certain value. This parameter does full and partial matches and applies to the contact first name, last name, and email fields. For example: Josie or Jo.
   * @example "Jo"
   */
  contacts_filter?: string;
  /**
   * The landing page `campaign_activity_id` (UUID's) to use to get unique contact open results.
   * @format uuid
   * @example "82ee2c37-c8f8-4974-9560-ef93ad51d58z"
   */
  campaignActivityId: string;
}

export type GetUniqueContactUpdatesData = PContactUpdateTrackingActivitiesPage;

export interface GetContactAddsParams {
  /**
   * Use to limit the number of contact tracking activities to return on a single page. The default is `50` and the maximum is `500` per page.
   * @default "50"
   * @example "100"
   */
  limit?: string;
  /**
   * Use to filter the results to only include contacts that contain a certain value. This parameter does full and partial matches and applies to the contact first name, last name, and email fields. For example: Josie or Jo.
   * @example "Jo"
   */
  contacts_filter?: string;
  /**
   * The landing page `campaign_activity_id` (UUID's) to use to get unique contact results.
   * @format uuid
   * @example "82ee2c37-c8f8-4974-9560-ef93ad51d58z"
   */
  campaignActivityId: string;
}

export type GetContactAddsData = PContactAddTrackingActivitiesPage;

export interface GetUniqueContactSmsOptInsParams {
  /**
   * Use to limit the number of contact tracking activities to return on a single page. The default is `50` and the maximum is `500` per page.
   * @default "50"
   * @example "100"
   */
  limit?: string;
  /**
   * Use to filter the results to return only contacts that match a contacts full or partial first or last name, or email. For example: Josie or Jo.
   * @example "Jo"
   */
  contacts_filter?: string;
  /**
   * The landing page `campaign_activity_id` (UUID's) to use to get unique contact click results.
   * @format uuid
   * @example "82ee2c37-c8f8-4974-9560-ef93ad51d58z"
   */
  campaignActivityId: string;
}

export type GetUniqueContactSmsOptInsData = PContactSMSOptInTrackingActivitiesPage;

export interface GetPartnerSiteOwnersParams {
  /** Depending on the `limit` you specify, the system determines the `offset` parameter to use (number of records to skip) and includes it in the link used to get the next page of results */
  offset?: string;
  /**
   * The number of client accounts to return on each page of results. The default value is `50`. Entering a `limit` value less than the minimum (`10`) or greater than the maximum (`50`) is ignored and the system uses the default values. Depending on the `limit` you specify, the system determines the `offset` parameter to use (number of records to skip) and includes it in the link used to get the next page of results.
   * @format int32
   * @min 10
   * @max 50
   * @default "50"
   * @example "50"
   */
  limit?: string;
  /**
   * Filters client account results by account type: `all` (default), `managed`, or `unmanaged`. Excluding the `account_type` query parameter returns all client accounts for the partner.
   * @default "all"
   * @example "managed"
   */
  account_type?: 'all' | 'managed' | 'unmanaged';
}

export type GetPartnerSiteOwnersData = PartnerAccount;

export type ProvisionData = ProvisionResponse;

export type GetPlanData = PlanTiersObject;

export type SetPlanData = PlanTiersObject;

export type CancelAccountData = AccountCancellation;

export type PartnerAccountOperationsPostSyncData = any;

export type CreateSsoUserData = any;

export type GetWebhooksCollectionData = WebhooksSubscriptionCollection;

export type GetWebhooksTopicData = WebhooksSubscriptionResponse;

export type PutWebhooksTopicData = WebhooksSubscriptionPutResp;

export type DeleteWebhooksSubscriptionsData = any;

export type TestSendWebhooksTopicData = WebhooksTestSend;
