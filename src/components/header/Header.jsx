import { ReactComponent as CurrentLocation } from '../../resources/CurrentLocation.svg';
import ThemeController from './ThemeController';
import { useContext } from 'react';
import UnitContext from '../../contexts/unit/UnitContext';
import Search from './Search';
import LocationContext from '../../contexts/location/LocationContext';
import WeatherContext from '../../contexts/weather/WeatherContext';

const Header = () => {
	const { isCelsius, setIsCelsius } = useContext(UnitContext);
	const { isLoading } = useContext(WeatherContext);
	const {
		isBrowserLocation,
		setIsBrowserLocation,
		setLocation,
		browserLocation,
	} = useContext(LocationContext);

	const handleClick = () => {
		setLocation(browserLocation);
		setIsBrowserLocation(true);
	};

	return (
		<header
			id='header'
			className='px-2 mobile:px-4 sm:px-8 lg:px-16 pt-8 lg:pt-10 gap-x-2 sm:gap-x-5 lg:gap-x-10 gap-y-2 tab:gap-y-0'
		>
			<ThemeController />

			<Search />

			<button
				className='flex items-center justify-center bg-secondary text-primary-content text-sm sm:text-base px-1 sm:px-2 py-0.5 sm:py-1 rounded-3xl shadow-lg hover:shadow-xl shadow-primary transition duration-200'
				onClick={() => setIsCelsius(!isCelsius)}
			>
				<span
					className={`${
						isCelsius && 'bg-accent text-neutral-content'
					} rounded-full w-8 sm:w-10 py-1 transition-colors duration-200`}
				>
					&deg;C
				</span>
				<span
					className={`${
						!isCelsius && 'bg-accent text-neutral-content'
					} rounded-full w-8 sm:w-10 py-1 transition-colors duration-200`}
				>
					&deg;F
				</span>
			</button>

			<button
				className={`${
					!isBrowserLocation && !isLoading && 'bg-red-500'
				} col-start-2 row-start-1 tab:col-start-auto tab:row-start-auto w-fit justify-self-center py-0.5 sm:py-1 px-2.5 sm:px-4 flex items-center justify-center gap-x-1 sm:gap-x-2 bg-accent text-neutral-content text-sm sm:text-base font-bold rounded-3xl`}
				onClick={handleClick}
			>
				<CurrentLocation className='size-6 sm:size-7' />
				<span className='hidden mobile:block'>Current Location</span>
			</button>
		</header>
	);
};

export default Header;
