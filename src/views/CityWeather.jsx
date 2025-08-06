// src/views/CityWeather.jsx
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useWeather } from '../context/WeatherContext';
import CurrentWeather from '../components/weather/CurrentWeather';
import Forecast from '../components/weather/Forecast';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorMessage from '../components/ui/ErrorMessage';
import styles from './CityWeather.module.css';

const CityWeather = () => {
  const { cityName } = useParams();
  const navigate = useNavigate();
  const { currentWeather, forecast, loading, error, fetchWeather } = useWeather();

  useEffect(() => {
    if (cityName) {
      fetchWeather(cityName);
    }
  }, [cityName, fetchWeather]);

  if (loading) {
    return <LoadingSpinner fullPage />;
  }

  if (error) {
    return (
      <ErrorMessage 
        message={error} 
        onRetry={() => fetchWeather(cityName)}
        onHome={() => navigate('/')}
      />
    );
  }

  return (
    <div className={styles.cityWeather}>
      {currentWeather && (
        <>
          <CurrentWeather data={currentWeather} />
          <Forecast data={forecast} />
        </>
      )}
    </div>
  );
};

export default CityWeather;