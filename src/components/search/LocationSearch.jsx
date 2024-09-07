import { useContext } from 'react';
import SearchContext from '../../contexts/search/SearchContext';
import LocationResults from './LocationResults';
import { formatLocation, getWeather, searchLocation } from '../../contexts/search/SearchAction';

const LocationSearch = () => {
    const {dispatch, locationSearchMatches, text} = useContext(SearchContext);

    navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            // console.log(first)
        },
        // (err) => {
        //     setError('Unable to retrieve your location');
        // }
    );

    const handleTextChange = (e) => {
        dispatch({type: 'SET_TEXT', payload: e.target.value});

        if (text !== '') {
            searchLocation(e.target.value).then(
                places => dispatch({type: 'ADD_MATCHES', payload: places})
            );
        }
    }

    const clearText = () => {
        dispatch({type: 'CLEAR_TEXT'});
        dispatch({type: 'REMOVE_MATCHES'});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (locationSearchMatches.length < 1) {
            console.log('Cannot find place');
        } else {
            const location = locationSearchMatches[0];

            dispatch({type: 'SET_TEXT', payload: formatLocation(location)['place']});
            dispatch({type: 'REMOVE_MATCHES'});
            getWeather(location.lat, location.lon);
        }
    }

    return (
        <div className='relative'>
            <div className="navbar">
                <form onSubmit={handleSubmit} className="flex items-center w-full rounded-3xl text-base-content focus:bg-slate-100">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mx-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                    <input onChange={handleTextChange} value={text} type="text" name="places" id="places" className="bg-transparent w-full p-1.5 outline-none text-base-content text-sm text-[0.8rem] placeholder:text-base-content placeholder:text-[0.8rem]" placeholder="Search for places..." />
                </form>
                <div onClick={clearText} className="bg-secondary w-9 h-8 rounded-full flex items-center justify-center cursor-pointer text-base-content">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>

            {(! locationSearchMatches.length < 1) && <LocationResults />}
        </div>
    );
}
 
export default LocationSearch;