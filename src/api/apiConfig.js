import axios from 'axios'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
const apiKey = '1c5a1c2a7a89bc7970d716efa8525e1e'

// Weather Endpoints
export const getWeather = (city) => {
	return axios({
		method: 'GET',
		url: apiUrl + city + '&units=imperial&APPID=' + apiKey,
	})
}

// Spotify Endpoints
export const getMusicPlayer = () => {
	return axios({
		method: 'GET',
		url: '',
	})
}
