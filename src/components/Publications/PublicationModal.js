// PublicationModal.js
import React, { useState } from 'react';
import { X, Github, ExternalLink, ChevronLeft, ChevronRight, } from 'lucide-react';
import styles from './Publications.module.css';

function PublicationModal({ publication, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!publication) return null;
  
  // Get the images array or create one if it doesn't exist
  const processedImages = publication.images 
    ? publication.images.map(img => typeof img === 'string' 
        ? { src: img, description: '' } 
        : img)
    : [{ src: publication.image, description: '' }];
  
  // Navigate to previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? processedImages.length - 1 : prevIndex - 1
    );
  };
  
  // Navigate to next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === processedImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Navigate to specific image by index
  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const currentImage = processedImages[currentImageIndex];

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{publication.title}</h2>
          <button 
            onClick={onClose}
            className={styles.closeButton}
          >
            <X size={24} />
          </button>
        </div>
        
        <div className={styles.modalContent}>
          {/* Image carousel */}
          <div className={styles.carouselContainer}>
            <img
              src={currentImage.src}
              alt={currentImage.description || `${publication.title} #${currentImageIndex + 1}`}
              className={styles.carouselImage}
            />

            {/* Image description */}
            {currentImage.description && (
              <div className={styles.imageDescription}>
                {currentImage.description}
              </div>
            )}
            
            {/* Only show navigation controls if there's more than one image */}
            {processedImages.length > 1 && (
              <>
                <button 
                  className={`${styles.carouselNav} ${styles.carouselNavPrev}`}
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  className={`${styles.carouselNav} ${styles.carouselNavNext}`}
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
                
                {/* Dot indicators */}
                <div className={styles.carouselDots}>
                  {processedImages.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.carouselDot} ${
                        index === currentImageIndex ? styles.carouselDotActive : ''
                      }`}
                      onClick={() => goToImage(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          
          {/* Tags */}
          <div className={styles.tagContainer}>
            {publication.tags.map((tag) => (
              <span 
                key={tag}
                className={styles.tag}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Authors */}
          <h1>Contributing Authors</h1>
          <p className={styles.description}>
            {publication.authors}
          </p>

          {/* Abstract */}
          <h1>Abstract</h1>
          <p className={styles.description}>
            {publication.abstract}
          </p>

          <h1>Publish Date</h1>
          <p className={styles.description}>
            {publication.date}
          </p>

          {/* Funding Partners */}
          <h1>Partners</h1>
          <ul className={styles.descriptionList}>
            {publication.partners.map((partner, index) => (
              <li key={index}>{partner}</li>
            ))}
          </ul>

          {/* Results */}
          <h1>Conference/Journal</h1>
          <ul className={styles.descriptionList}>
            {publication.results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>

          {/* Links */}
          <div className={styles.linksContainer}>
            {publication.links.github && (
              <a
                href={publication.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkButton} ${styles.githubLink}`}
              >
                <Github size={20} />
                GitHub
              </a>
            )}
            {publication.links.paper && (
              <a
                href={publication.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkButton} ${styles.paperLink}`}
              >
                <ExternalLink size={20} />
                Paper
              </a>
            )}
            {publication.links.live && (
              <a
                href={publication.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkButton} ${styles.liveLink}`}
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            )}
            {publication.links.cad && (
              <a
                href={publication.links.cad}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkButton} ${styles.cadLink}`}
              >
                <ExternalLink size={20} />
                CAD Design
              </a>
            )}
            {publication.links.pcb && (
              <a
                href={publication.links.pcb}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkButton} ${styles.pcbLink}`}
              >
                <ExternalLink size={20} />
                PCB Design
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicationModal;