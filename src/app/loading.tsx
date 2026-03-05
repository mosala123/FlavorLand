// loading.tsx
'use client';

import React, { useEffect, useState } from 'react';

const messages = [
  'Gathering fresh ingredients...',
  'Preheating the oven...',
  'Whisking in the flavors...',
  'Plating with care...',
  'Almost ready to serve...',
];

export default function Loading() {
  const [msgIdx, setMsgIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prog = setInterval(() => setProgress(p => (p >= 88 ? 88 : p + 1)), 35);
    const msg  = setInterval(() => setMsgIdx(i => (i + 1) % messages.length), 2200);
    return () => { clearInterval(prog); clearInterval(msg); };
  }, []);

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #faf8f5 0%, #f5ede3 100%)' }}
    >
      <div
        className="bg-white rounded-4 text-center shadow p-5"
        style={{ maxWidth: 420, width: '90%' }}
      >
        {/* Icon */}
        <div
          className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
          style={{ width: 96, height: 96, background: 'rgba(224,123,84,0.1)', fontSize: '2.4rem' }}
        >
          🍳
        </div>

        {/* Message */}
        <h4 className="fw-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
          {messages[msgIdx]}
        </h4>
        <p className="text-muted small mb-4">Loading your culinary adventure...</p>

        {/* Progress bar */}
        <div className="progress mb-2" style={{ height: 8, borderRadius: 50 }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #e07b54, #f0a500)',
              borderRadius: 50,
              transition: 'width 0.3s ease',
            }}
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <p className="fw-semibold small mb-4" style={{ color: '#e07b54' }}>{progress}%</p>

        {/* Bounce dots */}
        <div className="d-flex justify-content-center gap-2 mb-4">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="rounded-circle"
              style={{
                width: 10, height: 10,
                background: '#e07b54',
                animation: `bounce 1.2s ${i * 0.2}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        {/* Fun fact */}
        <div className="rounded-3 p-3 small text-muted" style={{ background: '#faf8f5' }}>
          💡 <strong className="text-dark">Did you know?</strong>{' '}
          The world&apos;s most expensive pizza takes 72 hours to prepare!
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}