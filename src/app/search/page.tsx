// search/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
};

export default function SearchPage() {
  const [query,    setQuery]    = useState('');
  const [results,  setResults]  = useState<Meal[]>([]);
  const [loading,  setLoading]  = useState(false);
  const [searched, setSearched] = useState(false);

  // Debounced search
  useEffect(() => {
    if (!query.trim()) { setResults([]); setSearched(false); return; }

    setLoading(true);
    const timer = setTimeout(async () => {
      try {
        const res  = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await res.json();
        setResults(data.meals ?? []);
        setSearched(true);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div style={{ background: '#faf8f5', minHeight: '100vh' }}>

      {/* ── Page Header ── */}
      <div
        className="py-5 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #2d4a3e 0%, #1a2e25 100%)' }}
      >
        <div className="container py-3">
          <h1 className="fw-bold display-5 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            🔍 Search Recipes
          </h1>
          <p className="lead mb-4 opacity-75">Find your favourite dish from thousands of recipes</p>

          {/* Search bar inside header */}
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="input-group input-group-lg shadow">
                <span className="input-group-text bg-white border-0">
                  <FaSearch style={{ color: '#e07b54' }} />
                </span>
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Try: chicken, pasta, sushi..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  style={{ outline: 'none', boxShadow: 'none' }}
                />
                {query && (
                  <button
                    className="btn bg-white border-0"
                    onClick={() => { setQuery(''); setResults([]); setSearched(false); }}
                  >
                    <FaTimes className="text-muted" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">

        {/* ── Loading ── */}
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border mb-3" style={{ color: '#e07b54' }} role="status">
              <span className="visually-hidden">Searching...</span>
            </div>
            <p className="text-muted">Searching recipes...</p>
          </div>
        )}

        {/* ── Results ── */}
        {!loading && searched && (
          <>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="text-muted mb-0">
                Found <strong style={{ color: '#e07b54' }}>{results.length}</strong> recipe{results.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
              </h5>
            </div>

            {results.length > 0 ? (
              <div className="row g-4">
                {results.map(meal => (
                  <div key={meal.idMeal} className="col-sm-6 col-lg-4 col-xl-3">
                    <Link href={`/products/${meal.idMeal}`} className="text-decoration-none">
                      <div className="card h-100">
                        <div className="position-relative" style={{ height: 190 }}>
                          <Image
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            fill
                            sizes="(max-width: 576px) 100vw, 25vw"
                            style={{ objectFit: 'cover' }}
                          />
                          <span className="position-absolute top-0 start-0 m-2 badge rounded-pill" style={{ background: '#e07b54', fontSize: '0.7rem' }}>
                            {meal.strCategory}
                          </span>
                          <span className="position-absolute top-0 end-0 m-2 badge rounded-pill" style={{ background: 'rgba(45,74,62,0.9)', fontSize: '0.7rem' }}>
                            🌍 {meal.strArea}
                          </span>
                        </div>
                        <div className="card-body p-3">
                          <h6 className="fw-bold mb-0" style={{ color: '#1a1a1a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {meal.strMeal}
                          </h6>
                        </div>
                        <div className="card-footer bg-transparent border-0 pt-0 pb-3 px-3">
                          <div className="btn btn-primary w-100 btn-sm">View Recipe →</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5">
                <div style={{ fontSize: '4rem' }}>🍽</div>
                <h5 className="text-muted mt-3">No recipes found for &ldquo;{query}&rdquo;</h5>
                <p className="text-muted">Try a different keyword like <em>chicken</em>, <em>pasta</em>, or <em>beef</em></p>
              </div>
            )}
          </>
        )}

        {/* ── Before search ── */}
        {!loading && !searched && (
          <div className="text-center py-5">
            <div style={{ fontSize: '5rem', marginBottom: 16 }}>🔎</div>
            <h5 className="text-muted mb-2">Start typing to search</h5>
            <p className="text-muted small">Try: chicken, pasta, pizza, sushi, beef, lamb...</p>

            {/* Suggestion chips */}
            <div className="d-flex gap-2 justify-content-center flex-wrap mt-4">
              {['Chicken', 'Pasta', 'Pizza', 'Beef', 'Sushi', 'Lamb', 'Seafood'].map(s => (
                <button
                  key={s}
                  className="btn btn-sm btn-outline-secondary rounded-pill"
                  onClick={() => setQuery(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}