import { combineReducers } from 'redux';

import weatherReducer from './weatherReducer';
import navigationReducer from './navigationReducer';

const reducers = combineReducers({
    weather: weatherReducer,
    navigation: navigationReducer
});

export default reducers;