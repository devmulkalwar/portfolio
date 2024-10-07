import React from "react";
import { FaDownload } from "react-icons/fa6";


const ResumeButton = ({styles}) => {
  return (
    <a
      href= "../../public/resume_dev.pdf"
      download= "dev_resume.pdf"
      className={styles}
    >
      Resume <FaDownload/>
    </a>
  );
};

export default ResumeButton;
