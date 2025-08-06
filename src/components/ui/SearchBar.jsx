// src/components/ui/SearchBar.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWeather } from '../../context/WeatherContext';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const { recentSearches, fetchWeather } = useWeather();

  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }
    
    const filtered = recentSearches.filter(city => 
      city.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filtered);
  }, [query, recentSearches]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/city/${query.trim()}`);
    }
  };

  const handleSuggestionClick = (city) => {
    setQuery(city);
    navigate(`/city/${city}`);
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a city..."
          className={styles.searchInput}
          aria-label="Search for a city"
        />
        <button type="submit" className={styles.searchButton} aria-label="Search">
          Search
        </button>
      </form>
      
      {suggestions.length > 0 && (
        <ul className={styles.suggestionsList}>
          {suggestions.map((city, index) => (
            <li 
              key={index} 
              className={styles.suggestionItem}
              onClick={() => handleSuggestionClick(city)}
              onKeyDown={(e) => e.key === 'Enter' && handleSuggestionClick(city)}
              tabIndex={0}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;