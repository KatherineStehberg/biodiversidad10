import React from "react";

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <h2>Productos Destacados</h2>
      <div className="featured-products-container">
        {/* Product 1 */}
        <div className="featured-product">
          <div className="product-image">
            <img
              src="/Frontend/Src/assets/img/KitDeJardineria.jpg"
              alt="Kit de jardinería"
            />
          </div>
          <div className="product-details">
            <h3>Kit de jardinería</h3>
            <p>
              Solo desde <span className="price">$9.99</span>
            </p>
            <a
              href="/Frontend/Src/pages/Productos.html"
              className="add-to-cart-button"
            >
              Ir a los productos
            </a>
          </div>
        </div>
        <div className="featured-product">
          <div className="product-image">
            <img
              src="/Frontend/Src/assets/img/KitDeJardineria.jpg"
              alt="Kit de jardinería"
            />
          </div>
          <div className="product-details">
            <h3>Kit de jardinería</h3>
            <p>
              Solo desde <span className="price">$9.99</span>
            </p>
            <a
              href="/Frontend/Src/pages/Productos.html"
              className="add-to-cart-button"
            >
              Ir a los productos
            </a>
          </div>
        </div>
        <div className="featured-product">
          <div className="product-image">
            <img
              src="/Frontend/Src/assets/img/KitDeJardineria.jpg"
              alt="Kit de jardinería"
            />
          </div>
          <div className="product-details">
            <h3>Kit de jardinería</h3>
            <p>
              Solo desde <span className="price">$9.99</span>
            </p>
            <a
              href="/Frontend/Src/pages/Productos.html"
              className="add-to-cart-button"
            >
              Ir a los productos
            </a>
          </div>
        </div>

        {/* Repeat for other products */}
      </div>
    </section>
  );
};

export default FeaturedProducts;
