import axios from 'axios';
const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const weatherApiKey = '1c5a1c2a7a89bc7970d716efa8525e1e';

const newsApiUrl = 'https://newsapi.org/v2/everything?q='
const newsApiKey = '&apiKey=036c3c402b6c4e14bde7779d712508e2'

// Weather Endpoint
export const getWeather = (location) => {
	return axios({
		method: 'GET',
		url: weatherApiUrl + location + '&units=imperial&APPID=' + weatherApiKey,
	})
}

// News Endpoint
export const getNews = (location) => {
	return axios({
		method: 'GET',
		url: newsApiUrl + location + newsApiKey,
	})
}
// Spotify Endpoint
export const getMusicPlayer = () => {
	return axios({
		method: 'GET',
		url: '',
	})
}
