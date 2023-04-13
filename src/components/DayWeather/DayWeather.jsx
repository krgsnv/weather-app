import React from 'react';

import styles from './DayWeather.module.scss';

function DayWeather() {
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
    return weekDay[0].toUpperCase() + weekDay.slice(1);
  };

  return (
    <section className={styles.wrapper}>
      <img src="https://openweathermap.org/img/wn/10d@2x.png" />
      <div>
        <span className={styles.temperature}>26</span> <sup className={styles.degrees}>°C</sup>
      </div>
      <div className={styles.decription}>
        <div>Облачно</div>
        <div className={styles.date}>{`${getWeekDay()} ${getDate()} `}</div>
      </div>
      <div className={styles.rainfall}>
        <div className={`${styles.wind} ${styles['rainfall__elem']}`}>
          <div>Ветер: </div>
          10 км/ч
        </div>
        <div className={`${styles.humidity} ${styles['rainfall__elem']}`}>
          <div>Влажность: </div>
          29 %
        </div>
        <div className={`${styles.rain} ${styles['rainfall__elem']}`}>
          <div>Вероятность дождя: </div>
          0.2 %
        </div>
      </div>
    </section>
  );
}

export default DayWeather;
