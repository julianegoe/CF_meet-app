const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;
/* const calendar = google.calendar("v3"); */

/* const uri = "https://accounts.google.com/o/oauth2/auth?client_id=856026410494-63hkfdrkcoqmrqn79lg2b5e71rvui4q1.apps.googleusercontent.com&response_type=token&redirect_uri=https://julianegoe.github.io/CF_meet-app/&scope=https://www.googleapis.com/auth/calendar.readonly"
 */
const credentials = {
  client_id : process.env.CLIENT_ID,
  project_id: process.env.PROJECT,
  client_secret: process.env.CLIENT_SECRET,
  calendar_id: process.env.CALENDAR_ID,
  auth_uri:"https://accounts.google.com/o/oauth2/auth",
  token_uri:"https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",
  redirect_uris:"https://julianegoe.github.io/CF_meet-app/",
  javascript_origins:["https://julianegoe.github.io", "http://localhost:3000"]
};

const {client_id, client_secret, redirect_uris} = credentials;


module.exports.getAuthUrl = async () => {

  const oauth2Client = new OAuth2(
    client_id,
    client_secret,
    redirect_uris
  );

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/calendar.readonly']
  });

  return {
    statusCode: 200,
    headers: {"Access-Control-Allow-Origin": "*"},
    body: JSON.stringify({authUrl: authUrl})
  }
};

module.exports.getAccessToken = async (event) => {
  console.log(event);
  const oauth2Client = new OAuth2(
    client_id,
    client_secret,
    redirect_uris
  );
  const code = decodeURIComponent(`${event.pathParameters.code}`);
  /* const code = "4%2F0AY0e-g44-jYS9SaUYvTMftoIn-Re-7svI9v9puu69-xNFuesBwib63k_PDtP4PCjaw-6PQ" */
  return new Promise((resolve, reject) => {
    /**
     *  Exchange authorization code for access token with a “callback” after the exchange,
     *  The callback in this case is an arrow function with the results as parameters: “err” and “token.”
     */

     oauth2Client.getToken(code, (err, token) => {
      if (err) {
        return reject(err);
      }
      return resolve(token);
    });
  })
    .then((token) => {
      // Respond with OAuth token
      return {
        statusCode: 200,
        body: JSON.stringify(token),
      };
    })
    .catch((err) => {
      // Handle error
      console.error(err);
      return {
        statusCode: 500,
        body: JSON.stringify(err),
      };
    });
}



