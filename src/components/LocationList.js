import React from 'react';
import WeatherLocation from './WeatherLocation/WeatherLocation';

const LocationList = () => (

    <div>
        <WeatherLocation city={'Montevideo,uy'} />
        <WeatherLocation city={'Buenos Aires,ar'} />
        <WeatherLocation city={'Bogotá,col'} />
    </div>

)

export default LocationList;