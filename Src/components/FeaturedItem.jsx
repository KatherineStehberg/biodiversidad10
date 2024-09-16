import React from 'react';

const FeaturedItem = ({ image, title, price, oldPrice, badge, rating }) => {
  return (
    <div className="featured-item">
      <div className="product-image">
        <img src={image} alt={title} />
        {badge && <span className={`badge ${badge.toLowerCase()}`}>{badge}</span>}
      </div>
      <div className="product-details">
        <h3>{title}</h3>
        {price && <p>Desde <span className="price">${price}</span></p>}
        {oldPrice && <span className="old-price">${oldPrice}</span>}
        {rating && <div className="rating">★{rating}☆</div>}
      </div>
    </div>
  );
};

export default FeaturedItem;
