import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from '../../../constants/weathers';

const stateToIconName = weatherState => {

    switch (weatherState) {

        case CLOUD:
            return "cloud";

        case CLOUDY:
            return "cloudy";
        
        case SUN:
            return "sun";

        case RAIN:
            return "rain";

        case SNOW:
            return "snow";

        case WINDY:
            return "windy";
    
        default:
            return "day-sunny";

    }

};

const getWeatherIcon = weatherState => {
    return (<WeatherIcons name={stateToIconName(weatherState)} size="2x" />);
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    
    <div>
        {getWeatherIcon(weatherState)}
        <h3>{`${temperature}ºC`}</h3> 
    </div>

);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
}


export default WeatherTemperature;