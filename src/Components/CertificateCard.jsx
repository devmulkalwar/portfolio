import React from 'react';
import { FaDownload } from 'react-icons/fa';

const CertificateCard = ({ certificate }) => {
  return (
    <div className="bg-base-300 rounded-lg shadow-lg overflow-hidden w-full h-full max-w-xs mx-auto flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
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
