import { createContext, useContext, useEffect, useState } from 'react';
import LocationContext from '../location/LocationContext';
import { getWeatherData } from './weatherAction';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
	const { location } = useContext(LocationContext);

	const [weatherData, setWeatherData] = useState(null);

	useEffect(() => {
		const fetchWeather = async () => {
			const data = await getWeatherData(location.latitude, location.longitude, 7);

			setWeatherData(data);
		};

		location && fetchWeather();
	}, [location]);

	return (
		<WeatherContext.Provider
			value={{
				weatherData,
			}}
		>
			{children}
		</WeatherContext.Provider>
	);
};

export default WeatherContext;
