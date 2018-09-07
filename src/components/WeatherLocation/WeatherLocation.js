import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from '../Location';
import WeatherData from './WeatherData/WeatherData';
import transformWeather from '../../services/transformWeather';

// API Key: 9f9bf20d2777bf64d19e49f0563b03cf

const api_key = '9f9bf20d2777bf64d19e49f0563b03cf';


export default class WeatherLocation extends Component {

    constructor({ city }) {
        super();
        this.state = {
            city,
            data: null
        }
    }

    handleUpdateClick = e => {
        
        const city = this.state.city;
        const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

        fetch(api_weather)
            .then(data => {
                return data.json()
            })
            .then(weather_data => {
                const data = transformWeather(weather_data);
                this.setState({ data });
            });

    }
    
    componentWillMount() {
        this.handleUpdateClick();
    }
        

    render() {

        const { city, data } = this.state;
    
        return(

            <article>
            
                <Location city={city} />
                { data ? <WeatherData data={data} /> : <CircularProgress size={60} thickness={5} /> }
            
            </article>
            
        )
    
    }

}

WeatherLocation.propTypes = {
    city: PropTypes.string
}