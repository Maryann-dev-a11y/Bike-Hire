import React from "react";

function BikeCard({bike}) {
  return (
    <div className="ui column">
      <div className="ui card" key={bike.id} >
        <div className="image">
          <img alt="oh no!" src={bike.image_url} width={300}/>
        </div>
        <div className="content">
          <div className="header">
            <b>{bike.name}</b>
            
          </div>
          <div className="meta text-wrap">
            <b> NICKNAME: {bike.nickname}</b>
          </div>
          <br/>
        </div>
        <div className="extra content">
          <span>
            <b>
            RENT PRICE PER HOUR : {bike.price}
            </b>
          </span>
          <br/>
          <b>
            SUITABILITY :  {bike.type}
          </b>
          <span>
            <div className="ui center aligned segment basic">
              <button className="ui green button">Rent</button>
              <button className="ui blue button">View Details</button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BikeCard;
