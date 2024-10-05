import { Link } from "react-router-dom";
import { socialLinks } from "../data/socialLinks"; // Make sure socialLinks is properly defined

const Footer = () => {
  return (
    <div className="flex flex-col w-full py-12 bg-gradient-to-r from-base-300 to-base-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Logo Section */}
        <div className="flex justify-center ">
          <Link
            to="/"
            className="btn btn-ghost text-xl font-bold text-base-content"
          >
            Portfolio
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/about"
            className="link link-hover transition duration-300 ease-in-out transform hover:scale-105"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="link link-hover transition duration-300 ease-in-out transform hover:scale-105"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="link link-hover transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact
          </Link>
          <Link
            to="/resume"
            className="link link-hover transition duration-300 ease-in-out transform hover:scale-105"
          >
            Resume
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center md:justify-start space-x-4 mt-4 md:mt-0">
          {socialLinks.map((socialLink, index) => (
            <a
              key={index}
              href={socialLink.link}
              target="_blank"
              className="text-base-content hover:text-primary transition duration-300 ease-in-out"
              rel="noopener noreferrer"
            >
              <socialLink.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>

      <div className="divider my-2 px-4"></div>

      {/* Made with 💖 Section */}
      <div className="flex justify-center">
        <p className="text-base-content">
          Made with 💖 by <span className="font-bold text-primary">Dev</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
