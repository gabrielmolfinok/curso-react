
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ForecastItem from './ForecastItem'

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
]

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: '10m/s'
}

export default class ForecastExtended extends Component {

    renderForecastItemDays = () => days.map( (day, i) => <ForecastItem weekDay={ day } hour={10} data={data} key={ i } /> )

    render() {

        const { city } = this.props

        return (
            
            <div id="extended-forecast">
                <h2>{ city }</h2>
                { this.renderForecastItemDays() }
            </div>

        )
    }

}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}