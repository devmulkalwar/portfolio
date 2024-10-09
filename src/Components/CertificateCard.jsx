import React from 'react';
import { FaDownload } from 'react-icons/fa';

const CertificateCard = ({ certificate }) => {
  return (
    <div className="card w-full bg-base-200 shadow-xl">
      <figure>
        <img className="h-48 object-cover w-full" src={certificate.image} alt={certificate.name} />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <h2 className="card-title">{certificate.name}</h2>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => window.open(certificate.image, '_blank')}
            download
          >
            Download <FaDownload />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
