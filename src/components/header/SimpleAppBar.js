import React, { useContext } from 'react';
import { withStyles, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { SearchBoxContext } from '../GlobalState';
import { Menu, Search } from '@material-ui/icons';

const styles = {
    root:{

    }
}

function SimpleAppBar(props){
    const { classes } = props;
    const { isSearchOpen, setSearch } = useContext(SearchBoxContext);

    return(
        <div>
            <AppBar position='sticky'>
                <Toolbar>
                  {isSearchOpen?(
                      <p>Search Box</p>
                  ):
                  (<IconButton>
                      <Menu />
                  </IconButton>)
                  }
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(SimpleAppBar);