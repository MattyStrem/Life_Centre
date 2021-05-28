import { createSlice, createSelector } from '@reduxjs/toolkit';

import unsplashApi from '../api/unsplash';

const initialState = {
    backgroundImages: ['https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                  'https://images.unsplash.com/photo-1506501139174-099022df5260?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
],
    error: false,
    isLoading: false
}

const backgroundImageSlice = createSlice({
    name: 'backgroundImage',
    initialState: {
        imageUrls: [],
        currentImageUrlIndex: 0,
    },
    reducers: {

    }
});

export const selectBackgroundImage = (state) => state.imageUrls[currentImageUrlIndex];

export default backgroundImageSlice.reducer;