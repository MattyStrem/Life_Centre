import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getWeather , selectWeather } from "../../store/weatherSlice";

const Weather = () => {
    const { metadata, temperature, city, state } = useSelector(selectWeather);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWeather({ city, state}));
    }, [dispatch, city, state]);

    return (
        <div className="weather">
            <div className="temperature-container">
                <image 
                    src={`http://openweathermap.org/img/wn/${metadata.icon}@2x.png`}
                    alt=""
                />
                <div className="weather-text">
                    <p className="temperature">{temperature}°</p>
                    <p className="weather-description">{metadata.desctiption}</p>
                </div>
            </div>
        </div>
    )
};

export default Weather;