import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';

class App extends Component {
    render() {
        return ( 

            <MuiThemeProvider>
                <div align="center" id="locations">
                    <LocationList /> 
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;