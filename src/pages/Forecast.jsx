import { useContext } from "react";
import ForecastCard from "../components/forecast/ForecastCard";
import { format } from "date-fns";
import Tomorrow from "../components/forecast/Tomorrow";
import WeatherContext from "../contexts/weather/WeatherContext";

const Forecast = () => {
    const { forecast } = useContext(WeatherContext);

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    return ( 
        <div className="h-full w-full grid grid-cols-8 gap-x-4 p-5">
            {
                forecast && forecast.map(item => (
                    format(item.datetime, 'iii') === format(tomorrow, 'iii') ? 
                    <Tomorrow 
                        item={{
                            day: format(item.datetime, 'iii'),
                            icon: item.weather.icon,
                            temp: item.app_max_temp,
                            feel: item.weather.description,
                            sunrise: format(item.sunrise_ts * 1000, 'h:m a'),
                            sunset: format(item.sunset_ts * 1000, 'h:mm a'),
                            wind: item.wind_spd * 3.6 /* conversion: m/s to km/h */,
                            humidity: item.rh,
                            pressure: item.pres / 1013.25 /* conversion: mb to atm */
                        }} 
                        key={item.datetime}
                    /> :
                    <ForecastCard 
                        item={{
                            day: format(item.datetime, 'iii'),
                            icon: item.weather.icon,
                            temp: item.app_max_temp, 
                        }} 
                        key={item.datetime} 
                    />
                ))
            }
        </div>
    );
}
 
export default Forecast;