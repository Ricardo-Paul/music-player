import React, { useContext } from 'react';
import { withStyles, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { SearchBoxContext } from '../GlobalState';
import { Menu, Search } from '@material-ui/icons';
import SearchBox  from './SearchBox';


const styles = {
    root:{
        flexGrow: 1
    },
    title:{
        textAlign: "center",
        width: "calc(100% - 96px)"
    }
}

function SimpleAppBar(props){
    const { classes } = props;
    const { isSearchOpen, setSearch } = useContext(SearchBoxContext);

    return(
        <div className={classes.root}>
            <AppBar position='sticky'>
                <Toolbar>
                  {isSearchOpen?(
                      <SearchBox />
                  ):
                  (
                  <>
                  <IconButton color="inherit" aria-label="Menu" >
                      <Menu />
                  </IconButton>
                  <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.title}
                  >
                      SoftMusic
                  </Typography>
                  <IconButton color="inherit" aria-label="Search"
                  onClick={()=> setSearch(true)}
                  >
                      <Search />
                  </IconButton>
                  </>
                  )
                  }
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(SimpleAppBar);