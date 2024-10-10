import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../Components/ProjectCard';

const Projects = () => {
  return (
    <div className="container mx-auto my-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
