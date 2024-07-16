const crypto = require("crypto");
module.exports = ({ env }) => ({
  // ...
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "7d",
        jwtSecret: env("JWT_SECRET", crypto.randomBytes(16).toString("base64")),
      },
    },
  },
  // ...
});
