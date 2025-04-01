import React, { useState } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';

// Project data structure
const projects = [
  {
    id: 1,
    title: "INSIGHT",
    shortDescription: "Intelligent, Safe, In-home Gravity Halo Traction",
    fullDescription: "INSIGHT is a joint project between NC State Mechanical and Aerospace Engineering Department and UNC Children's Hospital.",
    image: "/path-to-project-image.jpg", // Replace with your image path
    tags: ["React", "Node.js", "MongoDB"],
    links: {
      github: "https://github.com/yourusername/project1",
      live: "https://project-demo.com",
      cad: "https://cad-link.com",
      pcb: "https://pcb-design-link.com"
    }
  },
  {
    id: 2,
    title: "Project Name 1",
    shortDescription: "Brief description of the project",
    fullDescription: "Detailed description of the project and its features. Include technical details, challenges overcome, and outcomes achieved.",
    image: "/path-to-project-image.jpg", // Replace with your image path
    tags: ["React", "Node.js", "MongoDB"],
    links: {
      github: "https://github.com/yourusername/project1",
      live: "https://project-demo.com",
      cad: "https://cad-link.com",
      pcb: "https://pcb-design-link.com"
    }
  },
  // Add more projects here
];

// Modal component for project details
function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          {/* Project image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6">
            {project.fullDescription}
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
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
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
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
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
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
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500"
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

// Project card component
function ProjectCard({ project, onClick }) {
  return (
    <div 
      className="group cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600">{project.shortDescription}</p>
      </div>
    </div>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="about-page-content max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>
      
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
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
