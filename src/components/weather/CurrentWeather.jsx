// src/components/weather/CurrentWeather.jsx
import React from 'react';
import WeatherIcon from './WeatherIcon';
import { formatDate, getTime } from '../../utils/helpers';
import styles from './CurrentWeather.module.css';

const CurrentWeather = ({ data }) => {
  const { main, weather, wind, sys, name, dt } = data;
  const currentDate = formatDate(dt);
  const sunrise = getTime(sys.sunrise);
  const sunset = getTime(sys.sunset);
  
  return (
    <div className={styles.currentWeather}>
      <div className={styles.header}>
        <h2 className={styles.cityName}>{name}</h2>
        <p className={styles.date}>{currentDate}</p>
      </div>
      
      <div className={styles.mainInfo}>
        <div className={styles.temperature}>
          {Math.round(main.temp)}°C
        </div>
        <WeatherIcon icon={weather[0].icon} condition={weather[0].main} className={styles.weatherIcon} />
        <div className={styles.condition}>{weather[0].description}</div>
      </div>
      
      <div className={styles.details}>
        <div className={styles.detailItem}>
          <span>Feels Like</span>
          <span>{Math.round(main.feels_like)}°C</span>
        </div>
        <div className={styles.detailItem}>
          <span>Humidity</span>
          <span>{main.humidity}%</span>
        </div>
        <div className={styles.detailItem}>
          <span>Wind</span>
          <span>{wind.speed} m/s</span>
        </div>
        <div className={styles.detailItem}>
          <span>Sunrise</span>
          <span>{sunrise}</span>
        </div>
        <div className={styles.detailItem}>
          <span>Sunset</span>
          <span>{sunset}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;