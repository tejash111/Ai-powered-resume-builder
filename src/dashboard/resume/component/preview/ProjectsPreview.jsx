import { Bold } from 'lucide-react';
import React from 'react';

const Projects = ({ resumeInfo }) => {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold  text-xl mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Projects
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />

      <div className="mt-2">
        {resumeInfo?.projects?.map((project, index) => (
          <div key={index} className="mb-2 p-4  rounded-lg shadow-sm ">
            <h3 className="font-semibold text-sm">{project.name}</h3>
            <p className="text-gray-600 text-sm">{project.description}</p>

            <div className="flex items-center flex-wrap gap-2 justify-between" >
  <p className="text-sm">
  <strong>Tech Stack:</strong>   {project.techStack}
  </p>
 <div>
 <a
    href={project.githubLink}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 text-sm mr-2"
  >
    GitHub
  </a>
  <span>|</span>
  <a
    href={project.liveDemo}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 text-sm ml-2"
  >
    Live Demo
  </a>
 </div>
</div>
             
            
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;