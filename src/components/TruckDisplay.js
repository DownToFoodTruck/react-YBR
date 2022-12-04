import React from "react";
import TruckSelector from "./TruckSelector";

export const TruckDisplay = ({ name, img }) => {
  console.log({ name }, { img });
  // console.log("NAME TYPE  ", Object.entries({ name }).values);
  const namer =
    { name } == null
      ? ""
      : Object.entries({ name }).map(
          ([key, value]) =>
            `<div>${value.map((e) => Object.entries(e).key)}</div>`
        );
  // const nameStuff = namer.map((e) => <div>{e}</div>);
  return (
    <div className="truck-display">
      {namer}
      <section>TRUCKS DISPLAYED HERE</section>
    </div>
  );
};
