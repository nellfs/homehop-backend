var AuthInfo;

try {
  AuthInfo = require("../auth.json");
} catch (err) {
  console.log(
    '"auth.json" Not found! Please create one following the example at "auth_example.json."'
  );
}

function getConnectionString() {
  if (AuthInfo) {
    const auth = AuthInfo.mongodb_connectionString;
    console.log("Logged at: " + auth);
    return auth;
  }
  console.log("Could not connect! :(");
}

module.exports = getConnectionString;
