"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import image5 from "../../../public/bg1.jpg";
import image4 from "../../../public/photo-1661529515567-dcb300f41da5.avif";
import image3 from "../../../public/premium_photo-1713087472522-9ebe85e736bf.avif";
import image2 from "../../../public/photo-1606890737304-57a1ca8a5b62.avif";
 
import Testimonials from "@/component/peopleSay/Testimonials";

const HomePages = () => {
  return (
    <div className="bg-light pt-5 overflow-hidden">
      {/* Header */}
      <header className="position-relative text-center bg-white shadow-sm mb-5 px-3 overflow-hidden" style={{ width: "100%", maxWidth: "100%", height: "600px" }}>
        <Image
          src={image5}
          alt="Header Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
          style={{ opacity: 1, height: "100%" }}
        />
        <div className="position-relative z-1 d-flex flex-column justify-content-center align-items-center h-100">
          <h1 className="display-3 fw-bold mb-3 text-primary">🍽️ Welcome to FlavorLand</h1>
          <p className="lead text-light">
            Dive into a delicious world of flavors! Explore inspiring recipes, creative ideas, and meals made with passion and love.
          </p>
          <div className="mt-4">
            <Link href="/about" className="btn btn-danger btn-lg mx-2">
              About Us
            </Link>
            <Link href="/products" className="btn btn-success btn-lg mx-2">
              Browse Recipes
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="container my-5">
        <h2 className="text-center mb-5 fw-bold text-secondary">Our Features</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm border-0">
             <div className="group overflow-hidden">  <Image src={image2} alt="Feature 1" width={400}  style={{height:"280px"}} className=" transition-transform duration-300 card-img-top group-hover:scale-110" /></div>
              <div className="card-body">
                <h5 className="card-title">Quick & Easy Recipesb</h5>
                <p className="card-text">Our recipes are designed to be quick, easy, and perfect for busy days!</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm border-0">
               <div className="group overflow-hidden"><Image src={image3} alt="Feature 2" width={400}  style={{height:"280px"}}  className=" transition-transform duration-300 card-img-top group-hover:scale-110" /></div>
              <div className="card-body">
                <h5 className="card-title">Healthy Meals</h5>
                <p className="card-text">Explore healthy options for a balanced and nutritious diet. Fuel your body with the best!</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm border-0">
               <div className="group overflow-hidden"><Image src={image4} alt="Feature 3" width={400}   style={{height:"280px"}} className=" transition-transform duration-300 card-img-top group-hover:scale-110" /></div>
              <div className="card-body">
                <h5 className="card-title">Gourmet Dishes</h5>
                <p className="card-text">For the food enthusiasts who love to experiment with gourmet cooking. Elevate your meals to the next level!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    <Testimonials /> 
          
    </div>
  );
};

export default HomePages;
