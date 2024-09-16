import React from "react";

const FeaturedServices = () => {
  return (
    <section className="featured-services">
      <h2>Servicios Destacados</h2>
      <div className="featured-products-container">
        {/* Service 1 */}
        <div className="featured-product">
          <div className="product-image">
            <img
              src="/Frontend/Src/assets/img/educacionambiental.jpg"
              alt="Educacion Ambiental"
            />
          </div>
          <div className="product-details">
            <h3>Educacion Ambiental</h3>
            <p>
              Desde <span className="price">$49.99</span>
            </p>
          </div>
          <a
            href="/Frontend/Src/pages/services.html"
            className="add-to-cart-button"
          >
            Ir a los servicios
          </a>
        </div>
        <div className="featured-product">
          <div className="product-image">
            <img
              src="/Frontend/Src/assets/img/educacionambiental.jpg"
              alt="Educacion Ambiental"
            />
          </div>
          <div className="product-details">
            <h3>Educacion Ambiental</h3>
            <p>
              Desde <span className="price">$49.99</span>
            </p>
          </div>
          <a
            href="/Frontend/Src/pages/services.html"
            className="add-to-cart-button"
          >
            Ir a los servicios
          </a>
        </div>
        <div className="featured-product">
          <div className="product-image">
            <img
              src="/Frontend/Src/assets/img/educacionambiental.jpg"
              alt="Educacion Ambiental"
            />
          </div>
          <div className="product-details">
            <h3>Educacion Ambiental</h3>
            <p>
              Desde <span className="price">$49.99</span>
            </p>
          </div>
          <a
            href="/Frontend/Src/pages/services.html"
            className="add-to-cart-button"
          >
            Ir a los servicios
          </a>
        </div>
        {/* Repeat for other services */}
      </div>
    </section>
  );
};

export default FeaturedServices;
