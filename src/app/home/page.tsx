// home/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
};

const CATEGORIES = [
  { name: 'Italian',  emoji: '🍝', color: '#e07b54' },
  { name: 'Japanese', emoji: '🍱', color: '#2d4a3e' },
  { name: 'Mexican',  emoji: '🌮', color: '#f0a500' },
  { name: 'Indian',   emoji: '🍛', color: '#c45f38' },
  { name: 'Dessert',  emoji: '🍰', color: '#9b6ba8' },
  { name: 'Seafood',  emoji: '🦞', color: '#4a8bc4' },
];

const STATS = [
  { value: '10K+', label: 'Happy Cooks',    icon: '👨‍🍳' },
  { value: '5K+',  label: 'Recipes',        icon: '📖' },
  { value: '4.9★', label: 'Avg Rating',     icon: '⭐' },
  { value: '15+',  label: 'World Cuisines', icon: '🌍' },
];

export default function HomePage() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch 3 featured meals
    Promise.all([
      fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken').then(r => r.json()),
      fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=pasta').then(r => r.json()),
      fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=beef').then(r => r.json()),
    ]).then(([c, p, b]) => {
      setMeals([c.meals?.[0], p.meals?.[0], b.meals?.[0]].filter(Boolean));
      setLoading(false);
    });
  }, []);

  return (
    <div>

      {/* ════════════════════════════════
          HERO SECTION
      ════════════════════════════════ */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(135deg, #faf8f5 0%, #f5ede3 100%)',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Left — text */}
            <div className="col-lg-6 fade-up">
              {/* Label */}
              <span
                className="badge mb-4 px-3 py-2"
                style={{ background: 'rgba(224,123,84,0.12)', color: '#e07b54', fontSize: '0.78rem', letterSpacing: '0.06em', borderRadius: '50px' }}
              >
                ✦ WORLD&apos;S FINEST RECIPES
              </span>

              <h1 className="display-4 fw-bold mb-4">
                Cook with <br />
                <span className="text-gradient">Passion & Flavor</span>
              </h1>

              <p className="lead text-muted mb-5" style={{ fontWeight: 300, maxWidth: 480 }}>
                Discover thousands of authentic recipes from around the world.
                From quick weeknight dinners to gourmet weekend feasts — FlavorLand has it all.
              </p>

              <div className="d-flex gap-3 flex-wrap mb-5">
                <Link href="/products" className="btn btn-primary btn-lg">
                  Browse Recipes →
                </Link>
                <Link href="/catogry" className="btn btn-outline-primary btn-lg">
                  Explore Cuisines
                </Link>
              </div>

              {/* Mini stats */}
              <div className="d-flex gap-4 flex-wrap">
                {[{ v: '10K+', l: 'Happy Cooks' }, { v: '5K+', l: 'Recipes' }, { v: '4.9★', l: 'Rating' }].map(s => (
                  <div key={s.l}>
                    <div className="fw-bold fs-5" style={{ fontFamily: 'Playfair Display, serif', color: '#e07b54' }}>{s.v}</div>
                    <div className="text-muted small">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — image collage */}
            <div className="col-lg-6 position-relative text-center fade-up" style={{ animationDelay: '0.15s' }}>

              {/* Main hero image */}
              <div className="position-relative d-inline-block" style={{ width: '100%', maxWidth: 500 }}>
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
                  alt="Delicious food spread"
                  width={500}
                  height={600}
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ objectFit: 'cover', height: 480 }}
                  priority
                />

                {/* Floating badge — top left */}
                <div
                  className="position-absolute bg-white rounded-3 p-3 shadow-sm d-flex align-items-center gap-2"
                  style={{ top: 24, left: -20, minWidth: 170, zIndex: 2 }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=80&q=80"
                    alt="Pizza"
                    width={44}
                    height={44}
                    className="rounded-2"
                    style={{ objectFit: 'cover' }}
                  />
                  <div>
                    <div className="fw-semibold small">Margherita Pizza</div>
                    <div className="text-muted" style={{ fontSize: '0.72rem' }}>⭐ 4.9 · Italian</div>
                  </div>
                </div>

                {/* Floating badge — bottom right */}
                <div
                  className="position-absolute bg-white rounded-3 p-3 shadow-sm"
                  style={{ bottom: 30, right: -20, zIndex: 2 }}
                >
                  <div className="text-muted small mb-1">Today&apos;s Pick</div>
                  <div className="fw-bold small">🔥 Trending Now</div>
                  <div style={{ fontSize: '0.7rem', color: '#e07b54' }}>2,400 cooks tried it</div>
                </div>

                {/* Rating pill */}
                <div
                  className="position-absolute rounded-3 text-white p-2 text-center float-y"
                  style={{ bottom: '32%', left: -14, background: '#e07b54', zIndex: 2, minWidth: 60 }}
                >
                  <div className="fw-bold fs-5" style={{ lineHeight: 1 }}>4.9</div>
                  <div style={{ fontSize: '0.6rem' }}>⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ════════════════════════════════
          CATEGORIES
      ════════════════════════════════ */}
      <section className="section-sm" style={{ background: '#f0ebe3' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge mb-3 px-3 py-2" style={{ background: 'rgba(224,123,84,0.12)', color: '#e07b54', borderRadius: 50 }}>
              ✦ EXPLORE BY CUISINE
            </span>
            <h2 className="fw-bold">World Flavors, One Kitchen</h2>
            <p className="text-muted mt-2">Browse recipes from cuisines around the globe</p>
          </div>

          <div className="row g-3 justify-content-center">
            {CATEGORIES.map(cat => (
              <div key={cat.name} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <Link
                  href={`/products?category=${cat.name}`}
                  className="d-block text-decoration-none text-center p-4 rounded-4 h-100"
                  style={{
                    background: '#fff',
                    border: `1px solid #e8e0d5`,
                    transition: 'all 0.25s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 30px ${cat.color}25`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'none';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <div style={{ fontSize: '2.2rem', marginBottom: 8 }}>{cat.emoji}</div>
                  <div className="fw-semibold small" style={{ color: cat.color }}>{cat.name}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════
          FEATURED RECIPES
      ════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-5">
            <div>
              <span className="badge mb-2 px-3 py-2" style={{ background: 'rgba(224,123,84,0.12)', color: '#e07b54', borderRadius: 50 }}>
                ✦ EDITOR&apos;S CHOICE
              </span>
              <h2 className="fw-bold mb-0">Featured Recipes</h2>
            </div>
            <Link href="/products" className="btn btn-outline-primary btn-sm">
              View All →
            </Link>
          </div>

          {loading ? (
            <div className="row g-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="col-md-4">
                  <div className="card border-0" style={{ height: 360 }}>
                    <div className="skeleton w-100 h-100" style={{ background: '#ede8e2', animation: 'pulse 1.5s ease-in-out infinite' }} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="row g-4">
              {meals.map((meal, idx) => (
                <div key={meal.idMeal} className="col-md-4 fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <Link href={`/products/${meal.idMeal}`} className="text-decoration-none">
                    <div className="card h-100">
                      <div className="position-relative" style={{ height: 220 }}>
                        <Image
                          src={meal.strMealThumb}
                          alt={meal.strMeal}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          style={{ objectFit: 'cover' }}
                        />
                        {/* Dark overlay gradient */}
                        <div
                          className="position-absolute bottom-0 start-0 end-0"
                          style={{ height: '50%', background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }}
                        />
                        {/* Category badge on image */}
                        <span
                          className="position-absolute top-0 start-0 m-3 badge bg-white text-dark"
                          style={{ fontSize: '0.72rem' }}
                        >
                          🍽 {meal.strCategory}
                        </span>
                        {/* Rating */}
                        <span
                          className="position-absolute top-0 end-0 m-3 badge"
                          style={{ background: 'rgba(240,165,0,0.9)', fontSize: '0.72rem', color: '#1a1a1a' }}
                        >
                          ⭐ 4.{8 + idx}
                        </span>
                      </div>
                      <div className="card-body p-3">
                        <h5 className="card-title fw-bold mb-2" style={{ fontSize: '1rem', color: '#1a1a1a' }}>
                          {meal.strMeal}
                        </h5>
                        <div className="d-flex align-items-center gap-3 text-muted small">
                          <span>🌍 {meal.strArea}</span>
                          <span>⏱ 30 min</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>


      {/* ════════════════════════════════
          ABOUT DARK SECTION
      ════════════════════════════════ */}
      <section className="section" style={{ background: '#1a1210' }}>
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Image */}
            <div className="col-lg-6 position-relative">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                alt="Chef cooking"
                width={600}
                height={440}
                className="img-fluid rounded-4"
                style={{ objectFit: 'cover', height: 440, width: '100%' }}
              />
              {/* Stat card on top of image */}
              <div
                className="position-absolute bottom-0 end-0 rounded-3 text-white text-center p-3"
                style={{ background: '#e07b54', margin: '-20px', boxShadow: '0 10px 30px rgba(224,123,84,0.4)' }}
              >
                <div className="fw-bold fs-4" style={{ fontFamily: 'Playfair Display, serif' }}>5K+</div>
                <div style={{ fontSize: '0.78rem', opacity: 0.85 }}>Recipes</div>
              </div>
            </div>

            {/* Text */}
            <div className="col-lg-6">
              <span className="badge mb-3 px-3 py-2" style={{ background: 'rgba(224,123,84,0.2)', color: '#d9896a', borderRadius: 50, fontSize: '0.75rem', letterSpacing: '0.06em' }}>
                ✦ OUR STORY
              </span>
              <h2 className="fw-bold mb-4" style={{ color: '#fff', fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem,3.5vw,2.5rem)' }}>
                Food is Love <span style={{ color: '#f0a500' }}>Made Visible</span>
              </h2>
              <p className="mb-3" style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 300, lineHeight: 1.8 }}>
                FlavorLand was born from a simple belief — great food brings people together.
                We curate authentic recipes from every corner of the world, making them accessible
                to every home cook, from beginners to seasoned chefs.
              </p>
              <p className="mb-4" style={{ color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>
                Each recipe is carefully tested, beautifully presented, and ready for your kitchen.
              </p>
              <Link href="/about" className="btn btn-primary btn-lg">
                Read Our Story →
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* ════════════════════════════════
          STATS BAR
      ════════════════════════════════ */}
      <section className="section-sm" style={{ background: '#f0ebe3' }}>
        <div className="container">
          <div className="row g-4 text-center">
            {STATS.map(s => (
              <div key={s.label} className="col-6 col-md-3">
                <div style={{ fontSize: '2rem', marginBottom: 8 }}>{s.icon}</div>
                <div className="fw-bold" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#e07b54', lineHeight: 1 }}>
                  {s.value}
                </div>
                <div className="text-muted small mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════
          PHOTO GALLERY STRIP
      ════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">From Our Kitchen</h2>
            <p className="text-muted mt-2">Real food, real flavors, real people</p>
          </div>
          <div className="row g-3">
            {[
              { src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80', alt: 'Salad bowl' },
              { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&q=80', alt: 'Pancakes' },
              { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&q=80', alt: 'Grilled chicken' },
              { src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&q=80', alt: 'Burger' },
            ].map((img, i) => (
              <div key={i} className={i === 0 ? 'col-md-6' : 'col-md-2'}>
                <div className="overflow-hidden rounded-4" style={{ height: i === 0 ? 300 : 300 }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={300}
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.06)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════
          CTA BANNER
      ════════════════════════════════ */}
      <section className="section-sm">
        <div className="container">
          <div
            className="rounded-4 text-center text-white p-5"
            style={{ background: 'linear-gradient(135deg, #e07b54 0%, #c45f38 100%)' }}
          >
            <div style={{ fontSize: '3rem' }}>🍳</div>
            <h2 className="fw-bold mt-3 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to Start Cooking?
            </h2>
            <p className="mb-4 opacity-75 lead">
              Explore our full collection and find your next favourite dish.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Link href="/products" className="btn btn-light btn-lg fw-bold" style={{ color: '#e07b54', borderRadius: 50 }}>
                Explore All Recipes →
              </Link>
              <Link href="/search" className="btn btn-outline-light btn-lg" style={{ borderRadius: 50 }}>
                Search Recipes
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}