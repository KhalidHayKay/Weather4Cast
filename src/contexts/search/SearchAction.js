import axios from "axios";

const weatherApi = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
    params: {
        key: process.env.REACT_APP_WEATHERAPI_API_KEY,
    },
    
    // headers: {
    //     'Access-Control-Allow-Origin': 'no-cors'
    // }
})

export const searchLocation = async (searchQuery) => {
    const res = await weatherApi.get(`/search.json?q=${searchQuery}`);

    return res.data.length > 1 ? res.data : res.data[0] ? res.data[0] : [];
}

export const getTimezone = async (lat, lon) => {
    const res = await weatherApi.get(`timezone.json?&q=${lat},${lon}`);

    return res.data.location;
}