// src/components/ui/RecentSearches.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWeather } from '../../context/WeatherContext';
import styles from './RecentSearches.module.css';

const RecentSearches = () => {
  const navigate = useNavigate();
  const { recentSearches } = useWeather();

  if (recentSearches.length === 0) {
    return null;
  }

  return (
    <div className={styles.recentSearches}>
      <h4>Recent Searches</h4>
      <div className={styles.recentList}>
        {recentSearches.map((city, index) => (
          <button
            key={index}
            className={styles.recentItem}
            onClick={() => navigate(`/city/${city}`)}
            aria-label={`View weather for ${city}`}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;