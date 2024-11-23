import { useContext, useState } from 'react';
import SearchContext from '../../contexts/search/SearchContext';
import { ReactComponent as Icon } from '../../resources/Search_icon.svg';
import SearchResult from './SearchResult';
import { searchLocation } from '../../contexts/search/SearchAction';

const Search = () => {
	const [showTab, setShowTab] = useState(false);
	const { text, locationSearchMatches, dispatch } = useContext(SearchContext);

	const fetchMatches = async (searchValue) => {
		const matches = await searchLocation(searchValue);

		dispatch({ type: 'ADD_MATCHES', payload: matches });
	};

	const handleChange = (e) => {
		const inputValue = e.target.value;
		dispatch({ type: 'SET_TEXT', payload: inputValue });

		if (inputValue.trim() !== '') {
			fetchMatches(inputValue);
		}

		if (inputValue === '') {
			dispatch({ type: 'REMOVE_MATCHES', payload: [] });
		}
	};

	return (
		<form
			action='/'
			className='relative row-start-2 tab:row-start-auto col-span-3 tab:col-span-1 w-full sm:w-3/4 tab:w-full justify-self-center pl-10 mobile:pl-14 rounded-3xl bg-secondary text-primary-content shadow-md shadow-primary/50 border border-primary'
		>
			<Icon className='absolute top-1/2 left-3 mobile:left-4 -translate-y-1/2 size-5 mobile:size-6 sm:size-7' />
			<input
				type='text'
				name='search'
				className=' w-full py-1.5 sm:py-2 pr-5 bg-transparent text-primary-content placeholder:text-primary-content/60 placeholder:text-sm mobile:placeholder:text-base outline-none'
				placeholder='Search for your preffered city...'
				value={text}
				onFocus={() => setShowTab(true)}
				onBlur={() => setShowTab(false)}
				onChange={handleChange}
			/>
			<SearchResult results={locationSearchMatches} showTab={showTab} />
		</form>
	);
};

export default Search;
