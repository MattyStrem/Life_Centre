import { combineReducers, configureStore } from '@reduxjs/toolkit';

import backgroundImageReducer from './backgroundImageSlice'

export default configureStore({
    reducer: combineReducers({
        backgroundImage: backgroundImageReducer,
    })
})