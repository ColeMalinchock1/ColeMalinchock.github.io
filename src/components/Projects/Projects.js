// Projects.js
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import projectsData from './ProjectsData';
import styles from './Projects.module.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionHeading}>My Projects</h2>
      
      {/* Projects grid */}
      <div className={styles.projectsGrid}>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Project detail modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default Projects;