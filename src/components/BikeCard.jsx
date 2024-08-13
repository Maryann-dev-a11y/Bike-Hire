import React from "react";

function BikeCard({bike}) {
  return (
    <div className="bike-card-container">
    <div className="bike-card">
    <img src={bike.image_url} alt={bike.name} className="bike-card-image" />
    <h3 className="bike-card-title">{bike.name}</h3>
    <p className="bike-card-description">{bike.type}</p>
    <p className="bike-card-description">{bike.price}</p>
    <a href="/payments">Rent Now</a>
  </div>
  </div>
);
};

export default BikeCard;
