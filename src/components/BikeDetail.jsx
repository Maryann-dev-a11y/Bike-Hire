import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Reviews from './Reviews';

const BikeDetail = () => {
  const { id } = useParams();
  const [bike, setBike] = useState(null);
  const [duration, setDuration] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/bikes/${id}`)
      .then(response => setBike(response.data))
      .catch(error => console.error('Error fetching bike details:', error));
  }, [id]);

  const handleAddToCart = () => {
    const cartItem = {
      ...bike,
      duration,
      totalPrice: bike.price * duration
    };
    localStorage.setItem('cart', JSON.stringify(cartItem));
    navigate('/cart');
  };

  if (!bike) return <div>Loading...</div>;

  return (
    <div>
      <h1>{bike.name}</h1>
      <p>Type: {bike.type}</p>
      <p>Price per hour: ${bike.price}</p>
      <div>
        <label>Rental Duration (hours): </label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          min="1"
        />
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <Reviews bikeId={id} />
    </div>
  );
};

export default BikeDetail;
