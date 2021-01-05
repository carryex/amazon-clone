import React from "react";
import "./Product.styles.scss";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="info">
        <p>{title}</p>
        <p className="price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
