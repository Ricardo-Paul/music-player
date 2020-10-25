import React from 'react';

import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { Search } from '@material-ui/icons'

export default function SuggestionResult({ suggestionResults, onSelection }){

    let suggestions = [];

if(suggestionResults){
    suggestions = suggestionResults.map((result, index) => {
        return(
            <ListItem key={index} onClick={() => onSelection(result)}>
                <ListItemIcon>
                    <Search />
                </ListItemIcon>
                <ListItemText primary={result} />
            </ListItem>
        )
    })
}
    return(
        <List>
            {suggestions}
        </List>
    )
}