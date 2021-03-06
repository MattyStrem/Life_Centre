import React from 'react';
import { useDispatch } from 'react-redux';

import {switchToPreviousBackgroundImage} from '../../../store/backgroundImageSlice.js';

const BackgroundImageLeftControl = () => {
    const dispatch = useDispatch();

    return (
        <button
            aria-label="witch to previous wall paper"
            onClick={() => {
                dispatch(switchToPreviousBackgroundImage());
            }}
            >
            {"<"}
        </button>
    )
}

export default BackgroundImageLeftControl;