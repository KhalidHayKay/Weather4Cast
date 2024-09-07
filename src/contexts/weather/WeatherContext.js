import { createContext, useContext, useEffect, useState } from "react";
import LocationContext from "../location/LocationContext";
import { getDailyForecast, getHourlyForecast } from "./weatherAction";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const {location} = useContext(LocationContext);

    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const [weatherData, forecastData] = await Promise.all([
                getHourlyForecast(location.latitude, location.longitude),
                getDailyForecast(location.latitude, location.longitude, 7)
            ]);

            setWeather(weatherData);
            setForecast(forecastData.slice(1));
        }

        location && fetchWeather();
    }, [location]);

    return <WeatherContext.Provider
        value={{
            weather,
            forecast,
        }}
    >
        {children}
    </WeatherContext.Provider>
}

export default WeatherContext;