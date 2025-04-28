'use client';

import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
  return (
    <div 
      className="container d-flex align-items-center justify-content-center" 
      style={{ height: "100vh" }}
    >
      <div 
        className="text-center p-5 border rounded shadow-lg bg-light" 
        style={{ maxWidth: '450px' }}
      >
        <div className="text-danger mb-4">
          <i className="bi bi-exclamation-triangle-fill" style={{ fontSize: '4rem' }}></i>
        </div>
        <h2 className="mb-3 text-dark">Something Went Wrong!</h2>
        <p className="mb-4 text-muted">We encountered an error while processing your request. Please try again later.</p>
        
        <Link href="/" className="btn btn-danger btn-lg px-4">
  Go To Home Page
</Link>

      </div>
    </div>
  );
};

export default ErrorPage;
