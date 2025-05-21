// PublicationCard.js
import React from 'react';
import styles from './Publications.module.css';

function PublicationCard({ publication, onClick }) {
  return (
    <div 
      className={styles.publicationCard}
      onClick={onClick}
    >
      <div className={styles.publicationImageContainer}>
        <img
          src={publication.image}
          alt={publication.title}
          className={styles.publicationImage}
        />
      </div>
      <div className={styles.publicationContent}>
        <h3 className={styles.publicationTitle}>{publication.title}</h3>
        <p className={styles.publicationDescription}>{publication.shortDescription}</p>
      </div>
    </div>
  );
}

export default PublicationCard;
