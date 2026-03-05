// search/[id]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaExternalLinkAlt, FaArrowLeft, FaUtensils, FaGlobe, FaTag } from "react-icons/fa";

type Article = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string | null;
  strInstructions: string;
  strSource: string | null;
  [key: string]: string | number | null | undefined;
};

const SearchDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  
  if (!res.ok) {
    throw new Error("Failed to fetch meal details");
  }

  const result = await res.json();
  if (!result?.meals?.[0]) {
    throw new Error("Meal not found");
  }
  const data: Article = result.meals[0];

  // Collect ingredients
  const ingredients: Array<{ name: string; measure: string }> = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = data[`strIngredient${i}`];
    const measure = data[`strMeasure${i}`];

    if (typeof ingredient === "string" && ingredient.trim()) {
      ingredients.push({
        name: ingredient,
        measure: typeof measure === "string" ? measure : "",
      });
    }
  }

  return (
    <div className="container py-5 mt-5">
      {/* Back to search */}
      <Link href="/search" className="btn btn-outline-primary mb-4">
        <FaArrowLeft className="me-2" /> Back to Search
      </Link>

      <div className="row g-5">
        {/* Recipe Image */}
        <div className="col-lg-5">
          <Image
            src={data.strMealThumb}
            alt={data.strMeal}
            width={700}
            height={700}
            className="img-fluid rounded-4 shadow"
            style={{ height: "auto" }}
          />
        </div>

        {/* Recipe Info */}
        <div className="col-lg-7">
          <h1 className="display-5 fw-bold mb-3">{data.strMeal}</h1>
          
          <div className="d-flex gap-3 mb-4 flex-wrap">
            <span className="badge bg-primary px-3 py-2">
              <FaUtensils className="me-1" /> {data.strCategory}
            </span>
            <span className="badge bg-success px-3 py-2">
              <FaGlobe className="me-1" /> {data.strArea}
            </span>
            {data.strTags && (
              <span className="badge bg-info px-3 py-2">
                <FaTag className="me-1" /> {data.strTags}
              </span>
            )}
          </div>

          {/* Ingredients */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3">Ingredients:</h5>
            <div className="row g-2">
              {ingredients.map((item, index) => (
                <div key={index} className="col-md-6">
                  <div className="bg-light p-2 rounded">
                    <span className="fw-bold">{item.measure}</span> {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3">Instructions:</h5>
            <p className="text-muted" style={{ whiteSpace: "pre-line", lineHeight: "1.8" }}>
              {data.strInstructions}
            </p>
          </div>

          {/* External Links */}
          <div className="d-flex gap-3">
            {data.strYoutube && (
              <a 
                href={data.strYoutube} 
                target="_blank" 
                className="btn btn-danger"
                rel="noopener noreferrer"
              >
                <FaYoutube className="me-2" /> YouTube
              </a>
            )}
            {data.strSource && (
              <a 
                href={data.strSource} 
                target="_blank" 
                className="btn btn-outline-success"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt className="me-2" /> Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDetailPage;
