'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaSearch, FaTimes } from "react-icons/fa";

type Search = {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
};

const ProductsPages = () => {
  return (
    <div className="container my-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-12 text-center mb-5">
          <h1 className="display-4 fw-bold text-primary">Our Meals</h1>
          <p className="lead text-muted">Discover delicious meals from around the world</p>
        </div>
        
        <div className="col-md-8 text-center">
          <div className="card border-0 shadow-lg">
            <div className="card-body p-5">
              <h3 className="card-title mb-4">Start Exploring</h3>
              <p className="card-text mb-4">
                Use the search bar above to find your favorite meals. We have a wide variety of delicious recipes from different cuisines.
              </p>
              <div className="d-flex justify-content-center">
                <div className="bg-primary rounded-circle p-3 d-inline-flex">
                  <FaSearch size={30} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MealSearch = () => {
  const [meals, setMeals] = useState<Search[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchMeals = async () => {
      if (!searchTerm.trim()) {
        setMeals([]);
        setIsSearching(false);
        return;
      }

      setIsLoading(true);
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await res.json();
        setMeals(data.meals || []);
        setIsSearching(true);
      } catch (error) {
        console.error("Error fetching meals:", error);
        setMeals([]);
      } finally {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchMeals();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleClearSearch = () => {
    setSearchTerm("");
    setMeals([]);
    setIsSearching(false);
  };

  return (
    <div className="container my-5 pt-5">
      {/* Input search bar */}
      <div className="input-group mb-4 pt-5 shadow-sm">
        <span className="input-group-text bg-primary text-white">
          <FaSearch />
        </span>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search for meals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          className="btn btn-outline-secondary" 
          onClick={handleClearSearch}
          disabled={!searchTerm}
        >
          <FaTimes />
        </button>
      </div>

      {/* حالة التحميل */}
      {isLoading && (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Searching for meals...</p>
        </div>
      )}

      {/* عرض النتائج أو الصفحة الرئيسية */}
      {!isSearching && !isLoading && <ProductsPages />}

      {isSearching && !isLoading && (
        <>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="text-primary">
              Search Results {meals.length > 0 && `(${meals.length})`}
            </h3>
          </div>

          {meals.length > 0 ? (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {meals.map((meal) => (
                <div key={meal.idMeal} className="col">
                  <div className="card h-100 shadow-sm border-0 meal-card">
                    <img
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{meal.strMeal}</h5>
                      <div className="mt-auto">
                        <Link 
                          href={`/products/${meal.idMeal}`} 
                          className="btn btn-primary w-100"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center my-5 py-5">
              <div className="card border-0 shadow-sm">
                <div className="card-body py-5">
                  <div className="mb-4">
                    <FaSearch size={50} className="text-muted" />
                  </div>
                  <h4 className="text-muted mb-3">No meals found</h4>
                  <p className="text-muted mb-4">
                    We couldn't find any meals matching "{searchTerm}". 
                    Try searching for something else.
                  </p>
                  <button 
                    className="btn btn-primary"
                    onClick={handleClearSearch}
                  >
                    Clear Search
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* زر العودة */}
      <div className="text-center mt-5">
        <Link href="/products" className="btn btn-outline-primary d-inline-flex align-items-center gap-2">
          <FaArrowLeft /> Back to Products
        </Link>
      </div>
    </div>
  );
};

export default MealSearch;