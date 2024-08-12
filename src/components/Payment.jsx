import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      localStorage.removeItem('cart');
      setIsProcessing(false);
      navigate('/');
      alert('Payment successful!');
    }, 2000);
  };

  return (
    <div>
      <h1>Payment</h1>
      <p>Processing payment...</p>
      <button onClick={handlePayment} disabled={isProcessing}>
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
  );
};

export default Payment;
