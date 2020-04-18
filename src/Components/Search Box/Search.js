import React from "react";

import classes from "Search.module.css";

const Search = ({ value, onChange}) => {
    return (
        <input
            type="text"
            name="query"
            className={classes.SearchBox}
            placeholder="Search anythimg you want..."
            value={value}
            onChange={event => onChange(event.currenttarget.value)}
        />
    );
};

export default Search;