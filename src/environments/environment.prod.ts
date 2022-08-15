import {AUTH_CONFIG} from "../../auth_config";

export const environment = {
  production: true,
  auth: {
    domain:AUTH_CONFIG.domain,
    clientId:AUTH_CONFIG.clientId,
    audience:AUTH_CONFIG.audience,
    redirectUri: window.location.origin
  },
  ID_TOKEN_NAMESPACE_PREFIX: 'https://resume.com'
};
