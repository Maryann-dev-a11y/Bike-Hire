import React from "react";

function BikeCard() {
  return (
    <div className="ui column">
      <div className="ui card" key={bike.id} >
        <div className="image">
          <img alt="oh no!" src={bike.image_url} />
        </div>
        <div className="content">
          <div className="header">
            {bike.name}
          </div>
          <div className="meta text-wrap">
            <small>{bike.nickname}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bike.price}
          </span>
          <span>
            <i className="icon lightning" />
            {bike.type}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button className="ui mini red button"></button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BikeCard;
