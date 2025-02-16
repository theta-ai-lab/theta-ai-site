import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    name: "Project One",
    thumbnail: "https://via.placeholder.com/300x200?text=Project+One",
    shortDescription: "A brief overview of Project One.",
    details:
      "Here are the details for Project One. This project leverages cutting-edge AI techniques to optimize data processing and improve efficiency."
  },
  {
    id: 2,
    name: "Project Two",
    thumbnail: "https://via.placeholder.com/300x200?text=Project+Two",
    shortDescription: "A brief overview of Project Two.",
    details:
      "Project Two focuses on developing machine learning models for predictive analytics, enabling smarter business decisions."
  },
  {
    id: 3,
    name: "Project Three",
    thumbnail: "https://via.placeholder.com/300x200?text=Project+Three",
    shortDescription: "A brief overview of Project Three.",
    details:
      "This project explores natural language processing solutions to enhance customer interactions and automate support tasks."
  }
];

function Projects() {
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const toggleProject = (id) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <div className="projects-page">
      <h1>Our Projects</h1>
      <div className="projects-container">
        <div className="projects-tabs">
          {projectsData.map((project) => (
            <div key={project.id} className="project-tab">
              <div
                className="project-summary"
                onClick={() => toggleProject(project.id)}
              >
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="project-thumbnail"
                />
                <div className="project-info">
                  <h2>{project.name}</h2>
                  <p>{project.shortDescription}</p>
                </div>
              </div>
              <AnimatePresence initial={false}>
                {expandedProjectId === project.id && (
                  <motion.div
                    className="project-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{project.details}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
