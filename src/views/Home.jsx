// src/views/Home.jsx
import React from 'react';
import SearchBar from '../components/ui/SearchBar';
import RecentSearches from '../components/ui/RecentSearches';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Weather Forecast</h1>
        <p className={styles.subtitle}>Search for a city to get current weather and 5-day forecast</p>
        <SearchBar />
      </div>
      <RecentSearches />
    </div>
  );
};

export default Home;