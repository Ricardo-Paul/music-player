import React from 'react';
import { SearchBoxContext } from './GlobalState';
import backGround from '../images/music1.png';
import { Grid, Button } from '@material-ui/core';
import googleSVG from '../images/google.svg'

const bgStyle = {
    background: `url(${backGround}) no-repeat`,
    width: '80vw',
    height: '80vh',
    backgroundPositionX: "50%",
    marginTop: "2%"
}

const Login = () => {
    const { isSearchOpen, setSearch } = React.useContext(SearchBoxContext)

    const showLogin = {
        display: isSearchOpen?"none":"block"
    }
    return(<div style={showLogin}>
        <div style={bgStyle} >
            <Grid container justify="center">
                <Button color="primary">
                    <img src={googleSVG} height="30px" style={{marginRight: '8px'}} />
                    Sign in
                </Button>
            </Grid>
        </div>
    </div>)
}

export default Login;