const admin = require("firebase-admin");
const serviceAccount = require("../firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://smart-donor-matching-default-rtdb.firebaseio.com/"
});

const db = admin.database();
module.exports = db;
