import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';

const cities = [
    "Montevideo,uy",
    "Buenos Aires,ar",
    "Bogota,col"
];

class App extends Component {
    render() {
        return ( 

            <MuiThemeProvider>
                <div align="center" id="locations">
                    <LocationList cities={cities} /> 
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;