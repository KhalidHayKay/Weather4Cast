const HourForecastSkeleton = () => {
	return (
		<div className=' w-full h-full flex flex-col gap-y-5'>
			<div className='skeleton h-7 w-2/3 mx-auto bg-primary/30'></div>
			<div className='flex-1 px-5 sm:px-10 grid grid-cols-3 sm:grid-cols-5 gap-x-10'>
				<div className='skeleton w-full bg-primary/30'></div>
				<div className='skeleton w-full bg-primary/30'></div>
				<div className='skeleton w-full bg-primary/30'></div>
				<div className='skeleton w-full bg-primary/30 hidden sm:block'></div>
				<div className='skeleton w-full bg-primary/30 hidden sm:block'></div>
			</div>
		</div>
	);
};

export default HourForecastSkeleton;
