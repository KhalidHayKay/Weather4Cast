import axios from 'axios';

const weatherApi = axios.create({
	baseURL: 'http://api.weatherapi.com/v1',
	params: {
		key: process.env.REACT_APP_WEATHERAPI_API_KEY,
	},
});

const weatherBit = axios.create({
	baseURL: 'http://api.weatherbit.io/v2.0',
	params: {
		key: process.env.REACT_APP_WEATHERBIT_API_KEY,
	},
});

export const getCurrentWeather = async (searchQuery) => {
	const res = await weatherApi.get(`/forecast.json?q=${searchQuery}`);

	return res.data;
};

export const getWeatherData = async (lat, lon, numOfDays) => {
	const [today, dayForecast] = await Promise.all([
		await weatherApi.get(`/forecast.json?q=${lat}, ${lon}`),
		await weatherBit.get('/forecast/daily', {
			params: { lat, lon, days: numOfDays + 1 },
		}),
	]);

	const data = {
		location: today.data.location,
		current: {
			weather: today.data.current,
			astro: today.data.forecast.forecastday[0].astro,
		},
		forecast: {
			hours: today.data.forecast.forecastday[0].hour,
			days: dayForecast.data.data,
		},
	};

	return data;
};
