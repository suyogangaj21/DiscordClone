// var { expressjwt: jwt } = require("express-jwt");
// import jwks from 'jwks-rsa';



// export const jwtCheck =()=>{ 
//     jwt({
//     secret: jwks.expressJwtSecret({
//       cache: true,
//       rateLimit: true,
//       jwksRequestsPerMinute: 5,
//       jwksUri: 'https://keycloak.authjs.dev/realms/master/protocol/openid-connect/certs'
//     }),
//     issuer: 'https://keycloak.authjs.dev/realms/master',
//     algorithms: ['RS256']
//   });}