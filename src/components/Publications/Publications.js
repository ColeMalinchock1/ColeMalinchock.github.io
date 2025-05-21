// Publications.js
import React, { useState } from 'react';
import PublicationCard from './PublicationCard';
import PublicationModal from './PublicationModal';
import publicationsData from './PublicationsData';
import styles from './Publications.module.css';

function Publications() {
  const [selectedPublication, setSelectedPublication] = useState(null);

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionHeading}>My Publications</h2>
      
      {/* Publications grid */}
      <div className={styles.PublicationsGrid}>
        {publicationsData.map((publication) => (
          <PublicationCard
            key={publication.id}
            publication={publication}
            onClick={() => setSelectedPublication(publication)}
          />
        ))}
      </div>

      {/* Publication detail modal */}
      {selectedPublication && (
        <PublicationModal
          publication={selectedPublication}
          onClose={() => setSelectedPublication(null)}
        />
      )}
    </div>
  );
}

export default Publications;