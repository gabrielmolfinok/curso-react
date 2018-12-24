
import React, { Component } from 'react'

// Material UI          
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from '@material-ui/core/Paper'
import AppBar  from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'

// React Grid System        
import { Grid, Row, Col } from 'react-flexbox-grid'

import ForecastExtendedContainer from './containers/ForecastExtendedContainer'
import LocationListContainer from './containers/LocationListContainer'

const cities = [
    "Montevideo,uy",
    "Buenos Aires,ar"
]

export default class App extends Component {

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
                                <LocationListContainer cities={cities} /> 
                            </div>                    
                        </Col>
                        <Col xs={12} md={6}>
                            <Paper>
                                <ForecastExtendedContainer />
                            </Paper>
                        </Col>
                    </Row>
                </Grid>
            </MuiThemeProvider>

        )
    }
}