import { createContext, useReducer } from "react";
import searchReducer from "./SearchReducer";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const initState = {
        text: '',
        locationSearchMatches: [],
    };

    const [state, dispatch] = useReducer(searchReducer, initState);

    return <SearchContext.Provider 
        value={{
            ...state,
            dispatch,
        }}
    >
        {children}
    </SearchContext.Provider>
}

export default SearchContext;