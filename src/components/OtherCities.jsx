import { useContext, useEffect, useState } from "react";
import bigCities from "../data/big_cities";
import OtherCitiesWeatherCard from "./OtherCitiesWeatherCard";
import { getCurrentWeather } from "../contexts/weather/weatherAction";
import ScreenContext from "../contexts/Screen/ScreenContext";

const OtherCities = ({ offset }) => {
    const [citiesWeather, setCitiesWeather] = useState([]);
    const {screen} = useContext(ScreenContext);

    const limit = screen.width >= 1024 ? 5 : 6;

    useEffect(() => {
        const fetchWeather = async () => {
            const request = bigCities.map(city => getCurrentWeather(`${city.city}, ${city.country}`));
    
            const weathers = await Promise.all(request);
    
            setCitiesWeather(weathers);
        };

        fetchWeather();
    }, []);

    return ( 
        <div className="h-full grid grid-cols-2 lg:grid-cols-1 items-center justify-center gap-1">
            {
                citiesWeather.length <= 0
                ? 
                <div className="w-full h-full bg-secondary rounded-3xl"></div>
                : 
                citiesWeather.slice(offset, offset + limit).map(
                    weather => <OtherCitiesWeatherCard data={weather} key={weather.location.country} />
                )
            }
        </div>
    );
}
 
export default OtherCities;