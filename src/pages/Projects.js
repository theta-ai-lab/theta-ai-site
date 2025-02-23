import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
import { projectsData } from "../data/Projects";


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
