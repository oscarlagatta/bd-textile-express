export const environment = {
  production: true,
  apiUrl: 'http://api-pim.valkian.co.uk/api',
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
