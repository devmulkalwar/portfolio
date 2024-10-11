import React from "react";
import { socialLinks } from "../data/socialLinks";

const SocialLinks = () => {
  return (
    <>
      {socialLinks.map((socialLink, index) => (
        <a
          key={index}
          href={socialLink.link}
          target="_blank"
          className={`transition duration-300 ease-in-out transform hover:scale-110 ${socialLink.color} hover:rotate-12`}
          rel="noopener noreferrer"
        >
          <socialLink.icon className="h-6 w-6" />
        </a>
      ))}
    </>
  );
};

export default SocialLinks;
