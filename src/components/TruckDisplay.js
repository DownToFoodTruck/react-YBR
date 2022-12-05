import React from "react";
import TruckSelector from "./TruckSelector";

export const TruckDisplay = (name) => {
  const truckData = name.name;

  return (
    <div className="truck-display">
      <section>{truckData.Name}</section>
      <div>
        <img className="truck-profile" src={truckData.P1}></img>
      </div>
    </div>
  );
};
