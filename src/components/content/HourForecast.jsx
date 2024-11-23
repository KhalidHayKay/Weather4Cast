import HourForecastItems from './HourForecastItems';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';

const HourForecast = ({
	data: {
		location,
		forecast: { hours },
	},
}) => {
	const formatHours = (hourArr, currentTimeVariable) => {
		const currentHour = new Date(currentTimeVariable).getHours();
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

	const [screenWidth, setScreenWidth] = useState(
		document.documentElement.clientWidth
	);

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(document.documentElement.clientWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			<h2 className='text-center text-xl sm:text-2xl font-bold mb-2'>
				Hourly Forecast:
			</h2>
			<div
				className={`${
					screenWidth >= 450 ? 'grid-cols-5' : 'grid-cols-1 h-[85%]'
				} grid justify-items-center`}
			>
				{screenWidth >= 450 ? (
					formatHours(hours, location.localtime).map((hour, index) => (
						<HourForecastItems hour={hour} key={index} />
					))
				) : (
					<Swiper
						spaceBetween={5}
						slidesPerView={3}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
					>
						{formatHours(hours, location.localtime).map((hour, index) => (
							<SwiperSlide key={index}>
								<HourForecastItems hour={hour} />
							</SwiperSlide>
						))}
					</Swiper>
				)}
			</div>
		</>
	);
};

export default HourForecast;
