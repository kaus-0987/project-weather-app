// src/components/weather/Forecast.jsx
import React from 'react';
import WeatherCard from './WeatherCard';
import styles from './Forecast.module.css';

const Forecast = ({ data }) => {
  if (!data || data.length === 0) return null;
  
  return (
    <div className={styles.forecast}>
      <h3>5-Day Forecast</h3>
      <div className={styles.forecastCards}>
        {data.map((day, index) => (
          <WeatherCard
            key={index}
            date={day.date}
            minTemp={day.minTemp}
            maxTemp={day.maxTemp}
            condition={day.condition}
            icon={day.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Forecast;