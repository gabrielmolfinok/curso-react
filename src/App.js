
import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'

import { Grid, Row, Col } from 'react-flexbox-grid'

import ForecastExtended from './components/ForecastExtended'
import LocationList from './components/LocationList'

const cities = [
    "Montevideo,uy",
    "Buenos Aires,ar"
]

class App extends Component {

    state = { city: '' }

    handleSelectedLocation = city => this.setState({ city })

    render() {
        return ( 

            <MuiThemeProvider>
                <Grid fluid>
                    <Row>
                        <AppBar position="sticky">
                            <Toolbar>
                                <Typography variant="title" color="inherit">
                                    Wather App
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <div id="locations">
                                <LocationList
                                    cities={cities}
                                    onSelectedLocation={this.handleSelectedLocation} /> 
                            </div>                    
                        </Col>
                        <Col xs={12} md={6}>
                            <Paper> { this.state.city && <ForecastExtended city={this.state.city}></ForecastExtended> } </Paper>
                        </Col>
                    </Row>
                </Grid>
            </MuiThemeProvider>

        )
    }
}

export default App