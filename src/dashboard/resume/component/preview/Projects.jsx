import React from 'react';

const Projects = ({ resumeInfo }) => {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm text-xl mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Projects
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />

      <div className="mt-2">
        {resumeInfo?.projects?.map((project, index) => (
          <div key={index} className="mb-2 p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-md">{project.name}</h3>
            <p className="text-gray-600 text-sm">{project.description}</p>
            <p className="text-sm mt-1">
              <strong>Tech Stack:</strong> {project.tech_stack.join(', ')}
            </p>
            <div className="text-sm mt-2">
              <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="text-blue-600 mr-2">
                GitHub
              </a>
              |
              <a href={project.live_demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 ml-2">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
