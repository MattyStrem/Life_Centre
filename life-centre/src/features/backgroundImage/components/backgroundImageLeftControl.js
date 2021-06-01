import React from 'react';
import { useDispatch } from 'react-redux';

import {switchToPreviousBackgroundImage} from '../../../store/backgroundImageSlice.js';

const backgroundImageLeftControl = () => {
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

export default backgroundImageLeftControl;