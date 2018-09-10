import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import { 
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from '../../../constants/weathers';

const icons = {

    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [THUNDER]: "day-thunderstore",
    [DRIZZLE]: "day-showers"

};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState]
    const iconSize = "2x";

    if (icon)        
        return <WeatherIcons className="wicon" name={icon} size={iconSize} />
    else
        return <WeatherIcons className="wicon" name={"day-sunny"} size={iconSize} />
    
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