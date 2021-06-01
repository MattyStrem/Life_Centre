import React from 'react';
import { useDispatch } from 'react-redux';

import {switchToNextBackgroundImage} from '../../../store/backgroundImageSlice.js';

const BackgroundImageRightControl = () => {
    const dispatch = useDispatch();

    return (
        <button
            aria-label="witch to previous wall paper"
            onClick={() => {
                dispatch(switchToNextBackgroundImage());
            }}
            >
            {">"}
        </button>
    )
}

export default BackgroundImageRightControl;