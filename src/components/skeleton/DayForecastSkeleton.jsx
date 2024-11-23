const DayForecastSkeleton = () => {
	return (
		<div className='h-full flex flex-col items-center justify-evenly'>
			<div className='skeleton h-10 w-[80%] mb-3 bg-primary/30'></div>

			<div className=' w-full flex flex-col items-center gap-y-2'>
				<div className='skeleton h-5 w-[80%] bg-primary/30'></div>
				<div className='skeleton h-5 w-[80%] bg-primary/30'></div>
				<div className='skeleton h-5 w-[80%] bg-primary/30'></div>
				<div className='skeleton h-5 w-[80%] bg-primary/30'></div>
				<div className='skeleton h-5 w-[80%] bg-primary/30'></div>
			</div>
		</div>
	);
};

export default DayForecastSkeleton;
