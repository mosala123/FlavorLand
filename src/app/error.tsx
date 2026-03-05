// app/error.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaTriangleExclamation, FaRotateRight, FaBug } from 'react-icons/fa6';
import { FaHome, FaEnvelope } from 'react-icons/fa';

interface ErrorPageProps {
  error?: Error & { digest?: string };
  reset?: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const [countdown, setCountdown] = useState(10);

  // Log error
  useEffect(() => {
    if (error) console.error('Application Error:', error);
  }, [error]);

  // Auto-redirect countdown
  useEffect(() => {
    const t = setInterval(() => {
      setCountdown(p => {
        if (p <= 1) { clearInterval(t); window.location.href = '/'; return 0; }
        return p - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #faf8f5 0%, #f5ede3 100%)', padding: '2rem' }}
    >
      <div
        className="bg-white rounded-4 shadow text-center p-5"
        style={{ maxWidth: 540, width: '100%' }}
      >

        {/* Error icon */}
        <div className="position-relative d-inline-block mb-4">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle mx-auto"
            style={{ width: 110, height: 110, background: 'rgba(220,53,69,0.08)' }}
          >
            <FaTriangleExclamation size={48} style={{ color: '#dc3545' }} />
          </div>
          {/* Error 500 badge */}
          <span
            className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-dark px-3 py-2"
            style={{ fontSize: '0.72rem' }}
          >
            Error 500
          </span>
        </div>

        {/* Title */}
        <h1 className="fw-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.9rem' }}>
          Oops! Something Went Wrong
        </h1>

        {/* Message */}
        <p className="text-muted lead mb-4" style={{ fontSize: '1rem', fontWeight: 300 }}>
          {error?.message || 'We encountered an unexpected error while processing your request.'}
        </p>

        {/* Error ID if available */}
        {error?.digest && (
          <div className="bg-light rounded-3 p-3 mb-4">
            <small className="text-muted">
              <strong>Error ID:</strong> {error.digest}
            </small>
          </div>
        )}

        {/* Action buttons */}
        <div className="d-flex gap-3 justify-content-center flex-wrap mb-4">
          <button
            onClick={() => reset ? reset() : window.location.reload()}
            className="btn btn-primary btn-lg d-flex align-items-center gap-2"
          >
            <FaRotateRight size={15} />
            Try Again
          </button>
          <Link href="/" className="btn btn-outline-primary btn-lg d-flex align-items-center gap-2">
            <FaHome size={15} />
            Go Home
          </Link>
        </div>

        {/* Help links */}
        <div className="border-top pt-4">
          <p className="text-muted small mb-3">Need additional help?</p>
          <div className="d-flex gap-4 justify-content-center flex-wrap">
            <Link
              href="/contact"
              className="text-decoration-none text-muted d-flex align-items-center gap-2 small"
              onMouseEnter={e => (e.currentTarget.style.color = '#e07b54')}
              onMouseLeave={e => (e.currentTarget.style.color = '')}
            >
              <FaEnvelope size={13} /> Contact Support
            </Link>
            <Link
              href="/faq"
              className="text-decoration-none text-muted d-flex align-items-center gap-2 small"
              onMouseEnter={e => (e.currentTarget.style.color = '#e07b54')}
              onMouseLeave={e => (e.currentTarget.style.color = '')}
            >
              <FaBug size={13} /> Report Issue
            </Link>
          </div>
        </div>

        {/* Countdown */}
        <p className="text-muted small mt-4 mb-0">
          Redirecting to home in <strong style={{ color: '#e07b54' }}>{countdown}s</strong>
        </p>

      </div>
    </div>
  );
}
