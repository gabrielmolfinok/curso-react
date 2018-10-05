import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';

const cities = [
    "Montevideo,uy",
    "Buenos Aires,ar"
];

class App extends Component {

    handleSelectedLocation = city => {
        console.log(`handleSelectedLocation ${city}`)
    }

    render() {
        return ( 

            <MuiThemeProvider>
                <Grid fluid>
                    <Row>
                        <Col xs={12} sm={6} md={4}>
                            <div className="red"></div>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <div className="green"></div>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <div className="blue"></div>
                        </Col>
                    </Row>
                </Grid>
                {/* <div id="locations">
                    <LocationList
                        cities={cities}
                        onSelectedLocation={this.handleSelectedLocation} /> 
                </div> */}
            </MuiThemeProvider>
        );
    }
}

export default App;