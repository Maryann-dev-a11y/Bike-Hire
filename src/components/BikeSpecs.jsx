import React from 'react';


const BikeSpecs = ({ bikeId, onBack,bikes }) => {
  const rent = bikes.find((bike) => bike.id === bikeId);

  if (!rent) return <p>Bike not found</p>;

  return (
    <div className="bike-specs">
      <button onClick={onBack} className="back-button">Back</button>
      <img src={rent.image_url} alt={rent.name} className="bike-specs-image" />
      <h2>{rent.name}</h2>
      <p>{rent.type}</p>
      <ul>
        <li>Type: {rent.type}</li>
        <li>Frame Size: {rent.frameSize}</li>
        <li>Wheel Size: {rent.wheelSize}</li>
        <li>Price per Hour: ${rent.price}</li>
      </ul>
      <button className="button">Rent this Bike</button>
      
    </div>
  );
};

export default BikeSpecs;
