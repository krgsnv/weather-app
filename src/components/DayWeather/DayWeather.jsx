import React from 'react';

import styles from './DayWeather.module.scss';

function DayWeather({weatherResponse}) {
  const wordCapitalize = (word) => word[0].toUpperCase() + word.slice(1);

  const getDate = () => {
    const monthNames = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
      ],
      date = new Date(),
      year = date.getFullYear(),
      day = date.getDate(),
      month = date.getMonth();
    return day + ' ' + monthNames[month] + ' ' + year;
  };

  const getWeekDay = () => {
    const weekNames = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
      date = new Date(),
      day = date.getDay(),
      weekDay = weekNames[day];
    return wordCapitalize(weekDay);
  };

  const {coord, weather, base, main, visibility, wind, ...rest} = weatherResponse;
  
  return (
    <section className={styles.wrapper}>
      {/* <div className="">{JSON.stringify(weather)}</div>  */}
      <img src={`https://openweathermap.org/img/wn/${weather ? weather[0]["icon"] : ""}@2x.png`} />
      <span className={styles.temperature}>{main ? parseInt(main["temp"]) : ""}</span> <sup className={styles.degrees}>°C</sup>
      <div className={styles.decription}>
        <div>{weather ? wordCapitalize(weather[0]["description"]) : ""}</div>
        <div className={styles.date}>{`${getWeekDay()} ${getDate()} `}</div>
      </div>
      <div className={styles.rainfall}>
        <div className={`${styles.wind} ${styles['rainfall__elem']}`}>
          Ветер: 
          <span> {wind ? parseInt(wind["speed"]) : ""} м/с</span>
        </div>
        <div className={`${styles.humidity} ${styles['rainfall__elem']}`}>
          Влажность: 
          <span> {main ? parseInt(main["humidity"]) : ""} %</span>
        </div>
        <div className={`${styles.rain} ${styles['rainfall__elem']}`}>
          Вероятность дождя: 
          <span> 0.2 %</span>
        </div>
      </div>
    </section>
  );
}

export default DayWeather;
