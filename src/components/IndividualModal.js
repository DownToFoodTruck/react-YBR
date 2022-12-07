import React from "react";

const IndividualModal = (props) => {
  if (!props.show) {
    return null;
  }

  const truckInfo = props.truckData;
  console.log(truckInfo);
  
  return (
    <>
      <div className="truck-modal" onClick={props.onClose}>
        <div
          className="truck-modal-container"
          onClick={(event) => event.stopPropagation()}
        >
          <button className="about-modal-close-btn" onClick={props.onClose}>
            X
          </button>

          <div className="truck-data">
            <h2>{truckInfo.Name}</h2>
            {/* <div>{truckInfo.PermitName}</div> */}
            <p><h3>{truckInfo.Address}</h3></p>
            <p>{truckInfo.Phone}</p>
            <a style={{ textDecoration: 'none' }} href={truckInfo.Site} target="_blank">{truckInfo.Site}</a>
            <p>{truckInfo.Email}</p>
            <p>{truckInfo.Description}</p>
            <p>{truckInfo.Hours_of_Operation}</p>
            <div>Cuisine tags: {truckInfo.Tags}</div> 
            {/* <div>{truckInfo.Profile}</div> */}

            <div className="truck-modal-pics">
              <img src={truckInfo.P1} />
              <img src={truckInfo.P2} />
              <img src={truckInfo.P3} />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default IndividualModal;
