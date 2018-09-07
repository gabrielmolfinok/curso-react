
import convert from 'convert-units';

const getWeatherState = weather => {
    return 'sunny';
}

const getTemp = kelvin => {
    return Number(convert(kelvin).from('K').to('C').toFixed(2));
}

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(this.weather);
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        wind: speed,
        weatherState,
    }

    return data;
}

export default transformWeather;