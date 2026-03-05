// products/page.tsx
import Link from 'next/link';
import Image from 'next/image';

type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
  strTags: string | null;
};

export default async function ProductsPage() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=', {
    cache: 'force-cache',
  });

  if (!res.ok) throw new Error('Failed to fetch recipes');

  const json = await res.json();
  const meals: Meal[] = json.meals ?? [];

  return (
    <div style={{ background: '#faf8f5', minHeight: '100vh' }}>

      {/* ── Page Header ── */}
      <div
        className="py-5 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #e07b54 0%, #c45f38 100%)', paddingTop: '5rem !important' }}
      >
        <div className="container py-3">
          <h1 className="fw-bold display-5 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            🍳 All Recipes
          </h1>
          <p className="lead mb-0 opacity-75">
            Discover {meals.length}+ delicious recipes from around the world
          </p>
        </div>
      </div>

      {/* ── Recipe Grid ── */}
      <div className="container py-5">
        <div className="row g-4">
          {meals.map(meal => (
            <div key={meal.idMeal} className="col-sm-6 col-lg-4 col-xl-3">
              <Link href={`/products/${meal.idMeal}`} className="text-decoration-none">
                <div className="card h-100">

                  {/* Image */}
                  <div className="position-relative" style={{ height: 200 }}>
                    <Image
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      fill
                      sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 25vw"
                      style={{ objectFit: 'cover' }}
                    />
                    {/* Category badge on image */}
                    <span
                      className="position-absolute top-0 start-0 m-2 badge rounded-pill"
                      style={{ background: '#e07b54', fontSize: '0.7rem' }}
                    >
                      {meal.strCategory}
                    </span>
                    {/* Area badge */}
                    <span
                      className="position-absolute top-0 end-0 m-2 badge rounded-pill"
                      style={{ background: 'rgba(45,74,62,0.9)', fontSize: '0.7rem' }}
                    >
                      🌍 {meal.strArea}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="card-body p-3">
                    <h6
                      className="card-title fw-bold mb-2"
                      style={{ color: '#1a1a1a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                    >
                      {meal.strMeal}
                    </h6>

                    {/* Tags */}
                    {meal.strTags && (
                      <p className="text-muted small mb-2" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        🏷 {meal.strTags.split(',').slice(0, 2).join(', ')}
                      </p>
                    )}

                    <div className="d-flex align-items-center justify-content-between mt-2">
                      <span className="text-muted small">⏱ ~30 min</span>
                      <span className="text-muted small">⭐ 4.8</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="card-footer bg-transparent border-top-0 pb-3 px-3">
                    <div className="btn btn-primary w-100 btn-sm">
                      View Recipe →
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}