import  { 
    CHANGE_LIMIT,
    FETCH_DATA_SUCCESS,
    FETCH_DATA,
    FETCH_DATA_FAILURE,
}  from '../actions/weatherActions';

const initialState = {
    limit: 5,
    forecasts: [],
    city: "",
    current: {},
    isLoading: false,
    error: null,
}



const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LIMIT:
            return {
                ...state,
                limit: action.limit,
            };

        case FETCH_DATA:
            return {
                ...state,
                isLoading: true,
            };

        case FETCH_DATA_SUCCESS:
            const city = action.data.data.data.city.name;
            const current = action.data.data.data.current;
            const forecasts = action.data.data.data.forecast;
            return {
                ...state,
                isLoading: false,
                city,
                current,
                forecasts,
            };

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
    
        default:
            return state;
    }
};

export default weatherReducer;