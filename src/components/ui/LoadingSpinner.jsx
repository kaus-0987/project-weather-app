// src/components/ui/LoadingSpinner.jsx
import React from 'react';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = ({ fullPage }) => {
  return (
    <div className={`${styles.spinnerContainer} ${fullPage ? styles.fullPage : ''}`}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;