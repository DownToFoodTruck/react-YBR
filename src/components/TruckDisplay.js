import React from "react";
import TruckSelector from "./TruckSelector";

export const TruckDisplay = (name) => {
  console.log(name.name.Name);

  return (
    <div className="truck-display">
      <section>TRUCKS DISPLAYED HERE</section>
      <div>
        {name.name.Name}
        <img src={name.name.P1}></img>
      </div>
    </div>
  );
};
