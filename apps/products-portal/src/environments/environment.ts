// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://localhost:44306/api',
  openIdConnectSettings: {
    // AS PER IDP configuration
    authority: 'https://localhost:44398/',
    client_id: 'productsportalclient',
    redirect_uri: 'https://localhost:4203/signin-oidc',
    scope: 'openid profile roles products portal',
    response_type: 'id_token token',
    post_logout_redirect_uri: 'https://localhost:4203/',
    automaticSilentRenew: true,
    silent_redirect_uri: 'https://localhost:4203/redirect-silentrenew'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
