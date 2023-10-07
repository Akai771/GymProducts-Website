import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Search = () => {
  return (
    <Autocomplete
    freeSolo
      options={products.map((option) => option.label)}
      renderInput={(params) => (<TextField {...params} label="Search" style={{width: '250px'}}/>)}
    />
  );
}

const products = [
    {label: 'Protien Shakes'},
    {label: 'Gainers'},
    {label: 'Protien Bars'},
    {label: 'Supplements'},
    {label: 'Pre/Post Workout'},
]

export default Search;