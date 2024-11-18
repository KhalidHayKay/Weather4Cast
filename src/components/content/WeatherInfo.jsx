import { ReactComponent as Sunrise } from '../../resources/Sunrise_white.svg';
import { ReactComponent as Sunset } from '../../resources/Sunset_white.svg';
import { ReactComponent as Wind } from '../../resources/Wind_white.svg';
import { ReactComponent as Humidity } from '../../resources/Humidity_white.svg';
import { ReactComponent as Pressure } from '../../resources/Pressure_white.svg';
import { ReactComponent as UV } from '../../resources/UV_white.svg';

const WeatherInfo = ({ data: { current }, isCelsius }) => {
	return (
		<>
			<div className='flex flex-col items-center justify-between'>
				<div className='flex flex-col items-center'>
					<h2 className='text-4xl mobile:text-5xl sm:text-6xl font-semibold relative after:absolute after:top-0 after:right-0 after:h-14 after:w-24 after:rounded-l-3xl after:bg-secondary/15'>
						{isCelsius
							? `${Math.round(current.weather.temp_c)}°C`
							: `${Math.round(current.weather.temp_f)}°F`}
					</h2>
					<h3 className='text-xsm mobile:text-lg sm:text-xl font-semibold'>
						<span className='text-xsm mobile:text-sm sm:text-base font-normal'>
							Feels like:{' '}
						</span>
						{isCelsius
							? `${Math.round(current.weather.feelslike_c)}°C`
							: `${Math.round(current.weather.feelslike_f)}°F`}
					</h3>
				</div>
				<div className='flex flex-col gap-y-1'>
					<div className='flex items-center gap-x-1'>
						<Sunrise className='size-6 mobile:size-7 sm:size-8' />
						<div className='flex flex-col'>
							<p className='text-sm sm:text-base font-semibold'>Sunrise</p>
							<p className='text-xsm sm:text-sm'>{current.astro.sunrise}</p>
						</div>
					</div>
					<div className='flex items-center gap-x-1'>
						<Sunset className='size-6 mobile:size-7 sm:size-8' />
						<div className='flex flex-col'>
							<p className='text-sm sm:text-base font-semibold'>Sunset</p>
							<p className='text-xsm sm:text-sm'>{current.astro.sunset}</p>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col items-center'>
				<div className='relative w-28 h-24 mobile:w-40 sm:size-full flex-1'>
					<img
						src={current.weather.condition.icon}
						alt='condition-icon'
						className='absolute -top-8 size-full'
					/>
				</div>
				<h3 className='text-lg mobile:text-2xl font-semibold'>
					{current.weather.condition.text}
				</h3>
			</div>
			<div className='grid grid-cols-2'>
				<div className='flex flex-col items-center'>
					<Humidity className='size-6 mobile:size-9 sm:size-11' />
					<p className='text-[0.7rem] mobile:text-sm sm:text-base font-semibold mt-0.5'>
						{Math.round(current.weather.humidity)}%
					</p>
					<p className='text-[0.65rem] mobile:text-xsm sm:text-sm mobile:mt-2'>
						Humidity
					</p>
				</div>
				<div className='flex flex-col items-center'>
					<Wind className='size-6 mobile:size-9 sm:size-11' />
					<p className='text-[0.7rem] mobile:text-sm sm:text-base font-semibold mt-0.5'>
						{Math.round(current.weather.wind_kph)}km/h
					</p>
					<p className='text-[0.65rem] mobile:text-xsm sm:text-sm mobile:mt-2'>
						Wind
					</p>
				</div>
				<div className='flex flex-col items-center self-end'>
					<Pressure className='size-6 mobile:size-9 sm:size-11' />
					<p className='text-[0.7rem] mobile:text-sm sm:text-base font-semibold mt-0.5'>
						{Math.round(current.weather.pressure_in / 29.92)}atm
					</p>
					<p className='text-[0.65rem] mobile:text-xsm sm:text-sm mobile:mt-2'>
						Pressure
					</p>
				</div>
				<div className='flex flex-col items-center self-end'>
					<UV className='size-6 mobile:size-9 sm:size-11' />
					<p className='text-[0.7rem] mobile:text-sm sm:text-base font-semibold mt-0.5'>
						{Math.round(current.weather.uv)}
					</p>
					<p className='text-[0.65rem] mobile:text-xsm sm:text-sm mobile:mt-2'>UV</p>
				</div>
			</div>
		</>
	);
};

export default WeatherInfo;
