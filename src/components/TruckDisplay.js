import React, { useState } from "react";
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
        <section className="truck-title">{truckData.Name}</section> <br />
        <div>
          <img
            className="truck-profile"
            src={truckData.P1}
            onClick={() => setShow(true)}
          ></img>
        </div>
      </article>
    </div>
  );
};
