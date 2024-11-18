import { ReactComponent as Search } from '../../resources/Search.svg';
import { ReactComponent as CurrentLocation } from '../../resources/CurrentLocation.svg';
import ThemeController from './ThemeController';
import { useContext, useState } from 'react';
import UnitContext from '../../contexts/Unit/UnitContext';

const Header = () => {
	const { isCelsius, setIsCelsius } = useContext(UnitContext);

	return (
		<header
			id='header'
			className='px-4 sm:px-8 lg:px-16 pt-8 lg:pt-10 gap-x-2 sm:gap-x-5 lg:gap-x-10 gap-y-2 tab:gap-y-0'
		>
			<ThemeController />

			<form
				action='/'
				className='relative row-start-2 tab:row-start-auto col-span-3 tab:col-span-1 w-full sm:w-3/4 tab:w-full pl-10 mobile:pl-14 mx-0 mx-auto rounded-3xl bg-secondary text-white shadow-md shadow-primary/50 border border-primary overflow-hidden'
			>
				<Search className='absolute top-1/2 left-3 mobile:left-4 -translate-y-1/2 size-5 mobile:size-6 sm:size-7' />
				<input
					type='text'
					name='search'
					className=' w-full py-1.5 sm:py-2 pr-5 bg-transparent text-primary-content placeholder:text-sm mobile:placeholder:text-base outline-none'
					placeholder='Search for your preffered city...'
				/>
			</form>

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

			<button className='col-start-2 row-start-1 tab:col-start-auto tab:row-start-auto w-fit justify-self-center py-0.5 sm:py-1 px-2.5 sm:px-4 flex items-center justify-center gap-x-1 sm:gap-x-2 bg-accent text-neutral-content text-sm sm:text-base font-bold rounded-3xl'>
				<CurrentLocation className='size-6 sm:size-7' />
				<span className='hidden mobile:block'>Current Location</span>
			</button>
		</header>
	);
};

export default Header;
