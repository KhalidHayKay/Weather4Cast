import { useContext, useEffect, useState } from "react";
import { format } from "date-fns";
import Humidity from "../components/overview/Humidity";
import Wind from "./overview/Wind";
import Pressure from "../components/overview/Pressure";
import CloudCover from "./overview/CloudCover";
import WeatherContext from "../contexts/weather/WeatherContext";

const Overview = () => {
    const {weather} = useContext(WeatherContext);

    const [overview, setOverview] = useState(<Humidity />)
    const [data, setData] = useState(null);
    const [active, setActive] = useState('humidity')
    
    useEffect(() => {
        if (weather) {
            const time = weather.forecast.map(item => format(item.time_epoch * 1000, 'h a'));
            const humidity = weather.forecast.map(item => item.humidity);
            const pressure = weather.forecast.map(item => item.pressure_mb);
            const wind = weather.forecast.map(item => item.wind_kph);
            const cloud = weather.forecast.map(item => item.cloud);

            setData({
                humidity: {time, humidity},
                pressure: {time, pressure},
                wind: {time, wind},
                cloud: {time, cloud},
            })
        }
    }, [weather]);
    
    useEffect(() => {
        if (data) {
            setOverview(<Humidity data={data.humidity} />);
        }
    }, [data]);

    const handleNavigation = (componentName) => {
        switch (componentName) {
            case 'humidity':
                setOverview(<Humidity data={data.humidity} />)
                break;
            case 'cloud':
                setOverview(<CloudCover data={data.cloud} />)
                break;
            case 'wind':
                setOverview(<Wind data={data.wind} />)
                break;
            case 'pressure':
                setOverview(<Pressure data={data.pressure} />)
                break;
            default:
                break;
        }

        setActive(componentName);
    };
    
    return <>
        <div className="flex items-center justify-between">
            <h2 className="text-3xl">Overview</h2>
            <div className="bg-primary text-sm rounded-3xl space-x-1">
                <button onClick={() => handleNavigation('humidity')} data-active={''} className={`${active === 'humidity' && 'active-overview'} py-1.5 px-2.5 rounded-3xl hover:bg-accent hover:text-primary hover:bg-opacity-70 transition ease-in-out`}>Humidity</button>
                <button onClick={() => handleNavigation('wind')} data-active={''} className={`${active === 'wind' && 'active-overview'} py-1.5 px-2.5 rounded-3xl hover:bg-accent hover:text-primary hover:bg-opacity-70 transition ease-in-out`}>Wind</button>
                <button onClick={() => handleNavigation('pressure')} data-active={''} className={`${active === 'pressure' && 'active-overview'} py-1.5 px-2.5 rounded-3xl hover:bg-accent hover:text-primary hover:bg-opacity-70 transition ease-in-out`}>Pressure</button>
                <button onClick={() => handleNavigation('cloud')} data-active={''} className={`${active === 'cloud' && 'active-overview'} py-1.5 px-2.5 rounded-3xl hover:bg-accent hover:text-primary hover:bg-opacity-70 transition ease-in-out`}>Cloud</button>
            </div>
        </div>
        <div className="flex-1 mt-5">
            {overview}
        </div>
    </>;
}
 
export default Overview;