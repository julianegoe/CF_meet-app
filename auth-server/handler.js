const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar("v3");


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

const {client_id, client_secret, redirect_uris, calendar_id} = credentials;

const oauth2Client = new OAuth2(
  client_id,
  client_secret,
  redirect_uris
);


module.exports.getAuthUrl = async () => {


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

module.exports.getAccess = async (event) => {
  const oauth2Client = new OAuth2(
    client_id,
    client_secret,
    redirect_uris
  );
  
  const code = decodeURIComponent(`${event.pathParameters.code}`);
/*    const code = decodeURIComponent('4%2F0AY0e-g4dF2NXDWm2s5cGl_BOpqSjZjF9R9sLNT7NHA5A_0m2xsR_ivWfcCRoa9xzZZiLNw') 
 */   return new Promise((resolve, reject) => {
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
        headers: {
          "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET"
      },
        body: JSON.stringify(token)
      };
    })
    .catch((err) => {
      // Handle error
      console.error(err);
      return {
        statusCode: 500,
        headers: {"Access-Control-Allow-Origin": "*"},
        body: JSON.stringify(err),
      };
    });
};

module.exports.getCalendarEvents = async (event) => {

  const oauth2Client = new OAuth2(
    client_id,
    client_secret,
    redirect_uris
  );

  const access_token = event.pathParameters.code;
  oauth2Client.setCredentials({ access_token })

  try {
    const results = await calendar.events.list(
      {
        calendarId: calendar_id,
        auth: oauth2Client,
        timeMin: new Date().toISOString(),
        singleEvents: true,
        orderBy: "startTime",
      }).promise()

      return {
        statusCode: 200,
        headers: {"Access-Control-Allow-Origin": "*"}, 
        body: JSON.stringify({ events: results.data.items }),
      }
  } catch(err) {
    return {
      statusCode: 500,
      headers: {"Access-Control-Allow-Origin": "*"},
      body: JSON.stringify(err),
    }
  }

}



