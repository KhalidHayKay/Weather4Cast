import { useContext } from "react";
import SearchContext from "../../contexts/search/SearchContext";
import LocationContext from "../../contexts/location/LocationContext";

const LocationResults = () => {
    const { dispatch, locationSearchMatches } = useContext(SearchContext);
    const { setIsBrowser, setLocation } = useContext(LocationContext);

    const handleClick = (location) => {
        const getTimeAndSetLocation = async () => {
            setLocation({latitude: location.lat, longitude: location.lon});
            setIsBrowser(false);

            dispatch({type: 'CLEAR_TEXT'});
            dispatch({type: 'REMOVE_MATCHES'});
        }
        
        getTimeAndSetLocation();
    }

    return ( 
        <div id="suggestions-container" className="absolute top-10 left-0 z-50 w-full h-fit max-h-[300px] text-sm bg-secondary shadow-sm shadow-primary rounded-2xl py-4 overflow-auto">
            { locationSearchMatches.map(item => {
                if (item.country === 'United States of America') {
                    item.country = 'USA';
                }

                return (
                    <div onClick={() => handleClick(item)} key={item.id} className="flex items-center gap-x-2 hover:bg-primary py-1 px-5 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <div className="">{`${item.name}, ${item.country}`}</div>
                    </div>
                )
            }) }
        </div>
    );
}
 
export default LocationResults;