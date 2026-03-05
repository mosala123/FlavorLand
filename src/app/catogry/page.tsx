// catogry/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selected,   setSelected]   = useState('');
  const [loading,    setLoading]     = useState(true);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(r => r.json())
      .then(d => { setCategories(d.categories ?? []); setLoading(false); });
  }, []);

  const visible = selected
    ? categories.filter(c => c.strCategory === selected)
    : categories;

  return (
    <div style={{ background: '#faf8f5', minHeight: '100vh' }}>

      {/* ── Page Header ── */}
      <div
        className="py-5 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #f0a500 0%, #c45f38 100%)' }}
      >
        <div className="container py-3">
          <h1 className="fw-bold display-5 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            📚 Recipe Categories
          </h1>
          <p className="lead mb-0 opacity-75">
            {categories.length} cuisines & food types to explore
          </p>
        </div>
      </div>

      <div className="container py-5">

        {/* ── Filter buttons ── */}
        {!loading && (
          <div className="d-flex flex-wrap gap-2 justify-content-center mb-5">
            <button
              className={`btn rounded-pill btn-sm ${selected === '' ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setSelected('')}
            >
              All ({categories.length})
            </button>
            {categories.map(cat => (
              <button
                key={cat.idCategory}
                className={`btn rounded-pill btn-sm ${selected === cat.strCategory ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => setSelected(cat.strCategory)}
              >
                {cat.strCategory}
              </button>
            ))}
          </div>
        )}

        {/* ── Loading ── */}
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border" style={{ color: '#e07b54' }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {/* ── Category Cards ── */}
        {!loading && (
          <div className="row g-4">
            {visible.map(cat => (
              <div key={cat.idCategory} className="col-sm-6 col-lg-4">
                <Link href={`/products?category=${cat.strCategory}`} className="text-decoration-none">
                  <div className="card h-100">

                    {/* Category image */}
                    <div className="position-relative" style={{ height: 220 }}>
                      <Image
                        src={cat.strCategoryThumb}
                        alt={cat.strCategory}
                        fill
                        sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                      {/* Name overlay */}
                      <div
                        className="position-absolute bottom-0 start-0 w-100 p-3"
                        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent)' }}
                      >
                        <h5 className="text-white fw-bold mb-0" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {cat.strCategory}
                        </h5>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="card-body p-3">
                      <p className="text-muted small mb-3" style={{ lineHeight: 1.6 }}>
                        {cat.strCategoryDescription.slice(0, 120)}...
                      </p>
                      <div className="btn btn-primary w-100 btn-sm">
                        Browse {cat.strCategory} Recipes →
                      </div>
                    </div>

                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* ── Empty state ── */}
        {!loading && visible.length === 0 && (
          <div className="text-center py-5 text-muted">
            <div style={{ fontSize: '3rem' }}>🍽</div>
            <h5 className="mt-3">No categories found</h5>
          </div>
        )}

      </div>
    </div>
  );
}