import axios from 'axios';
import { mockData } from './mock-data';
import NProgress from 'nprogress';

/* Returns an Aceess Token for API called to google calendar api */
export const getAccessToken = async () => {
	const accessToken = localStorage.getItem('access_token');
	const tokenCheck = accessToken && (await checkToken(accessToken));
	if (!accessToken || tokenCheck.error) {
		await localStorage.removeItem('access_token');
		const searchParams = new URLSearchParams(window.location.search);
		const code = await searchParams.get('code');

		if (!code) {
			console.log('no token');
			const response = await axios.get(
				'https://5x77df5ypj.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url'
			);
			const { authUrl } = response.data;
			return (window.location.href = authUrl);
		}
		console.log('there is code');
		return code && getToken(code);
	}
	return accessToken;
};

/* Checks with google if access token is still valid once it's saved to local Storage */
const checkToken = async (accessToken) => {
	const result = await fetch(
		`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
	)
		.then((res) => res.json())
		.catch((error) => error.json());

	return result;
};

/* removes the query from URL once access token is received */
const removeQuery = () => {
	if (window.history.pushState && window.location.pathname) {
		var newurl =
			window.location.protocol +
			'//' +
			window.location.host +
			window.location.pathname;
		window.history.pushState('', '', newurl);
	} else {
		newurl = window.location.protocol + '//' + window.location.host;
		window.history.pushState('', '', newurl);
	}
};

/* gets AccessToken once code from redirect URL is retrieved */
const getToken = async (code) => {
	const encodeCode = encodeURIComponent(code);
	const access_token = await axios
		.get(
			'https://5x77df5ypj.execute-api.eu-central-1.amazonaws.com/dev/api/token' +
				'/' +
				encodeCode
		)
		.then((res) => {
			return res.data.tokens.access_token;
		})
		.catch((error) => error);
	console.log(access_token);
	access_token && localStorage.setItem('access_token', access_token);

	return access_token;
};

/* Extracts a set of location names from events data */
export const extractLocations = (events) => {
	let extractLocations = events.map((event) => {
		return event.location;
	});
	var locations = [...new Set(extractLocations)];
	return locations;
};

/* makes API call to Google to get events usin the access token */
export const getEvents = async () => {
	NProgress.start();
	if (window.location.href.startsWith('http://localhost')) {
		NProgress.done();
		return mockData;
	}
	const token = await getAccessToken();
	if (token) {
		removeQuery();
		const result = await axios.get(
			`https://5x77df5ypj.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/${token}`
		);
		if (result.data.events) {
			var locations = extractLocations(result.data.events);
			localStorage.setItem('lastEvents', JSON.stringify(result.data));
			localStorage.setItem('locations', JSON.stringify(locations));
		}
		NProgress.done();
		return result.data.events;
	}
};
