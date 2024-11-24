import { createContext, useContext, useEffect, useState } from 'react';
import LocationContext from '../location/LocationContext';
import { getWeatherData } from './weatherAction';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
	const { location } = useContext(LocationContext);

	const [weatherData, setWeatherData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);

	useEffect(() => {
		const fetchWeather = async () => {
			setIsLoading(true);
			const data = await getWeatherData(location.latitude, location.longitude);

			setWeatherData(data);
			setIsLoading(false);

			if (data.error) {
				setErrorMessage(data.error);
			}
		};

		location && fetchWeather();
	}, [location]);

	return (
		<WeatherContext.Provider
			value={{
				weatherData,
				setWeatherData,
				isLoading,
				errorMessage,
			}}
		>
			{children}
		</WeatherContext.Provider>
	);
};

export default WeatherContext;
