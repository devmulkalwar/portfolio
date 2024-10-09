import React from 'react';
import { skills } from '../data/skills';

const SkillCarousel = () => {
  return (
    <div className="carousel carousel-center bg-neutral rounded-box max-w-full space-x-4 mx-4 py-6">
      {skills.map((skill, index) => (
        <div className="carousel-item transition-transform transform hover:scale-105" key={index}>
          <div className={`flex flex-col items-center ${skill.bgColor} text-white p-4 rounded-lg shadow-lg w-40`}>
            <skill.icon className="w-16 h-16 mb-2" />
            <h3 className="text-lg font-semibold">{skill.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCarousel;
