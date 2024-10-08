import React from 'react';
import { certificates } from '../data/certificates';// Assuming you have the certificates data in this file
import CertificateCard from '../Components/CertificateCard';

const Certificates = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Certificates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {certificates.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
