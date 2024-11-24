import axios from 'axios';

const weatherApi = axios.create({
	baseURL: 'https://api.weatherapi.com/v1',
	params: {
		key: process.env.REACT_APP_WEATHERAPI_API_KEY,
	},
});

export const searchLocation = async (searchQuery) => {
	const res = await weatherApi.get(`/search.json?q=${searchQuery}`);

	return res.data.length >= 1 ? res.data : [];
};
