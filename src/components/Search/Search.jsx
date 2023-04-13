import React from 'react';

import '../../assets/fonts/icomoon/style.css';
import styles from './Search.module.scss';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

function Search() {
  const [searchValue, setSearchValue] = React.useState('Москва');
  const [cityResponse, setCityResponse] = React.useState(
    {"coord":{"lon":37.6156,"lat":55.7522},
    "weather":[{"id":804,"main":"Clouds","description":"пасмурно","icon":"04d"}],
    "base":"stations",
    "main":{"temp":289.33,"feels_like":287.76,"temp_min":288.79,"temp_max":289.9,"pressure":1016,"humidity":29,"sea_level":1016,"grnd_level":998},
    "visibility":10000,"wind":{"speed":2.31,"deg":114,"gust":3.25},"clouds":{"all":90},"dt":1681312888,"sys":{"type":2,"id":2000314,"country":"RU","sunrise":1681266790,"sunset":1681316837},
    "timezone":10800,"id":524901,"name":"Москва","cod":200}
  );
  React.useEffect(() => {
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=4a687458a85af4ab0b6d5703fedf9493&lang=ru`)
    //   .then(response => response.json())
    //   .then(response => setCityResponse(response))
    //   .catch(err => console.error(err));
  }, [searchValue])
  return (
    <Stack spacing={2} sx={{ width: 450 }}>
      <div>{JSON.stringify(cityResponse)}</div>
      <Autocomplete
        freeSolo
        disableClearable
        options={cities.map((option) => option.name)}
        onChange={(event, searchValue) => {
          setSearchValue(searchValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
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
