import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product/Product";

// import Product from "./Product/Product";

const Products = () => {
  const [products, set] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products").then(({ data }) => {
      set(data);
    });
  }, []);
  return (
    <div>
      <h1>Products</h1>
      <hr></hr>
      <br />
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", backgroundColor: "brown" }}>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
