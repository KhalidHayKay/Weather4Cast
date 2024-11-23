import { useContext } from 'react';
import LocationContext from '../../contexts/location/LocationContext';
import WeatherContext from '../../contexts/weather/WeatherContext';
import WeatherInfo from './WeatherInfo';
import Location from './Location';
import DayForecast from './DayForecast';
import HourForecast from './HourForecast';
import Wrapper from '../shared/Wrapper';
import UnitContext from '../../contexts/unit/UnitContext';
import LocationSkeleton from '../skeleton/LocationSkeleton';
import WeatherInfoSkeleton from '../skeleton/WeatherInfoSkeleton';
import DayForecastSkeleton from '../skeleton/DayForecastSkeleton';
import HourForecastSkeleton from '../skeleton/HourForecastSkeleton';

const Content = () => {
	const { browserLocation } = useContext(LocationContext);
	const { isLoading, weatherData } = useContext(WeatherContext);
	const { isCelsius } = useContext(UnitContext);

	return (
		<main className='grid gap-y-2 mobile:gap-y-5 tab:gap-y-10 px-2 mobile:px-4 sm:px-8 lg:px-16 py-4 mobile:py-8 text-primary-content'>
			<div className='flex flex-col tab:flex-row items-center lg:items-start gap-2 mobile:gap-5 lg:gap-10'>
				<Wrapper className='w-full sm:w-[70%] tab:w-[40%] flex flex-col items-center justify-center'>
					{!isLoading ? (
						<Location data={weatherData} timestamp={browserLocation.timestamp} />
					) : (
						<LocationSkeleton />
					)}
				</Wrapper>
				<Wrapper className='w-full tab:w-[60%] py-10 mobile:py-7 sm:py-5 px-3 sm:pr-0 lg:px-5 grid grid-cols-3'>
					{!isLoading ? (
						<WeatherInfo data={weatherData} isCelsius={isCelsius} />
					) : (
						<WeatherInfoSkeleton />
					)}
				</Wrapper>
			</div>
			<div className='flex flex-col tab:flex-row items-center lg:items-start gap-2 mobile:gap-5 lg:gap-10'>
				<Wrapper className='w-full sm:w-[80%] tab:w-[30%] pl-5 tab:px-2 lg:px-5 py-3'>
					{!isLoading ? (
						<DayForecast data={weatherData} isCelsius={isCelsius} />
					) : (
						<DayForecastSkeleton />
					)}
				</Wrapper>
				<Wrapper className='w-full tab:w-[70%] px-3 sm:px-5 py-3'>
					{!isLoading ? (
						<HourForecast data={weatherData} isCelsius={isCelsius} />
					) : (
						<HourForecastSkeleton />
					)}
				</Wrapper>
			</div>
		</main>
	);
};

export default Content;
