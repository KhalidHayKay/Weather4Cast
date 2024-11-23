import { format } from 'date-fns';

const DayForecast = ({
	data: {
		forecast: { days },
	},
	isCelsius,
}) => {
	const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

	return (
		<>
			<h2 className='text-center text-xl sm:text-2xl font-bold mb-0.5'>
				5 Days Forecast:
			</h2>
			<div className='flex flex-col'>
				{days.slice(1, -1).map((day) => (
					<div
						className='grid grid-cols-[0.3fr,0.7fr,1fr] items-center'
						key={day.datetime}
					>
						<div className='size-10'>
							<img
								src={`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`}
								alt='icon'
								className='w-full'
							/>
						</div>
						<p className='text-base font-semibold justify-self-center'>
							{isCelsius
								? `${Math.round(day.temp)}°C`
								: `${celsiusToFahrenheit(day.temp).toFixed(1)}°F`}
						</p>
						<p className='text-sm font-semibold justify-self-center'>
							{format(day.datetime, 'EEE, d MMM')}
						</p>
					</div>
				))}
			</div>
		</>
	);
};

export default DayForecast;
