import React, { useState } from "react";
import IndividualModal from "./IndividualModal";
import { FaRegSadCry } from "react-icons/fa";

export const TruckDisplay = (name) => {
  const truckData = name.name;
  const [show, setShow] = useState(false);

  const truckStatus = (truckDataStatus) => {
    if (truckDataStatus == "Open") {
      return (
        <div className="truck-status">
          <h3 >OPEN NOW</h3>
        </div>
      )
    }
    else {
      return (
        <div className="truck-status-closed">
          <h3 >Details</h3>
        </div>
      )
    }
  }

  return (
    <div className="truck-container">
      <div className="truck-display-container" >
        <IndividualModal
          onClose={() => setShow(false)}
          show={show}
          truckData={truckData}
        />
        <article className="truck-article">
          <img
            className="truck-profile"
            src={truckData.P1}
            loading="lazy"
            onError={(e) =>
              (e.target.onerror = null)(
                (e.target.src =
                  <FaRegSadCry className="truck-profile" />)
              )
            }
            alt={truckData.Name}
          />

        </article>
      </div>
      <div className="truck-profile-content">
        <h3>{truckData.Name}</h3>
      </div>
      <div onClick={() => setShow(true)}>
        {
          truckStatus("Open")
        }
      </div>
    </div>

  );
};
