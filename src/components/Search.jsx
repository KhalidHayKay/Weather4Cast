import { useContext, useState } from "react";
import { animate, delay, motion } from "framer-motion";
import { searchLocation } from "../contexts/search/SearchAction";
import SearchContext from "../contexts/search/SearchContext";
import LocationResults from "./search/LocationResults";

const Search = ({clickState: {searchIsClicked, setSearchIsClicked}}) => {
    const {dispatch, text, locationSearchMatches} = useContext(SearchContext);

    const handleChange = (e) => {
        const inputValue = e.target.value;

        dispatch({type: 'SET_TEXT', payload: inputValue});

        const getMatches = async () => {
            if (inputValue !== '') {   
                const matches = await searchLocation(inputValue);
                dispatch({
                    type: 'ADD_MATCHES', 
                    payload: Array.isArray(matches) ? matches : [matches]}
                )
            }
        }

        getMatches();
    }

    const handleTextClear = () => {
        dispatch({type: 'CLEAR_TEXT'});
        dispatch({type: 'REMOVE_MATCHES'});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return ( 
        <motion.form
            layout='size'
            animate={{width: searchIsClicked ? '100%' : 'fit-content'}}
            transition={{ duration: 0.4}}

            onClick={() => setSearchIsClicked(true)}
            onSubmit={handleSubmit} 
            className={`relative md:w-[400px] flex items-center bg-secondary rounded-xl md:rounded-3xl px-2 py-1 text-primary-content`}
        >
            <motion.button 
                className="cursor-pointer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </motion.button>
            <motion.input
                animate={{display: searchIsClicked ? 'block' : 'none'}}
                transition={{duration: 0.4}}

                onChange={handleChange}
                value={text} 
                className="hidden sm:block flex-1 bg-transparent outline-none px-2 text-sm placeholder:text-sm placeholder:text-primary-content placeholder:text-opacity-50" 
                type="text" name="location" 
                placeholder="Search city by name" 
            />
            <motion.button type="button" 
                animate={{display: searchIsClicked ? 'block' : 'none'}}
                transition={{duration: 0.4}}

                onClick={() => {
                    handleTextClear();
                    setSearchIsClicked(false);
                }}
                className="hidden sm:block opacity-100 hover:text-accent cursor-pointer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </motion.button>

            {locationSearchMatches.length > 0 && <LocationResults  />}
        </motion.form>
    );
}
 
export default Search;