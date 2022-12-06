import React, { useState } from "react";
import TruckSelector from "./TruckSelector";
import IndividualModal from "./IndividualModal";

export const TruckDisplay = (name) => {
  const truckData = name.name;
  const [show, setShow] = useState(false);
  return (
    <div className="truck-display">
      <IndividualModal
        onClose={() => setShow(false)}
        show={show}
        truckData={truckData}
      />
      <section>{truckData.Name}</section>
      <div>
        <img
          className="truck-profile"
          src={truckData.P1}
          onClick={() => setShow(true)}
        ></img>
      </div>
    </div>
  );
};
