import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectCarousel = () => {
  return (
    <div className="carousel carousel-center bg-neutral rounded-box max-w-full space-x-4 px-4 py-6">
     
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
  );
};

export default ProjectCarousel;
