import axios from 'axios';

const weatherApi = axios.create({
	baseURL: 'https://api.weatherapi.com/v1',
	params: {
		key: process.env.REACT_APP_WEATHERAPI_API_KEY,
	},
});

const weatherBit = axios.create({
	baseURL: 'https://api.weatherbit.io/v2.0',
	params: {
		key: process.env.REACT_APP_WEATHERBIT_API_KEY,
	},
});

export const getCurrentWeather = async (searchQuery) => {
	const res = await weatherApi.get(`/forecast.json?q=${searchQuery}`);

	return res.data;
};

export const getWeatherData = async (lat, lon, forecastDays = 7) => {
	const [today, dayForecast] = await Promise.all([
		await weatherApi.get(`/forecast.json?q=${lat}, ${lon}`),
		await weatherBit.get('/forecast/daily', {
			params: { lat, lon, days: forecastDays + 1 },
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
