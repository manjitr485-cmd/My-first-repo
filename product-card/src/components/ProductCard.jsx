import React from "react";
import "./styles.css";

function ProductCard({ name, price, inStock }) {
  return (
    <div className="card">
      <h2 className="product-name">{name}</h2>

      <p className="product-price">Price: ₹{price}</p>

      <p
        className={`stock ${
          inStock ? "in-stock" : "out-stock"
        }`}
      >
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

export default ProductCard;