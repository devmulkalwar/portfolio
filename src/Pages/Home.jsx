import React from "react";
import mainImage from "../assets/Images/mainImage.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-grow bg-base-200 w-full">
      <div className="hero-content flex-col gap-2 lg:flex-row-reverse w-full mx-auto p-4">
        <img src={mainImage} className=" w-[310px]   " alt="Main Image" />
        <div className="lg:pl-6">
          <h4 className=" text-2xl font-bold text-primary my-4">Hello!</h4>
          <h1 className="text-5xl  font-bold">
            I'm <span className="text-primary"> Dev Mulkalwar</span>
          </h1>
          <h2 className="text-2xl font-bold">Web Devloper</h2>
          <div className="flex gap-2 justify-start items-center my-6">
            <Link
              to="/contact"
              className="btn btn-primary shadow-lg hover:scale-105 transition-transform"
            >
              Get in touch
            </Link>
            <Link
              to="/resume"
              className="btn btn-outline btn-primary shadow-md hover:scale-105 transition-transform"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
