// app/products/[id]/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { FaYoutube, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';

type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string | null;
  strInstructions: string;
  strSource: string | null;
  [key: string]: string | null | undefined;
};

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, {
    cache: 'force-cache',
  });

  if (!res.ok) throw new Error('Failed to fetch meal');

  const json      = await res.json();
  const meal: Meal = json.meals?.[0];
  if (!meal) throw new Error('Meal not found');

  // Collect all ingredients + measures from API (up to 20)
  const ingredients: { name: string; measure: string }[] = [];
  for (let i = 1; i <= 20; i++) {
    const name    = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`] ?? '';
    if (name && name.trim()) {
      ingredients.push({ name: name.trim(), measure: measure.trim() });
    }
  }

  // Split instructions into readable steps by newline
  const steps = meal.strInstructions
    .split('\n')
    .map(s => s.trim())
    .filter(s => s.length > 10); // remove blank / very short lines

  return (
    <div style={{ background: '#faf8f5', minHeight: '100vh' }}>

      {/* ── Hero banner with meal image ── */}
      <div className="position-relative" style={{ height: 420 }}>
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        {/* Dark gradient so text is readable */}
        <div
          className="position-absolute w-100 h-100"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)' }}
        />
        {/* Title and badges over image */}
        <div className="position-absolute bottom-0 start-0 w-100 p-4 p-md-5">
          <div className="container">
            <Link href="/products" className="btn btn-sm btn-light mb-3 rounded-pill d-inline-flex align-items-center  ">
              <FaArrowLeft className="me-2" size={12} /> Back to Recipesb
            </Link>
            <h1
              className="text-white fw-bold mb-3"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
            >
              {meal.strMeal}
            </h1>
            {/* Category / Area / Tags badges */}
            <div className="d-flex gap-2 flex-wrap">
              <span className="badge rounded-pill px-3 py-2" style={{ background: '#e07b54', fontSize: '0.82rem' }}>
                🍽 {meal.strCategory}
              </span>
              <span className="badge rounded-pill px-3 py-2" style={{ background: '#2d4a3e', fontSize: '0.82rem' }}>
                🌍 {meal.strArea}
              </span>
              {meal.strTags && meal.strTags.split(',').filter(Boolean).map(tag => (
                <span key={tag} className="badge rounded-pill px-3 py-2" style={{ background: 'rgba(240,165,0,0.9)', color: '#1a1a1a', fontSize: '0.82rem' }}>
                  🏷 {tag.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="container py-5">
        <div className="row g-5">

          {/* ════════════════════
              LEFT COLUMN
              — Ingredients
              — Quick info
              — Links
              ════════════════════ */}
          <div className="col-lg-4">

            {/* Ingredients card */}
            <div className="card mb-4">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#e07b54' }}>
                  🧂 Ingredients
                  <span className="badge ms-2 rounded-pill" style={{ background: '#faf8f5', color: '#e07b54', fontSize: '0.75rem' }}>
                    {ingredients.length}
                  </span>
                </h4>

                <div className="d-flex flex-column gap-2">
                  {ingredients.map((ing, i) => (
                    <div
                      key={i}
                      className="d-flex align-items-center gap-3 p-2 rounded-3"
                      style={{ background: '#faf8f5', border: '1px solid #e8e0d5' }}
                    >
                      {/* Ingredient photo from MealDB */}
                      <Image
                        src={`https://www.themealdb.com/images/ingredients/${encodeURIComponent(ing.name)}-Small.png`}
                        alt={ing.name}
                        width={38}
                        height={38}
                        className="rounded-2"
                        style={{ objectFit: 'contain', background: '#fff', padding: 3, flexShrink: 0 }}
                      />
                      {/* Ingredient name */}
                      <span className="fw-semibold small flex-grow-1" style={{ color: '#1a1a1a' }}>
                        {ing.name}
                      </span>
                      {/* Measure badge */}
                      {ing.measure && (
                        <span className="badge rounded-pill" style={{ background: '#e07b54', fontSize: '0.7rem', whiteSpace: 'nowrap' }}>
                          {ing.measure}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick info card */}
            <div className="card mb-4">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3">ℹ️ Quick Info</h5>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted small">Category</span>
                    <span className="fw-semibold small">{meal.strCategory}</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted small">Cuisine</span>
                    <span className="fw-semibold small">{meal.strArea}</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted small">Ingredients</span>
                    <span className="fw-semibold small">{ingredients.length} items</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted small">Cook Time</span>
                    <span className="fw-semibold small">~30 min</span>
                  </div>
                  {meal.strTags && (
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted small">Tags</span>
                      <span className="fw-semibold small text-end" style={{ maxWidth: 150 }}>{meal.strTags}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* YouTube + Source links */}
            <div className="d-flex flex-column gap-2">
              {meal.strYoutube && (
                <a
                  href={meal.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-danger w-100 rounded-pill d-inline-flex align-items-center"
                >
                  <FaYoutube className="me-2" />
                  Watch on YouTube
                </a>
              )}
              {meal.strSource && (
                <a
                  href={meal.strSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary w-100 rounded-pill d-inline-flex align-items-center"
                >
                  <FaExternalLinkAlt className="me-2" size={12} />
                  Original Source
                </a>
              )}
            </div>

          </div>


          {/* ════════════════════
              RIGHT COLUMN
              — Instructions
              — Second photo
              ════════════════════ */}
          <div className="col-lg-8">

            {/* Instructions card */}
            <div className="card mb-4">
              <div className="card-body p-4 p-md-5">
                <h4 className="fw-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  👨‍🍳 Instructions
                </h4>

                {/* Numbered steps */}
                <div className="d-flex flex-column gap-4">
                  {steps.map((step, i) => (
                    <div key={i} className="d-flex gap-4">
                      {/* Step number circle */}
                      <div
                        className="d-flex align-items-center justify-content-center rounded-circle fw-bold flex-shrink-0 text-white"
                        style={{ width: 36, height: 36, background: '#e07b54', fontSize: '0.85rem', marginTop: 3 }}
                      >
                        {i + 1}
                      </div>
                      {/* Step text */}
                      <p className="text-muted mb-0" style={{ lineHeight: 1.75, paddingTop: 5 }}>
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Second meal image */}
            <div className="card overflow-hidden">
              <div className="position-relative" style={{ height: 280 }}>
                <Image
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div
                  className="position-absolute bottom-0 start-0 w-100 p-3"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}
                >
                  <p className="text-white small fw-semibold mb-0">
                    🍽 {meal.strMeal} — Enjoy your meal!
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}