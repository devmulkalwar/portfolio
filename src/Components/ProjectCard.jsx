import React from 'react';

const ProjectCard = ({ title, description, image, liveLink, repoLink }) => {
  return (
    <div className="card w-full bg-base-300 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure>
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-between mt-4">
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Live Demo
          </a>
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-success">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
