
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import ForecastItem from './ForecastItem'

import transformForecast from './../services/transformForecast'

// const days = [
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes'
// ]

// const data = {
//     temperature: 10,
//     humidity: 10,
//     weatherState: 'normal',
//     wind: '10m/s'
// }


const api_key = '9f9bf20d2777bf64d19e49f0563b03cf'
const url = `http://api.openweathermap.org/data/2.5/forecast`

export default class ForecastExtended extends Component {

    state = { forecastData: null }

    renderForecastItemDays(forecastData) {

        return forecastData.map( (forecast, i) => 
            <ForecastItem 
                weekDay={ forecast.weekDay }
                hour={ forecast.hour }
                data={ forecast.data }
                key={ i } />
        )

    } 

    renderProgress = () => <h3>Cargando pronostico extendido...</h3>

    componentDidMount = () => {

        const url_forecast = `${ url }?q=${ this.props.city }&appid=${ api_key }`
      
        axios( url_forecast )
            .then( res => this.setState({ forecastData: transformForecast(res.data) }) )
            .catch( err => console.log(err) )

    }    

    render() {

        const { city } = this.props
        const { forecastData } = this.state

        return (
            
            <div id="extended-forecast">
                <h2>{ city }</h2>
                { forecastData ?
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgress() }
            </div>

        )
    }

}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}