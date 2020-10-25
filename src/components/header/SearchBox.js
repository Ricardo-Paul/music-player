import React from 'react';

import { Popper, IconButton, InputBase } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { SearchBoxContext } from '../GlobalState';
import SuggestSearch from '../apis/SuggestSearch';
import YoutubeSearch from '../apis/YoutubeSearch';
import SuggestionResult from './suggestionResult';

const styles = {
    arrow: {
        color: 'white'
    }
}

 const SearchBox = (props) => {
     const { classes } = props;
     const { isSearchOpen, setSearch } = React.useContext(SearchBoxContext)
     const [ suggestionResults, setSuggestionResult ] = React.useState([]);

    const [state, setState] = React.useState({
        searchQuery: ''
    })

    async function getSuggestions(value){
        const suggestionResult = await SuggestSearch.get("",{params:{ q:value}})
        setSuggestionResult(suggestionResult.data[1])
    }
  
    async function searchOnYoutube(selectedValue){
        const searchResult = await YoutubeSearch.get("/search",{params:{q:selectedValue}})
        return searchResult.data;
    }

     const onType = async (e) => {
        const typedValue = e.target.value;
        setState({...state, searchQuery: typedValue})
        getSuggestions(typedValue)
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

        <Popper style={{ width: "100%" }} 
            open={true} placement="bottom" 
            anchorEl={document.getElementById("root")}>
            <SuggestionResult suggestionResults={suggestionResults} />
        </Popper>
        </>
    )
}

 export default withStyles(styles)(SearchBox)