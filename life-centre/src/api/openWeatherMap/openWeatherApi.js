const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}&units=metric`;

export const getWeather = async( city , state ) => {
    const response = await fetch(`${API_URL}&q=${city},${state}`);
    const json = await response.json();

    return {
        weatherMetadata: json.weather[0],
        temperature: json.main.temp,
    }
}

const weatherAPI = { getWeather }

export default weatherAPI;
