import { useState } from "react";
import { useLocation } from "react-router-dom";
import RatingReview from "./RatingReview";


function BikeDetails({ userId }) {
  const [rating, setRating] = useState(0);
  const bike = useLocation().state.bike;

  return (
    <div className="bike2-details-container">
      <div
        className="bike2-background"
        style={{ backgroundImage: `url(${bike.image_url})` }}
      >
        <div className="bike2-overlay">
          <h2 className="bike2-name">{bike.name}</h2>
        </div>
      </div>
      <div className="bike2-info">
      <p><strong>Model :</strong> {bike.model}</p>
      <p><strong>Terrain:</strong> {bike.type}</p>
        <p><strong>Description:</strong> {bike.description}</p>
        <p><strong>Frame Size:</strong> {bike.frameSize}</p>
        <p><strong>Wheel Size:</strong> {bike.wheelSize}</p>
        <h3 className="bike-card-description"> $:{bike.price}</h3>
        <br />
        <a href="/payments" className="btn2-rent">Rent Now</a>
        <br />
        <br />
        <a href="/bikes" className="btn">Back</a>
      </div>
      <RatingReview rating={rating} setRating={setRating} bikeId={bike.id} userId={userId} />
    </div>
  );
}

export default BikeDetails;
