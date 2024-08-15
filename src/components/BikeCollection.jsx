import React from "react";
import BikeCard from "./BikeCard";

function BikeCollection({ bikes }) {
  return (
    <div className="ui four column grid">
      <div className="row">
        {/* Rendering each bike card using the BikeCard component and passing the individual bike data as props */}
        {bikes.map((bike) => (
          <BikeCard key={bike.id} bike={bike} />
        ))}
      </div>
    </div>
  );
}

export default BikeCollection;
