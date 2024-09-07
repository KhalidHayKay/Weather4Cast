import axios from "axios";

const weatherApi = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
    params: {
        key: process.env.REACT_APP_WEATHERAPI_API_KEY,
    }
})

const weatherBit = axios.create({
    baseURL: 'http://api.weatherbit.io/v2.0',
    params: {
        key: process.env.REACT_APP_WEATHERBIT_API_KEY,
    }
})

export const getCurrentWeather = async (searchQuery) => {
    const res = await weatherApi.get(`/forecast.json?q=${searchQuery}`);

    return res.data;
}

export const getHourlyForecast = async (lat, lon) => {
    const res = await weatherApi.get(`/forecast.json?q=${lat}, ${lon}`);

    const {current, forecast} = res.data;

    return {current, forecast: forecast.forecastday[0].hour}
}

export const getDailyForecast = async (lat, lon, numOfDays) => {
    const res = await weatherBit.get('/forecast/daily', {
        params: {lat, lon, days: numOfDays + 1,}
    })

    return res.data.data;
}