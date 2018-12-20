
import React from 'react'
import PropTypes from 'prop-types'
import WeatherData from '../WeatherLocation/WeatherData'


export default function ForecastItem({ weekDay, hour, data }) {

    return (
        
        <article>
            <div>{ weekDay } Hora: { hour } hs.</div>
            <WeatherData data={data} />
        </article>
        
    )

}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired
}