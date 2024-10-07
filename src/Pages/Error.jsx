import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-error mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="mb-4 text-gray-600">
          Oops! The page you're looking for does not exist.
        </p>
        <Link href="/" className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
