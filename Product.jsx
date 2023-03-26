
import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
