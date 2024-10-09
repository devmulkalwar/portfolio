import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectCarousel = () => {
  return (
    <div className="carousel carousel-center bg-neutral rounded-box max-w-full space-x-4 px-4 py-6"> {/* Added mx-4 for horizontal margin */}
      {projects.map((project, index) => (
        <div className="carousel-item" key={index}>
          <ProjectCard
            title={project.title}
            description={project.description}
            image={project.image}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
            tags={project.tags}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectCarousel;
