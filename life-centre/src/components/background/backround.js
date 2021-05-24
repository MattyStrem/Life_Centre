import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import { selectBackground } from '../../store/backgroundSlice'

import '../../css/background.css'

const Background = (props) => {
    const background = useSelector(selectBackground);

    const currentBackground = background.backgrounds[1];

    const toggleBackground = () =>{

    }
    
    return (
        <div 
            className="background-container"
            style={{
                backgroundImage: `url(${currentBackground})`
            }}
             >
            <button></button>
                 {props.children}
            <button></button>
        </div>
    )
}

export default Background;