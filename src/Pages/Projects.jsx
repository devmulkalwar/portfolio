import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../Components/ProjectCard';

const Projects = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(projects[0].projectCategory); // Default to the first category

  // Handler to switch tabs
  const handleTabChange = (category) => {
    setActiveTab(category);
  };

  return (
    <div className="flex flex-grow flex-col justify-center items-center mx-8 py-8">
      {/* Tabs for project categories */}
      <div className="tabs tabs-boxed mb-8">
        {projects.map((category, index) => (
          <a
            key={index}
            className={`tab ${activeTab === category.projectCategory ? 'tab-active' : ''}`}
            onClick={() => handleTabChange(category.projectCategory)}
          >
            {category.projectCategory}
          </a>
        ))}
      </div>

      {/* Render projects based on the active tab */}
      {projects
        .filter((category) => category.projectCategory === activeTab)
        .map((filteredCategory, index) => (
          <div key={index} className="mb-16 w-full">
            <h2 className="text-3xl font-semibold text-center  mb-6">{filteredCategory.projectCategory}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategory.categoryProjects.map((project, projectIndex) => (
                <ProjectCard
                  key={projectIndex}
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
        ))}
    </div>
  );
};

export default Projects;
