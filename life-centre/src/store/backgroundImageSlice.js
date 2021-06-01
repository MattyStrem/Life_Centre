import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';

import unsplashApi from '../api/unsplash';

const initialState = {
    backgroundImages: ['https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                  'https://images.unsplash.com/photo-1506501139174-099022df5260?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
],
    error: false,
    isLoading: false
}

export const getBackgroundImage = createAsyncThunk(
    "backgroundImage/getImage",
    unsplashApi.getImage
)

const backgroundImageSlice = createSlice({
    name: 'backgroundImage',
    initialState: {
        imageUrls: [],
        currentImageUrlIndex: 0,
    },
    reducers: {
        switchToNextBackgroundImage: (state) => {
            state.currentImageUrlIndex = 
                (state.currentImageUrlIndex + 1)
        },

        switchToPreviousBackgroundImage: ( state ) => {
            let newIndex = state.currentImageUrlIndex - 1;
            if ( newIndex < 0 ) {
                newIndex = state.imageUrls.length - 1;
            };

            state.currentImageUrlIndex = newIndex;
        },


    },
    extraReducers: {
        [getBackgroundImage.fulfilled]: (state, action) => {
            state.imageUrls = action.payload;
            state.currentImageUrlIndex = 0;
        }
    }
});

export const {
    switchToNextBackgroundImage,
    switchToPreviousBackgroundImage,
} = backgroundImageSlice.actions;

export const selectBackgroundImage = (state) => state.backgroundImage;

export default backgroundImageSlice.reducer;