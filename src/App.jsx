import React from 'react';

import DayWeather from './components/DayWeather/DayWeather';
import WeekWeather from './components/WeekWeather/WeekWeather';
import Sidebar from './components/Sidebar/Sidebar';

import './App.scss';

function App() {
  return (
    <div className="container">
      <main className="main">
        <DayWeather />
        <WeekWeather />
      </main>
      <Sidebar />
    </div>
  );
}

export default App;
