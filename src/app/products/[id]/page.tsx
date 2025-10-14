import Link from "next/link";
import { FaArrowLeft, FaYoutube, FaExternalLinkAlt } from "react-icons/fa";

type Article = {
  idMeal: number;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strInstructions: string;
  strSource: string;
  strImageSource: string;
  dateModified: string;
};

type Props = {
  params: {
    id: string;
  };
};

const ProductDetails = async ({ params }: Props) => {
  const { id } = params as { id: string };
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch meal details");
  }

  const result = await res.json();
  const data: Article = result.meals[0];

  return (
    <div className="container my-5 pt-5">
<h2 className="text-center pt-4 text-primary fw-bold mb-5">Healthy & Yummy Recipes</h2>


      <div className="text-center mb-4">
      <h3 className="fw-bold text-dark fs-2 mb-3 text-start">Name Meal : {data.strMeal}</h3>

        <img
          src={data.strMealThumb}
          alt={data.strMeal}
          className="img-fluid rounded shadow-sm"
          style={{ maxHeight: "500px", objectFit: "cover", width:"100%" }}
        />
      </div>

      <div className="bg-light p-4 rounded shadow-sm">

        <div className="row text-center mb-4">
          <div className="col-md-4 mb-3 d-flex align-items-center gap-2">
            <strong className="text-secondary">Category :</strong>
            <p className="text-primary m-0">{data.strCategory}</p>
          </div>
          <div className="col-md-4 mb-3 d-flex align-items-center gap-2">
            <strong className="text-secondary">Area :</strong>
            <p className="text-primary m-0">{data.strArea}</p>
          </div>
          <div className="col-md-4 mb-3 d-flex align-items-center gap-2">
            <strong className="text-secondary">Tags :</strong>
            <p className="text-primary m-0">{data.strTags || "No Tags"}</p>
          </div>
        </div>

        <div className="mb-4">
          <h5 className="fw-bold text-dark mb-3">Ingredients :</h5>
          <ul className="list-group list-group-flush">
            {[
              data.strIngredient1,
              data.strIngredient2,
              data.strIngredient3,
              data.strIngredient4,
              data.strIngredient5,
              data.strIngredient6,
              data.strIngredient7,
              data.strIngredient8,
              data.strIngredient9,
              data.strIngredient10,
              data.strIngredient11,
              data.strIngredient12,
            ]
              .filter(ing => ing && ing.trim() !== "")
              .map((ingredient, index) => (
                <li key={index} className="list-group-item">
                  {ingredient}
                </li>
              ))}
          </ul>
        </div>

        <div className="mb-4">
          <h5 className="fw-bold text-dark mb-3">Instructions :</h5>
          <p style={{ whiteSpace: "pre-line", lineHeight: "1.8" }} className="text-secondary">
            {data.strInstructions}
          </p>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
          {data.strYoutube && (
            <a href={data.strYoutube} target="_blank" className="btn btn-danger d-flex align-items-center gap-2">
              <FaYoutube /> Watch on YouTube
            </a>
          )}
          {data.strSource && (
            <a href={data.strSource} target="_blank" className="btn btn-outline-success d-flex align-items-center gap-2">
              <FaExternalLinkAlt /> View Source
            </a>
          )}
        </div>

        <div className="text-center">
          <Link href="/products" className="btn btn-outline-primary d-inline-flex align-items-center gap-2">
            <FaArrowLeft /> Back to Recipe
          </Link>
        </div>
      </div>

      {data.dateModified && (
        <div className="text-muted text-center mt-5" style={{ fontSize: "0.9rem" }}>
          Last updated: {data.dateModified}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
