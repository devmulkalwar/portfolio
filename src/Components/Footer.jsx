import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-base-300 to-base-200 py-12">
      <div className="container mx-auto px-4 flex flex-col">
        {/* Footer Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between lg:justify-around gap-8 text-center md:text-left">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start">
            <Link to="/" className="btn btn-ghost text-xl font-bold text-base-content">
              Portfolio
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row justify-center md:justify-end gap-4">
            <Link to="/about" className="link link-hover transition duration-300 ease-in-out transform hover:scale-105">
              About
            </Link>
            <Link to="/projects" className="link link-hover transition duration-300 ease-in-out transform hover:scale-105">
              Projects
            </Link>
            <Link to="/resume" className="link link-hover transition duration-300 ease-in-out transform hover:scale-105">
              Resume
            </Link>
            <Link to="/contact" className="link link-hover transition duration-300 ease-in-out transform hover:scale-105">
              Contact
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4 md:mt-0">
            <Link to="#" className="text-base-content hover:text-primary transition duration-300 ease-in-out">
              <FaFacebookF className="w-6 h-6" />
            </Link>
            <Link to="#" className="text-base-content hover:text-primary transition duration-300 ease-in-out">
              <FaInstagram className="w-6 h-6" />
            </Link>
            <Link to="#" className="text-base-content hover:text-primary transition duration-300 ease-in-out">
              <FaTwitter className="w-6 h-6" />
            </Link>
            <Link to="#" className="text-base-content hover:text-primary transition duration-300 ease-in-out">
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link to="#" className="text-base-content hover:text-primary transition duration-300 ease-in-out">
              <FaGithub className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <div className="divider my-8"></div>

        {/* Made with 💖 Section */}
        <div className="flex justify-center">
          <p className="text-base-content">
            Made with 💖 by <span className="font-bold">Dev</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
