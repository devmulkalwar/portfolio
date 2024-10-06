import React from 'react';
import profileImage from '../assets/Images/mainImage.png'; // Your profile image path
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava, FaPhp } from 'react-icons/fa'; // Import existing icons
import { SiBootstrap, SiGit, SiGithub, SiExpress, SiNodedotjs, SiMongodb, SiFirebase } from 'react-icons/si'; // Ensure these icons exist
import { Link } from 'react-router-dom';
import {skills} from "../data/skills.js"

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-center items-start flex-wrap">
        {/* Left: Profile Image */}
        <div className="flex justify-center items-center max-w-[310px] w-full"> {/* Max width set here */}
          <img src={profileImage} alt="Profile" className="object-cover w-full h-auto" /> {/* Responsive image */}
        </div>

        {/* Right: Info Section */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <h1 className="text-5xl font-bold text-primary">Dev Mulkalwar</h1>
          <h2 className="text-3xl text-success mt-2">Web Developer</h2>
          <p className="py-6 text-base-content leading-relaxed">
            I am a passionate web developer specializing in creating modern and responsive web applications. With a strong background in front-end technologies and a love for crafting user-friendly experiences, I thrive on transforming ideas into reality.
          </p>
          <div className="flex gap-4 mt-6">
            <Link
              to="/resume"
              className="btn btn-primary shadow-lg hover:scale-105 transition-transform"
            >
              Download Resume
            </Link>
            <Link
              to="/contact"
              className="btn btn-outline btn-success hover:scale-105 transition-transform"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className='flex flex-col justify-center items-center'>
      <h2 className="text-3xl font-bold text-primary mt-12">Skills</h2>
      <div className="grid grid-cols-4 lg:grid-cols-5 justify-center items-center gap-8 mt-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex place-self-center items-center justify-center w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white ${skill.bgColor} rounded-full shadow-lg`}
          >
            <div className="text-xl md:text-2xl lg:text-3xl">
           < skill.icon className="h-6 w-6"/>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default About;
