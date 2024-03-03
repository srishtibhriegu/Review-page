"use client";
import React, { useState } from 'react';
import styles from '../page.module.css';

const StarRating = () => {
  const [safetyRating, setSafetyRating] = useState(null);
  const [communicationRating, setCommunicationRating] = useState(null);

  const handleSafetyRatingChange = (value) => {
    setSafetyRating(value);
  };

  const handleCommunicationRatingChange = (value) => {
    setCommunicationRating(value);
  };

  return (
    <div>
      <div>
        <h2 className={styles.heading1}>Safety</h2>
        <p className={styles.p}>How safely do you feel with trausti</p>
        {[...Array(5)].map((_, index) => (
          <span
            className={`${styles.star} ${
              safetyRating && index < safetyRating ? styles.selected : ''
            }`}
            key={index}
            style={{ cursor: 'pointer', fontSize: '24px' }}
            onClick={() => handleSafetyRatingChange(index + 1)}
          >
            {index < safetyRating ? '★' : '☆'}
          </span>
        ))}
      </div>
      <div>
        <h2 className={styles.heading1}>Communication</h2>
        <p className={styles.p}>How good was to communicate with trausti</p>
        {[...Array(5)].map((_, index) => (
          <span
            className={`${styles.star} ${
              communicationRating && index < communicationRating ? styles.selected : ''
            }`}
            key={index}
            style={{ cursor: 'pointer', fontSize: '24px' }}
            onClick={() => handleCommunicationRatingChange(index + 1)}
          >
            {index < communicationRating ? '★' : '☆'}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
