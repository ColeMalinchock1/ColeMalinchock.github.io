// ProjectCard.js
import React from 'react';
import styles from './Projects.module.css';

function ProjectCard({ project, onClick }) {
  return (
    <div 
      className={styles.projectCard}
      onClick={onClick}
    >
      <div className={styles.projectImageContainer}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.projectImage}
        />
      </div>
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.shortDescription}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
