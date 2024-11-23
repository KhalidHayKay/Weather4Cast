import { format } from 'date-fns';

const Location = ({ data: { location } }) => {
	return (
		<>
			<h3 className='text-xl font-bold'>
				{location.name}, {location.country}
			</h3>
			<h2 className='text-6xl sm:text-7xl font-bold mt-10'>
				{format(location.localtime, 'HH:mm')}
			</h2>
			<p className='text-base'>{format(location.localtime, 'EEEE, d MMM')}</p>
		</>
	);
};

export default Location;
