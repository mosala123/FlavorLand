// not-found.tsx
'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function NotFound() {
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    const t = setInterval(() => {
      setCountdown(p => {
        if (p <= 1) { clearInterval(t); window.location.href = '/'; return 0; }
        return p - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const suggestions = [
    { label: 'Margherita Pizza', href: '/products/52771', emoji: '🍕' },
    { label: 'Chicken Curry',    href: '/products/52772', emoji: '🍛' },
    { label: 'Caesar Salad',     href: '/products/52773', emoji: '🥗' },
    { label: 'Chocolate Cake',   href: '/products/52774', emoji: '🍰' },
  ];

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #faf8f5 0%, #f5ede3 100%)', padding: '2rem' }}
    >
      <div
        className="bg-white rounded-4 shadow text-center p-5"
        style={{ maxWidth: 560, width: '100%' }}
      >
        {/* 404 icon */}
        <div
          className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
          style={{ width: 110, height: 110, background: 'rgba(224,123,84,0.1)', fontSize: '1.9rem', fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#e07b54' }}
        >
          404
        </div>

        <h1 className="fw-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.9rem' }}>
          Oops! Page Not Found
        </h1>
        <p className="text-muted mb-4">
          Looks like this recipe got lost in the kitchen!<br />
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Search bar */}
        <form
          onSubmit={e => {
            e.preventDefault();
            const q = (e.currentTarget.elements.namedItem('search') as HTMLInputElement).value;
            if (q) window.location.href = `/search?q=${q}`;
          }}
          className="mb-4"
        >
          <div className="input-group">
            <span className="input-group-text bg-white">🔍</span>
            <input
              name="search"
              type="text"
              className="form-control"
              placeholder="Search for recipes..."
            />
            <button type="submit" className="btn btn-primary" style={{ borderRadius: '0 50px 50px 0' }}>
              Search
            </button>
          </div>
        </form>

        {/* Suggestions */}
        <p className="text-muted small mb-3 fw-semibold">Popular Recipes You Might Like:</p>
        <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
          {suggestions.map(s => (
            <Link
              key={s.href}
              href={s.href}
              className="btn btn-sm btn-outline-secondary rounded-pill"
              style={{ fontSize: '0.8rem' }}
            >
              {s.emoji} {s.label}
            </Link>
          ))}
        </div>

        {/* Action buttons */}
        <div className="d-flex gap-3 justify-content-center flex-wrap mb-4">
          <Link href="/" className="btn btn-primary btn-lg">
            🏠 Back to Home
          </Link>
          <Link href="/products" className="btn btn-outline-primary btn-lg">
            🍽 Browse Recipes
          </Link>
        </div>

        {/* Countdown */}
        <p className="text-muted small">
          Redirecting to home in{' '}
          <strong style={{ color: '#e07b54' }}>{countdown}s</strong>
        </p>
      </div>
    </div>
  );
}