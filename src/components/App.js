import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { pink, blue } from '@material-ui/core/colors';
import { GlobalState } from './GlobalState';
import SimpleAppBar from './header/SimpleAppBar';
import Login from '../components/Login';

const theme = createMuiTheme({
    palette:{
        primary: blue
    },
    typography:{
        useNextVariants: true
    }
})

function App(){
    return(
        <GlobalState>
        <MuiThemeProvider theme={theme}>
            <SimpleAppBar />
            <Login />
        </MuiThemeProvider>
        </GlobalState>
    )
}

export default App;