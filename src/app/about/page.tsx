import Link from "next/link";
import Image from "next/image";
import { FaHeart, FaStar, FaLeaf, FaUtensils } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import image5 from "../../../public/bg1.jpg";
import image4 from "../../../public/premium_photo-1669261882830-1e504a9abf1d.avif";
import image3 from "../../../public/premium_photo-1713087472522-9ebe85e736bf.avif";
import image2 from "../../../public/photo-1555939594-58d7cb561ad1.avif";
import image1 from "../../../public/photo-1606890737304-57a1ca8a5b62.avif";
import image0 from "../../../public/photo-1661529515567-dcb300f41da5.avif";

const AboutPages = () => {
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        className="px-3 bg-dark text-white text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${image5.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "70vh",
          padding: "60px 20px",
          overflow: "hidden",
        }}
      >
        <h1 className="display-3 fw-bold mb-3 text-primary" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}>
          Welcome to FlavorLand
        </h1>
        <p className="lead fw-semibold text-light" style={{ maxWidth: "700px", textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
          Your ultimate destination for discovering delightful recipes, creative dishes, and culinary inspiration!
        </p>
      </div>

      <section className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold text-primary mb-3 d-flex align-items-center gap-3">
              Who We Are <FaHeart className="text-danger mb-1" />
            </h2>
            <p className="text-muted fs-5">
              At FlavorLand, we believe that every meal tells a story. Our mission is to share the magic of cooking with easy, delicious, and inspiring recipes from around the world.
            </p>
            <p className="text-muted fs-5">
              Whether you're a beginner or a master chef, you'll find the perfect dish to light up your table.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <Image src={image0} alt="About FlavorLand" className="img-fluid rounded-4 shadow-sm" />
          </div>
        </div>
      </section>

      <section className="bg-light py-5 px-3">
        <div className="container">
          <h2 className="text-center fw-bold text-success mb-5 d-flex align-items-center justify-content-center gap-2">
            Our Mission <FaLeaf className="text-success mb-1" />
          </h2>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card px-3 py-5 text-center d-flex align-items-center justify-content-center flex-column h-100">
                <FaUtensils size={50} className="text-primary mb-3" />
                <h4 className="fw-bold">Delicious Recipes</h4>
                <p className="text-muted">We offer a wide range of tasty recipes crafted with love for every taste and occasion.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card px-3 py-5 text-center d-flex align-items-center justify-content-center flex-column h-100">
                <FaStar size={50} className="text-warning mb-3" />
                <h4 className="fw-bold">High Quality</h4>
                <p className="text-muted">Every recipe is tested and perfected to ensure you get the best culinary experience possible.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card px-3 py-5 text-center d-flex align-items-center justify-content-center flex-column h-100">
                <FaHeart size={50} className="text-danger mb-3" />
                <h4 className="fw-bold">Passion for Cooking</h4>
                <p className="text-muted">Cooking is more than food; it's art, passion, and a way to bring people together.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Content Section */}
      <section className="container py-5">
        <h2 className="text-center fw-bold text-info mb-5">What We Offer</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card  py-4 px-3 h-100 text-center">
              <h4 className="fw-bold">Wide Variety of Recipes</h4>
              <p className="text-muted">Explore a diverse collection of recipes from various cuisines and cooking styles.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card  py-4 px-3 h-100 text-center">
              <h4 className="fw-bold">Healthy Options</h4>
              <p className="text-muted">Find recipes that promote health and wellness, using fresh and nutritious ingredients.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card py-4 px-3  h-100 text-center">
              <h4 className="fw-bold">Expert Tips</h4>
              <p className="text-muted">Get professional cooking tips and tricks to elevate your culinary skills.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center my-5">
        <Link href="/products" className="btn btn-lg btn-outline-primary mx-2">
          Explore Recipes
        </Link>
        <Link href="/" className="btn btn-lg btn-outline-success mx-2">
          Back to Home
        </Link>
      </div>

      <footer className="bg-dark text-white text-center py-4">
        <p className="mb-0">© 2025 FlavorLand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPages;
