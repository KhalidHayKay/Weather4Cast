import { format } from 'date-fns';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useContext } from 'react';
import HourForecast from '../components/HourForecast';
import CurrentWeather from '../components/CurrentWeather';
import WeatherContext from '../contexts/weather/WeatherContext';

const Today = () => {
	const { weather } = useContext(WeatherContext);

	const resolvedHourForecast = () => {
		if (weather) {
			const hour = weather.forecast
				.map((item) => {
					const {
						time_epoch: timestamp,
						time,
						condition: { icon: condition },
						temp_c: temp,
					} = item;
					return { timestamp, hour: format(time, 'hh aa'), condition, temp };
				})
				.filter(
					(item) =>
						new Date().getHours() <= new Date(item.timestamp * 1000).getHours()
				)
				.slice(0, 11);

			return fillHourForecast(hour);
		}
	};

	const fillHourForecast = (forecast) => {
		const forecastOffset = 11 - forecast.length;
		if (forecastOffset > 0) {
			return [...Array(forecastOffset).fill(null), ...forecast];
		} else {
			return forecast;
		}
	};

	return (
		<div className='h-full py-2.5 px-3 flex-1 flex flex-col'>
			<div className='w-full h-3/4 relative'>
				{weather && <CurrentWeather weather={weather.current} />}
			</div>
			<div className='flex-1 w-full h-[60%] flex justify-between gap-x-1 lg:gap-x-1.5 xl:gap-x-2.5'>
				{weather &&
					resolvedHourForecast().map((item) => (
						<HourForecast item={item} key={item ? item.timestamp : Math.random()} />
					))}
			</div>
		</div>
	);
};

export default Today;
