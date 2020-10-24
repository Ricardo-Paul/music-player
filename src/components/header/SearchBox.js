import React from 'react';

import { IconButton, InputBase } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { SearchBoxContext } from '../GlobalState';
import SuggestSearch from '../apis/SuggestSearch';
import YoutubeSearch from '../apis/YoutubeSearch';

const styles = {
    arrow: {
        color: 'white'
    }
}

 const SearchBox = (props) => {
     const { classes } = props;
     const { isSearchOpen, setSearch } = React.useContext(SearchBoxContext)


    const [state, setState] = React.useState({
        searchQuery: ''
    })
  

     const onType = async (e) => {
         console.log(process.env.API_KEY)
        const typedValue = e.target.value;
        setState({...state, searchQuery: typedValue})

        const suggestionResult = await SuggestSearch.get("",{
            params:{q: typedValue}
        })

        console.log(suggestionResult.data[1], typeof(suggestionResult));

        // try{
        //     const result = await YoutubeSearch.get("/search", {
        //         params:{
        //             q: typedValue
        //         }
        //     })
        //     console.log(result.data)
        // } catch (error){
        //     console.log(error)
        // }
    }

    return(
        <> 
        <IconButton 
        color='inherit'
        onClick={()=> setSearch(false)}
        >
            <ArrowBack
            className={classes.arrow}
            />
        </IconButton>
        <form>
            <InputBase 
            fullWidth={true}
            autoFocus={true}
            placeholder="Search Music"
            style={{color: '#fff', paddingLeft: '30px'}}
            value={state.searchQuery}
            onChange={onType}
            />
        </form>
        </>
    )
}

 export default withStyles(styles)(SearchBox)