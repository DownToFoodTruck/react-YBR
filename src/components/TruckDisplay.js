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
            onError={(e) =>
              (e.target.onerror = null)(
                (e.target.src =
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Pain_10_png_rendered.png/640px-Pain_10_png_rendered.png")
              )
            }
            onClick={() => setShow(true)}
          ></img>
        </div>
      </article>
    </div>
  );
};
