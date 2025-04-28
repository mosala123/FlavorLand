import Link from "next/link";

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
  strSource: string;
  strInstructions: string;
  strImageSource: string;
  dateModified: string;
};

const ProductsPages = async () => {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
  if (!res.ok) {
    throw new Error("failed to fetch api ");
  }
  
  const result = await res.json();
  const data: Article[] = result.meals;

  return (
    <div className="px-4 my-5 pt-5 pb-5 bg-white" style={{ overflow: "hidden" }}>
      <h2 className="text-center mb-5 text-primary fw-bold">Products Pages</h2>
      <div className="container">
        <div className="row g-4">
          {data.map((item) => (
            <div key={item.idMeal} className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100 shadow-sm border-0 ">
                <img
                  src={item.strMealThumb}
                  alt={item.strMeal}
                  className="card-img-top "
                  style={{ height: '250px', width: "100%", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <p className="card-title " style={{ fontSize: '0.9rem' }}>
                  <strong>strMeal :</strong>  {item.strMeal}
                  </p>

                  <p className="card-text mb-1" style={{ fontSize: '0.9rem' }}>
                    <strong>Category :</strong> {item.strCategory}
                  </p>
                  <p className="card-text mb-2" style={{ fontSize: '0.9rem' }}>
                    <strong>Area :</strong> {item.strArea}
                  </p>

                  <p className="card-text text-muted" style={{ fontSize: '0.85rem' }}>
                    <strong>Ingredients :</strong>  {item.strIngredient1}, {item.strIngredient2}, {item.strIngredient3}
                  </p>

                  <div className="mt-auto">
                    <Link href={`/products/${item.idMeal}`} className="btn btn-primary w-100">
                      View Details
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPages;
