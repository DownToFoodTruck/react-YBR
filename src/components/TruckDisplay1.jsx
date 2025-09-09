import React, { useState } from "react";
import TruckSelector from "./TruckSelector";
import IndividualModal from "./IndividualModal";

export const TruckDisplay = (name) => {
  const truckData = name.name;
  const [show, setShow] = useState(false);

  return (

    <div className="truck-display-container">

      <IndividualModal
        onClose={() => setShow(false)}
        show={show}
        truckData={truckData}
      />

      <article className="truck-article">
        

        <img
          className="truck-profile"
          src={truckData.P1}
          onClick={() => setShow(true)}
        ></img>

      </article>
    </div>

  );
};
