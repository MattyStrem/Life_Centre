import { combineReducers, configureStore } from '@reduxjs/toolkit';

import backgroundImageReducer from './backgroundImageSlice';
import weatherReducer from './weatherSlice';

export default configureStore({
    reducer: combineReducers({
        backgroundImage: backgroundImageReducer,
        weather: weatherReducer,
    })
})