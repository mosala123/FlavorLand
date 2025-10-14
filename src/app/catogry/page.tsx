"use client";

type Articeles = {
    idCategory: number;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
};

import Link from "next/link";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import image5 from "../../../public/bg1.jpg";

const CatogryPages = () => {
    const [categories, setCategories] = useState < Articeles[] > ([]);
    const [selectedCategory, setSelectedCategory] = useState < string > ("");

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
                const data = await response.json();
                setCategories(data.categories);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    const handleAllClick = () => {
        setSelectedCategory("");
    };

    return (
        <div className="bg-light pt-5 overflow-hidden">

            {/* Categories Section */}
            <section className="container my-5">
                <h2 className="text-center mb-5 fw-bold text-secondary">Explore Our Categories</h2>

                {/* Filter Buttons */}
                <div className="d-flex justify-content-center mb-4 flex-wrap gap-3" >
                    <button
                        className={`btn   ${selectedCategory === "" ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={handleAllClick}
                    >
                        All
                    </button>
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            className={`btn mx-2 ${selectedCategory === cat.strCategory ? "btn-primary" : "btn-outline-primary"}`}
                            onClick={() => handleCategoryClick(cat.strCategory)}
                        >
                            {cat.strCategory}
                        </button>
                    ))}
                </div>

                {/* Category Cards */}
                <div className="row g-5 justify-content-center">
                    {categories
                        .filter((cat) => selectedCategory === "" || cat.strCategory === selectedCategory)  
                        .map((cat, index) => (
                            <div key={index} className=" col-lg-4   col-md-6  col-sm-12 text-center">
                                <div className="card p-3">
                                <div className="    overflow-hidden rounded-4 shadow-sm mb-3" style={{ height: '250px' }}>
                                    <img
                                        src={cat.strCategoryThumb}
                                        alt={cat.strCategory}
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                        className="rounded-4 p-0 "
                                    />
                                </div>
                                <h4 className="  mb-2"><strong>Recipe Name : </strong> {cat.strCategory}</h4>
                                <p className="text-muted"> <strong>Delicious : </strong> {cat.strCategory}  </p>
                                <p className="text-muted"> <strong>des : </strong> {cat.strCategoryDescription} </p>

                                    </div>
                            </div>
                        ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-4 mt-5">
                <p className="mb-0">© 2025 All rights reserved - Delicious Recipes Website</p>
            </footer>
        </div>
    );
};

export default CatogryPages;