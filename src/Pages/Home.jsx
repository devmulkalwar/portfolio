import React from "react";
import mainImage from "../assets/Images/mainImage.png";
import { Link } from "react-router-dom";
import ResumeButton from "../Components/ResumeButton";
import ProjectCarousel from "../Components/ProjectCarousel";
import SkillCarousel from "../Components/SkillCarousel";
import SocialLinks from "../Components/SocialLinks";

const Home = () => {
  return (
    <div className="flex flex-grow flex-col items-center justify-center w-full p-4">
      {/* Hero Section */}
      <div className="hero-content flex-col gap-4 lg:flex-row-reverse w-full mx-auto">
        <img
          src={mainImage}
          className="w-[310px] rounded-full transition-transform duration-300 hover:scale-105"
          alt="Main Image"
        />
        <div className="lg:pl-6 flex flex-col justify-center items-start">
          <h4 className="text-2xl font-bold text-primary mb-2">Hello!</h4>
          <h1 className="text-5xl font-bold mb-2">
            I'm <span className="text-primary">Dev Mulkalwar</span>
          </h1>
          <h2 className="text-2xl  font-bold mb-4">Web Developer</h2>
          
          <div className="flex justify-start items-center gap-4 mb-4">
            <SocialLinks />
          </div>
          <div className="flex gap-2 justify-start items-center my-6">
            <Link
              to="/contact"
              className="btn btn-primary shadow-lg hover:scale-105 transition-transform"
            >
              Get in touch
            </Link>
            <ResumeButton styles="btn btn-outline btn-success shadow-lg hover:scale-105 transition-transform" />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="hero-content flex-col w-full m-auto my-4">
        <h1 className="text-2xl font-bold text-center mb-4">Skills</h1>
        <SkillCarousel />
      </div>

      {/* Projects Section */}
      <div className="hero-content flex-col w-full m-auto my-4">
        <h1 className="text-2xl font-bold text-center mb-4">Projects</h1>
        <ProjectCarousel />
      </div>
    </div>
  );
};

export default Home;
