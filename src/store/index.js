
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { city } from './../reducers/city'

const initialState = { 
    city: 'Montevideo,uy'
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

export const store = createStore( city, initialState, composeEnhancers( applyMiddleware(thunk) ) )
// export const store = createStore( city, initialState, applyMiddleware(thunk) )