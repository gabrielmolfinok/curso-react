import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation/WeatherLocation';

const strToComponent = cities => (
    cities.map( (city, i) => <WeatherLocation city={city.name} key={i} /> )
)

const LocationList = ({ cities }) => (

    <div>
        {strToComponent(cities)}
    </div>

)

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;