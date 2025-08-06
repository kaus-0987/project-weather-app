// src/context/WeatherContext.jsx
import React, { createContext, useState, useContext, useCallback } from 'react';
import { getCurrentWeather, getForecast } from '../services/weatherService';
import { processForecast } from '../utils/helpers';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [recentSearches, setRecentSearches] = useState(() => {
    const saved = localStorage.getItem('recentSearches');
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateRecentSearches = useCallback((city) => {
    setRecentSearches(prev => {
      const updated = [city, ...prev.filter(c => c.toLowerCase() !== city.toLowerCase())].slice(0, 5);
      localStorage.setItem('recentSearches', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const fetchWeather = useCallback(async (city) => {
    setLoading(true);
    setError(null);
    
    try {
      const [current, forecastData] = await Promise.all([
        getCurrentWeather(city),
        getForecast(city)
      ]);
      
      if (current.cod !== 200 || forecastData.cod !== '200') {
        throw new Error('City not found');
      }
      
      setCurrentWeather(current);
      setForecast(processForecast(forecastData));
      updateRecentSearches(city);
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  }, [updateRecentSearches]);

  return (
    <WeatherContext.Provider value={{
      currentWeather,
      forecast,
      recentSearches,
      loading,
      error,
      fetchWeather
    }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);