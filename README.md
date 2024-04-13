# constant-contact-v3

Constant Contact API v3 client for server JavaScript. Requires Node >= 18, or any runtime that supports `fetch` and either `Buffer` or `btoa`. Fully typed with TypeScript, based on [Constant Contact's OpenAPI spec](https://developer.constantcontact.com/api_guide/v3api_schema.html). Initially generated using [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api), then modified to add authentication support.

This library will automatically handle refreshing tokens as long as the token remains in memory. You can also provide a callback function to persist the token.

## Installation

```bash
npm install constant-contact-v3

yarn install constant-contact-v3

pnpm install constant-contact-v3
```

## Options

`clientId` - Your Constant Contact API key.
`clientSecret` - Your Constant Contact API secret.
`token` - Optional. An existing token to use for authentication. Token is in the format `ConstantContactToken`.
`onTokenUpdate` - Optional. A callback function that will be called when the token is updated. This is useful for persisting the token.
`enableThrows` - Optional. If `true`, the client will throw an error when the API returns an error. If `false`, the client will return the error as part of the response object. The default is `false`.

```typescript
export type ConstantContactOptions = {
  clientId: string;
  clientSecret: string;
  token?: ConstantContactToken;
  onTokenUpdate?: (token: ConstantContactToken) => void;
  enableThrows?: boolean;
};
```

## Usage

Before using any of the main routes, you need to acquire an access token. `constant-contact-v3` provides all the functions needed for the Authorization Code Flow. Other flows are not currently supported, but would be trivial to add if you are so inclined.

```typescript
import { ConstantContact } from 'constant-contact-v3';

const api = new ConstantContact({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  onTokenUpdate: token => saveToken(token),
});

const uri = api.oAuth.getAuthorizationURL({
  redirectUri: 'http://localhost:3000/callback',
  state: 'some-state',
  responseType: 'code',
  scope: [
    'account_read',
    'account_update',
    'campaign_data',
    'contact_data',
    'offline_access',
  ],
});

// then redirect the user to the uri. upon return, you will have a code that you can use to get a token.
const code = 'YOUR_CODE';

const tokenRes = await api.oAuth.exchangeAuthorizationCode(
  code,
  environment.constantContact.redirectUri,
);
if (!tokenRes.ok) throw new Error('Failed to exchange code for token');

// then you are ready to go!
```

`constant-contact-v3` will automatically refresh the token as needed. It is saved in the class instance of `ConstantContact`, so you must create multiple to handle multiple users.

## Future Work

- Add support for other OAuth flows.
