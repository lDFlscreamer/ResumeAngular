const fs = require('fs');

const targetPath = './auth_config.ts';

const envConfigFile = `export const AUTH_CONFIG = Object({
  "domain": ${process.env.AUTH0_DOMAIN},
  "clientId": ${process.env.AUTH0_CLIENT_ID}
})
`;

fs.writeFile(targetPath, envConfigFile, 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
});
