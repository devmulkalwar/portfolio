import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../Components/ProjectCard';

const Projects = () => {
  return (
    <div className="flex flex-grow flex-col justify-center items-center mx-8 px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
