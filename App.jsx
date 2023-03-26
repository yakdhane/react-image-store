
import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import data from './data';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = product => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="app">
      <ProductList products={data} handleAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
