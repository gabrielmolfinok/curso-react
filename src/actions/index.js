
import axios from 'axios'

export const SET_CITY = 'SET_CITY'

export const setCity = payload => ({ type: SET_CITY, payload })

const api_key = '9f9bf20d2777bf64d19e49f0563b03cf'
const url = 'http://api.openweathermap.org/data/2.5/forecast'

export const fetchForecast = payload => {

    return dispatch => {

        const url_forecast = `${ url }?q=${ city }&appid=${ api_key }`
      
        axios( url_forecast )
            .then( res => {

                const forecastData = transformForecast(res.data)


            } )
            .catch( err => console.log(err) )

        return

    }

}