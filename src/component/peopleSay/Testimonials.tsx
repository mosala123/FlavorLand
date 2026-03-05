// Testimonials.tsx
'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

const testimonials = [
  {
    id: 1, name: 'Sarah Johnson', role: 'Home Cook',
    text: "FlavorLand completely transformed my cooking! The recipes are incredibly easy to follow and every dish turns out perfect. My family now requests my cooking every weekend.",
    rating: 5, initials: 'SJ', color: '#e07b54',
  },
  {
    id: 2, name: 'Mike Chen', role: 'Food Blogger',
    text: "As a food blogger I'm always seeking inspiration. FlavorLand's diverse collection has helped me create amazing content. The quick recipes are an absolute lifesaver!",
    rating: 5, initials: 'MC', color: '#2d4a3e',
  },
  {
    id: 3, name: 'Amanda Rodriguez', role: 'Professional Chef',
    text: "Even as a professional chef I find FlavorLand invaluable. The variety of recipes and creative combinations keep my menu fresh and exciting. Highly recommended!",
    rating: 5, initials: 'AR', color: '#f0a500',
  },
  {
    id: 4, name: 'David Kim', role: 'Food Enthusiast',
    text: "The step-by-step instructions make cooking so approachable. I've learned new techniques and impressed my friends with restaurant-quality meals!",
    rating: 5, initials: 'DK', color: '#4a8bc4',
  },
  {
    id: 5, name: 'Emily Watson', role: 'Busy Mom',
    text: "With three kids and a full-time job I need quick healthy meals. FlavorLand delivers every time! The 30-minute meals section is my absolute favourite.",
    rating: 5, initials: 'EW', color: '#9b6ba8',
  },
  {
    id: 6, name: 'James Peterson', role: 'Cooking Instructor',
    text: "I recommend FlavorLand to all my students. It's an excellent resource for learning new recipes and understanding different cuisines.",
    rating: 5, initials: 'JP', color: '#c45a5a',
  },
];

const Stars = ({ count }: { count: number }) => (
  <span style={{ color: '#f0a500', fontSize: '0.9rem' }}>
    {'★'.repeat(count)}{'☆'.repeat(5 - count)}
  </span>
);

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const slide = useCallback((dir: 1 | -1) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(p => (p + dir + testimonials.length) % testimonials.length);
    setTimeout(() => setAnimating(false), 400);
  }, [animating]);

  useEffect(() => {
    const id = setInterval(() => slide(1), 5000);
    return () => clearInterval(id);
  }, [slide]);

  // Show 3 at a time on desktop
  const visible = [0, 1, 2].map(i => testimonials[(current + i) % testimonials.length]);

  return (
    <section className="section" style={{ background: '#1a1210' }}>
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5">
          <span className="badge mb-3 px-3 py-2" style={{ background: 'rgba(224,123,84,0.2)', color: '#d9896a', borderRadius: 50, fontSize: '0.75rem', letterSpacing: '0.06em' }}>
            ✦ COMMUNITY LOVE
          </span>
          <h2 className="fw-bold" style={{ color: '#fff', fontFamily: 'Playfair Display, serif' }}>
            What Our Cooks Say
          </h2>
          <p className="mt-2" style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>
            Join thousands of passionate food lovers who transformed their kitchens.
          </p>
        </div>

        {/* Cards — 3 visible on desktop */}
        <div className="row g-4 mb-4">
          {visible.map((t, i) => (
            <div key={`${t.id}-${i}`} className="col-md-4">
              <div
                className="h-100 p-4 rounded-4"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  transition: 'opacity 0.4s, transform 0.4s',
                  opacity: animating ? 0.5 : 1,
                  transform: animating ? 'scale(0.97)' : 'scale(1)',
                }}
              >
                {/* Stars */}
                <div className="mb-3">
                  <Stars count={t.rating} />
                </div>

                {/* Quote */}
                <p className="mb-4" style={{ color: 'rgba(255,255,255,0.72)', fontWeight: 300, lineHeight: 1.75, fontSize: '0.95rem' }}>
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle fw-bold flex-shrink-0"
                    style={{ width: 48, height: 48, background: t.color + '22', color: t.color, fontFamily: 'Playfair Display, serif', fontSize: '0.9rem' }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="fw-semibold" style={{ color: '#fff', fontSize: '0.9rem' }}>{t.name}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="d-flex justify-content-center align-items-center gap-3 mb-5">
          <button
            onClick={() => slide(-1)}
            className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}
          >
            ←
          </button>

          {/* Dots */}
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="border-0 rounded-pill p-0"
              style={{
                width: i === current ? 24 : 8, height: 8,
                background: i === current ? '#e07b54' : 'rgba(255,255,255,0.2)',
                transition: 'all 0.3s',
                cursor: 'pointer',
              }}
            />
          ))}

          <button
            onClick={() => slide(1)}
            className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}
          >
            →
          </button>
        </div>

        {/* Stats row */}
        <div className="row g-4 text-center pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {[
            { v: '10K+', l: 'Happy Cooks' },
            { v: '5K+',  l: 'Recipes Shared' },
            { v: '4.9★', l: 'Avg Rating' },
            { v: '15+',  l: 'Cuisines' },
          ].map(s => (
            <div key={s.l} className="col-6 col-md-3">
              <div className="fw-bold" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#e07b54', lineHeight: 1 }}>
                {s.v}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', marginTop: 6 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <Link href="/products" className="btn btn-primary btn-lg px-5">
            Join Our Community 🚀
          </Link>
        </div>

      </div>
    </section>
  );
}