import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { pink, blue } from '@material-ui/core/colors';
import { GlobalState } from './GlobalState';
import SimpleAppBar from './header/SimpleAppBar';

const theme = createMuiTheme({
    palette:{
        primary: pink
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
            App Here
        </MuiThemeProvider>
        </GlobalState>
    )
}

export default App;