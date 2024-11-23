import { useContext } from 'react';
import { ReactComponent as Icon } from '../../resources/Search_icon.svg';
import SearchContext from '../../contexts/search/SearchContext';
import LocationContext from '../../contexts/location/LocationContext';

const SearchResult = ({ results, showTab }) => {
	const { setIsBrowserLocation, setLocation } = useContext(LocationContext);
	const { dispatch } = useContext(SearchContext);

	const handleClick = (latitude, longitude) => {
		setLocation({ latitude, longitude });
		dispatch({ type: 'REMOVE_MATCHES', payload: [] });
		dispatch({ type: 'SET_TEXT', payload: '' });
		setIsBrowserLocation(false);
	};

	return (
		<div
			className={`${
				showTab || results.length >= 1 ? 'grid' : 'hidden'
			} absolute top-12 left-0 h-fit max-h-[500px] w-full py-2 bg-secondary shadow shadow-primary rounded-lg z-30`}
		>
			{results.length >= 1 && (
				<div className='max-h-[250px] mb-2 border-b border-primary relative after:absolute after:bottom-0 after:h-5 after:w-full after:bg-secondary/95'>
					<h2 className='text-sm sm:text-base font-semibold mb-2 ml-4'>
						Matching result
					</h2>
					<div className='text-sm sm:text-base flex flex-col gap-y-1 pb-5 overflow-auto max-h-[215px] custom-scrollbar'>
						{results.map((item) => (
							<div
								className='flex items-center gap-x-3 hover:bg-primary/40 transition-colors px-3 sm:px-7 py-2 cursor-pointer'
								key={item.id}
								onClick={() => handleClick(item.lat, item.lon)}
							>
								<Icon className='size-6' />
								<p className=''>
									{item.name}, {item.region}. {item.country}.
								</p>
							</div>
						))}
					</div>
				</div>
			)}

			<div className=''>
				<h2 className='text-sm sm:text-base font-semibold ml-5'>
					Other big Cities
				</h2>
				<div className='text-sm sm:text-base flex flex-col items-center justify-center py-5'>
					coming soon....
				</div>
			</div>
		</div>
	);
};

export default SearchResult;
