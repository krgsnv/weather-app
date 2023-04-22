import React from 'react';

import '../../assets/fonts/icomoon/style.css';
import styles from './Search.module.scss';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { SearchContext } from '../../App';

function Search() {
  const {setSearchValue} = React.useContext(SearchContext);

  return (
    <Stack spacing={2} sx={{ width: 450 }}>
      <div></div>
      <Autocomplete
        sx={{backgroundColor: "white", border: "none"}}
        freeSolo
        disableClearable
        options={cities.map((option) => option.name)}
        onChange={(event, searchValue) => {
          setSearchValue(searchValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{border: "none"}}
            placeholder="Москва"
            variant="filled"
            InputProps={{
              ...params.InputProps,
              type: 'search',
              className: styles.searchIcon,
              startAdornment: (
                <InputAdornment>
                  <SearchIcon />
                </InputAdornment>
              ),
              
            }}
          />
        )}
      />
      
    </Stack>
  );
}

const cities = [
  { name: 'Москва', year: 1994 },
  { name: 'Екатеринбург', year: 1972 },
  { name: 'Пермь', year: 1974 },
];
export default Search;
