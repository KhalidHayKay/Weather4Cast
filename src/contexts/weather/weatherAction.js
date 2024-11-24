import axios from 'axios';
import { handleApiError } from '../ErrorHandler';

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
	try {
		const [today, dayForecast] = await Promise.all([
			await weatherApi
				.get(`/forecast.json?q=${lat}, ${lon}`)
				.catch(handleApiError),
			await weatherBit
				.get('/forecast/daily', {
					params: { lat, lon, days: forecastDays + 1 },
				})
				.catch(handleApiError),
		]);

		if (!today || !dayForecast) {
			return { error: 'Failed to fetch weather data. Please try again later.' };
		}

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
	} catch (error) {
		console.error('Unexpected error in getWeatherData:', error.message);
		// console.log(error);
		return { error: 'An unexpected error occurred. Please try again later.' };
	}
};
