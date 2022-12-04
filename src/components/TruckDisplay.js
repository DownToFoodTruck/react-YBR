import React from "react";
import TruckSelector from "./TruckSelector";

export const TruckDisplay = ({ name, img }) => {
  console.log({ name }, { img });
  const namer =
    { name } == null
      ? ""
      : Object.entries({ name }).map(
          ([key, value]) =>
            `<div>${value.map((e) => Object.entries(e)[0])}</div>`
        );
  return (
    <div className="truck-display">
      {namer}
      <section>TRUCKS DISPLAYED HERE</section>
    </div>
  );
};
