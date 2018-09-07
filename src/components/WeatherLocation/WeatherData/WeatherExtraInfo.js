import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({ humidity, wind }) => (

    <div>
        <p>{`Humedad: ${humidity}%`}</p>
        <p>{`Vientos: ${wind} m/s`}</p>
    </div>

);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
};

export default WeatherExtraInfo;