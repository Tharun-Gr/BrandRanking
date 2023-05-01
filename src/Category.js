import React, { useState } from 'react';
import './Category.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function Category(props) {

    const options = [
        { name: 'Electronics Brands'},
        { name: 'Beauty Brands'},
        { name: 'Clothing Brands'},
        { name: 'Home Tools Brands'}
    ];

  return (
    <FormControl variant="outlined" style={{ width: "15rem" }}>
        <InputLabel>Category</InputLabel>
        <Select
            value={props.category}
            onChange={event => {
                props.categoryChanged(event.target.value);
            }}
            label="Select"
            >
            {options.map(option => (
                <MenuItem key={option.name} value={option.name}>
                    {option.name}
                </MenuItem>
            ))}
        </Select>
    </FormControl>
  );
}

export default Category;