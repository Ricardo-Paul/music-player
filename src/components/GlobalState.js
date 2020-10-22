import React from 'react';

// we export seperately our context
export const SearchBoxContext = React.createContext();

export const GlobalState = props => {
    const [isSearchOpen, setSearch] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState(null);

    return(
        <SearchBoxContext.Provider value={{isSearchOpen, setSearch}}>
            {props.children}
        </SearchBoxContext.Provider>
    )
}

