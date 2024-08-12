import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const cartItem = JSON.parse(localStorage.getItem('cart'));

  if (!cartItem) return <div>Your cart is empty.</div>;

  const handleProceedToPayment = () => {
    navigate('/payment');
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <p>Bike: {cartItem.name}</p>
      <p>Duration: {cartItem.duration} hours</p>
      <p>Total Price: ${cartItem.totalPrice}</p>
      <button onClick={handleProceedToPayment}>Proceed to Payment</button>
    </div>
  );
};

export default Cart;
