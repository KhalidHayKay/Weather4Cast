const searchReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return {
                ...state,
                text: action.payload,
            };
        case 'CLEAR_TEXT':
            return {
                ...state,
                text: '',
            };
        case 'ADD_MATCHES':
            return {
                ...state,
                locationSearchMatches: action.payload,
            };
        case 'REMOVE_MATCHES':
            return {
                ...state,
                locationSearchMatches: [],
            };
        default:
            return state;
    }
}

export default searchReducer;