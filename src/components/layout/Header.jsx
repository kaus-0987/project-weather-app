import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link to="/" className={styles.logo}>
          <h1>Weather App</h1>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;