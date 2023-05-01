import React, { useEffect, useState } from 'react';
import './SearchBar.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function SearchBar(props) {

  return (
    <div className="search-bar">
      <Autocomplete
        style={{ width: "15rem" }}
        disablePortal
        options={props.brandList}
        value={props.selectedBrand}
        onChange={(event, newValue) => {
          props.searchBrand(newValue)
        }}
        renderInput={(params) => <TextField {...params} label="Search brand" />}
      />
    </div>
  );
}

export default SearchBar;