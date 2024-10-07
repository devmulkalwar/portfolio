import React from "react";
import { FaDownload } from "react-icons/fa6";

const ResumeButton = ({ styles }) => {
  return (
    <a
      href="/resume_dev.pdf" // Corrected path to the resume file
      download="dev_resume.pdf"
      className={styles}
    >
      Resume <FaDownload />
    </a>
  );
};

export default ResumeButton;
