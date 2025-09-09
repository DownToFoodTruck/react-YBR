import React, { useState } from "react";
import IndividualModal from "./IndividualModal";
import { FaRegSadCry } from "react-icons/fa";

export const TruckDisplay = (name) => {
  const truckData = name.name;
  const [show, setShow] = useState(false);

  return (
    <div className="truck-display-container" onClick={() => setShow(true)}>
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
          ></img>
      </article>
    </div>
  );
};
