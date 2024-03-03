"use client";
import React, { useState } from 'react'; 
import StarRating from './client-only/starRating';
import styles from '../app/page.module.css';
import thumbsUpIcon from './client-only/'
import thumbsDownIcon from'./client-only/';


const ReviewPage = () => {
  const [thumbsUpClicked, setThumbsUpClicked] = useState(false);
  const [thumbsDownClicked, setThumbsDownClicked] = useState(false);

  const handleThumbsUpClick = () => {
    
    setThumbsUpClicked(true); 
    setThumbsDownClicked(false); 
  };

  const handleThumbsDownClick = () => {
    
    setThumbsDownClicked(true); 
    setThumbsUpClicked(false); 
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Leave a Review</h1>
      <p className={styles.text}>Your feedback is important to us. Please take a moment to share your experience.</p>
      <div className={styles.ratingContainer}>
        <StarRating />
        <span className={styles.ratingText}>Would you recommend Trausti?</span>
      </div>
      <div className={styles.buttonsContainer}>
      <button className={styles.button} onClick={handleThumbsDownClick} style={{ backgroundColor: thumbsDownClicked ? 'green' : 'transparent' }}>
          <img src={thumbsDownIcon} alt="Thumbs Down" className="thumbs-down-icon" />
          <span className={styles.buttonText}>No</span>
        </button>
        <button className={styles.button} onClick={handleThumbsUpClick} style={{ backgroundColor: thumbsUpClicked ? 'green' : 'transparent' }}>
          <span className={styles.buttonText}>Yes</span>
          <img src={thumbsUpIcon} alt="Thumbs Up" className="thumbs-up-icon" />
        </button>
      </div>
    </div>
  );
};

export default ReviewPage;