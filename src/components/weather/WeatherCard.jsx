// src/components/weather/WeatherCard.jsx
import React from 'react';
import WeatherIcon from './WeatherIcon';
import { formatDate } from '../../utils/helpers';
import styles from './WeatherCard.module.css';

const WeatherCard = ({ date, minTemp, maxTemp, condition, icon }) => {
  const formattedDate = formatDate(new Date(date).getTime() / 1000);
  
  return (
    <div className={styles.weatherCard}>
      <div className={styles.date}>{formattedDate}</div>
      <WeatherIcon icon={icon} condition={condition} className={styles.icon} />
      <div className={styles.temps}>
        <span className={styles.maxTemp}>{Math.round(maxTemp)}°</span>
        <span className={styles.minTemp}>{Math.round(minTemp)}°</span>
      </div>
      <div className={styles.condition}>{condition}</div>
    </div>
  );
};

export default WeatherCard;