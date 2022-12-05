import React from "react";
import TruckSelector from "./TruckSelector";

export const TruckDisplay = (name) => {
  const truckData = name.name;

  return (
    <div
      className="truck-display"
      onClick={() => {
        alert(
          "THIS SHOULD PULL UP OUR SWEET ASS MODAL WITH PRELOADED INFORMATION FOR   " +
            truckData.Name
        );
      }}
    >
      <section>{truckData.Name}</section>
      <div>
        <img className="truck-profile" src={truckData.P1}></img>
      </div>
    </div>
  );
};
