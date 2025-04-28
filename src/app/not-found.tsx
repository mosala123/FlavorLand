import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-center" style={{ height: '100vh' }}>
      <h1 className="display-4 text-danger mb-4">404 - Page Not Found</h1>
      <p className="lead mb-4">Oops! The page you are looking for does not exist.</p>
      <Link href="/" className="btn btn-primary btn-lg">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
