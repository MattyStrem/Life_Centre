import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import { selectBackgroundImage } from '../../store/backgroundImageSlice'

import '../../css/backgroundImage.css'

const Background = (props) => {
    const backgroundImage = useSelector(selectBackgroundImage);

    const currentBackground = backgroundImage.backgroundImages[0];

    const toggleBackground = () =>{

    }
    
    return (
        <div id='background-image-container'>
            <img src={currentBackground} alt="" id="background-image" />
        </div>
    )
}

export default Background;