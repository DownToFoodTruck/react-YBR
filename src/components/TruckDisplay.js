import React from "react";
import TruckSelector from "./TruckSelector";

export const TruckDisplay = ({ name, img }) => {
  console.log({ name }, { img });

  const namer =
    // check if any input has been entered, if not return blank string else return name mapped to divs
    Object.entries({ name })[0][1].length == 0
      ? ""
      : Object.entries({ name }).map(([key, value]) =>
          value.map((e) => `${Object.entries(e)[0]}`.replace("name,", ""))
        );
  return (
    <div className="truck-display">
      {namer}
      <section>TRUCKS DISPLAYED HERE</section>
    </div>
  );
};
