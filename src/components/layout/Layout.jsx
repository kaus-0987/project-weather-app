// src/components/layout/Layout.jsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from './Header';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div 
      className={`${styles.layout} ${isDarkMode ? styles.dark : styles.light}`}
      data-theme={isDarkMode ? 'dark' : 'light'}
    >
      <div className={styles.container}>
        <Header />
        <main className={styles.mainContent}>
          {children}
        </main>
        {/*<footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Weather App | Data from OpenWeatherMap</p>
        </footer>*/}
      </div>
    </div>
  );
};

export default Layout;