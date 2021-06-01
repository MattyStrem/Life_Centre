import React, { useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';

import { getBackgroundImage, selectBackgroundImage } from '../../store/backgroundImageSlice'

import '../../css/backgroundImage.css'

const Background = (props) => {
    
    const { imageUrls, currentImageUrlIndex } = useSelector(selectBackgroundImage);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBackgroundImage())
    },[dispatch])   

    
    
    return (
        <div id='background-image-container'>
            <img src={imageUrls[currentImageUrlIndex]} alt="" id="background-image" />
        </div>
    )
}

export default Background;