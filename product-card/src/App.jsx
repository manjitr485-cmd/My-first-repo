import React from "react";
import ProductCard from "./components/ProductCard";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <h1>Product Store</h1>

      <div className="card-container">
        <ProductCard name="Laptop" price={55000} inStock={true} />
        <ProductCard name="Headphones" price={2000} inStock={false} />
        <ProductCard name="Smartphone" price={25000} inStock={true} />
      </div>
    </div>
  );
}

export default App;