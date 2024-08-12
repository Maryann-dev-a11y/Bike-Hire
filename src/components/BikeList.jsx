import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BikeList = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/bikes')
      .then(response => setBikes(response.data))
      .catch(error => console.error('Error fetching bikes:', error));
  }, []);

  return (
    <div>
      <h1>Available Bikes</h1>
      <ul>
        {bikes.map((bike) => (
          <li key={bike.id}>
            <Link to={`/bike/${bike.id}`}>
              {bike.name} - {bike.type}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BikeList;
