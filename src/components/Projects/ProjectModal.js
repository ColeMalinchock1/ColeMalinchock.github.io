// ProjectModal.js
import React, { useState } from 'react';
import { X, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Projects.module.css';

function ProjectModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!project) return null;
  
  // Get the images array or create one if it doesn't exist
  const images = project.images || [project.image];
  
  // Navigate to previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  // Navigate to next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Navigate to specific image by index
  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{project.title}</h2>
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
              src={images[currentImageIndex]}
              alt={`${project.title} #${currentImageIndex + 1}`}
              className={styles.carouselImage}
            />
            
            {/* Only show navigation controls if there's more than one image */}
            {images.length > 1 && (
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
                  {images.map((_, index) => (
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
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className={styles.tag}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className={styles.fullDescription}>
            {project.fullDescription}
          </p>

          {/* Links */}
          <div className={styles.linksContainer}>
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkButton} ${styles.githubLink}`}
              >
                <Github size={20} />
                GitHub
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkButton} ${styles.liveLink}`}
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            )}
            {project.links.cad && (
              <a
                href={project.links.cad}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkButton} ${styles.cadLink}`}
              >
                <ExternalLink size={20} />
                CAD Design
              </a>
            )}
            {project.links.pcb && (
              <a
                href={project.links.pcb}
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

export default ProjectModal;