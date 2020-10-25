import React from 'react';

import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { Search } from '@material-ui/icons'

export default function SuggestionResult({ suggestionResults }){

    let suggestions = [];

if(suggestionResults){
    suggestions = suggestionResults.map((result, index) => {
        return(
            <ListItem key={index}>
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