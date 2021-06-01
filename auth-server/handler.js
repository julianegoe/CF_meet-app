const axios = require('axios');
const querystring = require("querystring")



const credentials = {
  client_id : process.env.CLIENT_ID,
  project_id: process.env.PROJECT,
  client_secret: process.env.CLIENT_SECRET,
  calendar_id: process.env.CALENDAR_ID,
  auth_uri:"https://accounts.google.com/o/oauth2/auth",
  token_uri:"https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",
  redirect_uris:"https://julianegoe.github.io/CF_meet-app/",
  javascript_origins:["https://julianegoe.github.io", "http://localhost:8080"]
};
const {client_id, client_secret, redirect_uris} = credentials;


module.exports.getAuthUrlNoLib = async () => {

const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${client_id}&
response_type=code&
redirect_uri=${redirect_uris}&
scope=https://www.googleapis.com/auth/calendar.readonly&
access_type=offline`

  return {
    statusCode: 200,
    headers: {"Access-Control-Allow-Origin": "*"},
    body: JSON.stringify({authUrl: authUrl})
  }
};

module.exports.getAccessTokenNoLib = async (event) => {
  
  /* const authCode = decodeURIComponent(`${event.pathParameters.code}`); */
    
  const authCode = decodeURIComponent('4%2F0AY0e-g78jor-F-NJYRC0txl5j2BIvRafAHEdjpPwj1IC6NNWVjsJTZwXfyHnRpGdSIVHmQ');

  const data = querystring.stringify({
    code: authCode,
    client_id: client_id,
    client_secret: client_secret,
    redirect_uri: redirect_uris,
    grant_type: 'authorization_code'
  }); 

  const headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
  };

  const endpoint = `https://oauth2.googleapis.com/token/`
  
  try {
    const response = await axios.post(endpoint, data, headers)
    return {
      statusCode: 200,
      body: response.data
    }
  } catch (err) {
    return {body: "this is err: " + err}
  }
    
}