
import React from 'react';

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <p>Total: {totalPrice}</p>
    </div>
  );
};

export default Cart;
