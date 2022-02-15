var AuthInfo = {};

try {
  AuthInfo = require("./auth.json");
} catch (err) {
  console.log("Please create an auth.json like auth_example.json");
}

function getConnectionString() {
  if (AuthInfo) {
    const auth = AuthInfo.mongodb_connectionString;
    console.log("Logged in: " + auth);
    return auth;
  }
}

exports.getConnectionString = getConnectionString;
