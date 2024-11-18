import { format } from 'date-fns';

const Location = ({ data: { location }, timestamp }) => {
	console.log(location, new Date(location.localtime_epoch * 1000).getMinutes());
	return (
		<>
			<h3 className='text-xl font-bold'>
				{location.region}, {location.country}
			</h3>
			<h2 className='text-6xl sm:text-7xl font-bold mt-10'>
				{format(timestamp, 'HH:mm')}
			</h2>
			<p className='text-base'>{format(timestamp, 'EEEE, d MMM')}</p>
		</>
	);
};

export default Location;
