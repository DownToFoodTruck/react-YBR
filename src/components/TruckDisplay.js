import React from "react";
import TruckSelector from "./TruckSelector";

export const TruckDisplay = (name) => {
  const truckData = name.name;

  return (
    <div
      className="truck-display"
      onClick={() => {
        alert(
          "PULL UP A SWEET ASS MODAL WITH PASSED DATA    " +
            JSON.stringify(truckData)
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
