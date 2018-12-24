
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ForecastItem from './ForecastItem'

import transformForecast from './../services/transformForecast'


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

    componentDidUpdate = prevProps => {
      
        if (prevProps.city !== this.props.city) {

            // Limpiamos el STATE para que aparezca el 'Loading...'
            this.setState({ forecastData: null })

            return this.updateCity( this.props.city )

        }
            
        return

    }
    

    componentDidMount = () => this.updateCity( this.props.city )

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