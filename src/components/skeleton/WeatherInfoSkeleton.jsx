const WeatherInfoSkeleton = () => {
	return (
		<>
			<div className='flex flex-col gap-y-2'>
				<div className='skeleton h-1/2 bg-primary/30'></div>
				<div className='skeleton h-1/4 bg-primary/30'></div>
				<div className='skeleton h-1/4 bg-primary/30'></div>
			</div>
			<div className='flex flex-col gap-y-10 mx-5'>
				<div className='skeleton rounded-full size-full bg-primary/30'></div>
				<div className='skeleton h-10 bg-primary/30'></div>
			</div>
			<div className='grid grid-cols-2 gap-5 sm:pr-5 lg:pr-0'>
				<div className='skeleton size- bg-primary/30'></div>
				<div className='skeleton size- bg-primary/30'></div>
				<div className='skeleton size- bg-primary/30'></div>
				<div className='skeleton size- bg-primary/30'></div>
			</div>
		</>
	);
};

export default WeatherInfoSkeleton;
