import { combineReducers, configureStore } from '@reduxjs/toolkit';

import backgroundReducer from './backgroundSlice'

export default configureStore({
    reducer: combineReducers({
        background: backgroundReducer,
    })
})