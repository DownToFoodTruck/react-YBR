import React from "react"

export const TruckDisplay = ({name, img}) => {
console.log(name)
console.log(img)

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
