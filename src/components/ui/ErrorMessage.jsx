// src/components/ui/ErrorMessage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message, onRetry, onHome }) => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorIcon}>⚠️</div>
      <h2 className={styles.errorTitle}>Something went wrong</h2>
      <p className={styles.errorMessage}>{message}</p>
      
      <div className={styles.errorActions}>
        {onRetry && (
          <button 
            onClick={onRetry}
            className={styles.errorButton}
          >
            Try Again
          </button>
        )}
        <Link to="/" className={styles.errorButton}>
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorMessage;