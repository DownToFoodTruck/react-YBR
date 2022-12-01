import React from "react";
import TruckSelector from "./TruckSelector";

export const TruckDisplay = ({ name, img }) => {
  console.log({ name }, { img });
  return (
    <div className="truck-display">
      <section>TRUCKS DISPLAYED HERE</section>
    </div>
  );
};
