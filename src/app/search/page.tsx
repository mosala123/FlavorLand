'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

type Search = {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
};

const MealSearch = () => {
  const [meals, setMeals] = useState<Search[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await res.json();

      setMeals(data.meals || []);
    };

    if (searchTerm) {
      fetchMeals();
    }
  }, [searchTerm]);

  return (
    <div className="container my-5 pt-5 ">
      {/* Input search bar */}
      <div className="input-group mb-4 pt-5 ">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search for meals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary" onClick={() => setSearchTerm("")}>
          Clear
        </button>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div key={meal.idMeal} className="col">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{meal.strMeal}</h5>
                  <Link href={`/products/${meal.idMeal}`} className="btn btn-primary w-100">
  View Details
</Link>


                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No meals found</p>
          </div>
        )}
      </div>
      <div className="text-center">
        <Link href="/products" className="btn btn-outline-primary d-inline-flex align-items-center gap-2">
          <FaArrowLeft /> Back to Products
        </Link>
      </div>
    </div>
  );
};

export default MealSearch;
