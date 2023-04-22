import React from 'react';

import DayWeather from './components/DayWeather/DayWeather';
import WeekWeather from './components/WeekWeather/WeekWeather';
import Sidebar from './components/Sidebar/Sidebar';

import './App.scss';

export const SearchContext = React.createContext('');

function App() {
  const [searchValue, setSearchValue] = React.useState('Москва');
  const [weatherResponse, setWeatherResponse] = React.useState({});
  React.useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=4a687458a85af4ab0b6d5703fedf9493&lang=ru&units=metric`,
    )
      .then((response) => response.json())
      .then((response) => setWeatherResponse(response))
      .catch((err) => console.error(err));
  }, [searchValue]);
  console.log(searchValue);
  return (
    <SearchContext.Provider value={{ setSearchValue }}>
      <div className="container">
        <main className="main">
          <DayWeather weatherResponse={weatherResponse} />
          <WeekWeather />
        </main>
        <Sidebar />
      </div>
    </SearchContext.Provider>
  );
}

export default App;
