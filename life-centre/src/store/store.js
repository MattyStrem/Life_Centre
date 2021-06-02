import { combineReducers, configureStore } from '@reduxjs/toolkit';

import backgroundImageReducer from './backgroundImageSlice';
import weatherReducer from './weatherSlice';
import journalReducer from './journalSlice';

export default configureStore({
    reducer: combineReducers({
        backgroundImage: backgroundImageReducer,
        weather: weatherReducer,
        journal: journalReducer,
    })
})