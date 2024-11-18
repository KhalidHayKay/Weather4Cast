import { ReactComponent as Navigator } from '../../resources/Navigation.svg';
import { format } from 'date-fns';

const HourForecast = ({
	data: {
		location,
		forecast: { hours },
	},
	isCelsius,
}) => {
	const formatHours = (hourArr, currentTS) => {
		const currentHour = new Date(currentTS).getHours();
		let fiveHourForecast = [];

		const threeIntervalHours = hourArr.filter(
			(_, index) => index % 3 === 0 && index > currentHour
		);

		if (threeIntervalHours.length >= 5) {
			fiveHourForecast = threeIntervalHours.slice(0, 5);
		} else {
			fiveHourForecast = hours.slice(currentHour + 1, currentHour + 6);

			while (fiveHourForecast.length < 5) {
				fiveHourForecast.push(null);
			}
		}

		return fiveHourForecast;
	};

	const currentTimestamp = location.localtime_epoch * 1000;

	return (
		<>
			<h2 className='text-center text-xl sm:text-2xl font-bold mb-2'>
				Hourly Forecast:
			</h2>
			<div className='grid grid-cols-5 justify-items-center'>
				{formatHours(hours, currentTimestamp).map((hour) =>
					hour ? (
						<div
							className='bg-primary/40 px-1 py-3 sm:p-3 w-fit flex flex-col items-center rounded-3xl'
							key={hour.time_epoch}
						>
							<h3 className='sm:text-lg font-semibold -mb-2.5'>
								{format(hour.time_epoch * 1000, 'HH:mm')}
							</h3>
							<div className='relative size-16'>
								<img
									src={hour.condition.icon}
									alt='icon'
									className='absolute size-full'
								/>
							</div>
							<p className='text-sm sm:font-base font-semibold -mt-2.5'>
								{isCelsius
									? `${Math.round(hour.temp_c)}°C`
									: `${Math.round(hour.temp_f)}°F`}
							</p>
							<Navigator
								className='size-8 mt-2'
								style={{ transform: `rotate(${hour.wind_degree}deg)` }}
							/>
							<p className='text-xsm sm:text-sm font-semibold mt-2'>
								{Math.round(hour.wind_kph)}km/h
							</p>
						</div>
					) : (
						<div
							className='bg-primary/50 p-3 min-w-[85px] w-fit flex flex-col items-center rounded-3xl justify-center gap-y-1'
							key={Math.random()}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
								className='size-5'
							>
								<path
									fillRule='evenodd'
									d='M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
									clipRule='evenodd'
								/>
							</svg>
							<p className='text-sm'>end</p>
						</div>
					)
				)}
			</div>
		</>
	);
};

export default HourForecast;
