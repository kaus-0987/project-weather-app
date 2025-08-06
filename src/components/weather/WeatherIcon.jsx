// src/components/weather/WeatherIcon.jsx
import React from 'react';
import styles from './WeatherIcon.module.css';

const WeatherIcon = ({ icon, condition, className }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  
  return (
    <div className={`${styles.weatherIcon} ${className}`}>
      <img 
        src={iconUrl} 
        alt={condition} 
        className={styles.iconImage}
        onError={(e) => {
          e.target.onerror = null;
          e.target.parentNode.style.display = 'none';
        }}
      />
    </div>
  );
};

export default WeatherIcon;