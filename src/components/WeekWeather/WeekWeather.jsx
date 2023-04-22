import React from 'react';

import styles from './WeekWeather.module.scss';

function WeekWeather() {
  const weekDays = [...new Array(4)];
  return (
    <section className={styles.wrapper}>
      
      {weekDays.map(() => (
        <div className={styles.weekday}>
        <div className={styles.desc}>Пн</div>
        <img src="https://openweathermap.org/img/wn/02d@2x.png" width="80" />
        <div className={styles.temperature}>26°C</div>
      </div>
      ))}
    </section>
  );
}

export default WeekWeather;
