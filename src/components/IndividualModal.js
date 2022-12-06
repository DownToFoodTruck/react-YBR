import React from "react";

const IndividualModal = (props) => {
  if (!props.show) {
    return null;
  }
  const truckInfo = props.truckData;
  console.log(truckInfo);
  return (
    <>
      <div className="about-modal" onClick={props.onClose}>
        <div
          className="about-content"
          onClick={(event) => event.stopPropagation()}
        >
          <button className="about-modal-close-btn" onClick={props.onClose}>
            X
          </button>
          <div className="about-team-members"></div>
          <div>{truckInfo.Name}</div>
          <div>{truckInfo.PermitName}</div>
          <div>{truckInfo.Address}</div>
          <div>{truckInfo.Phone}</div>
          <div>{truckInfo.Site}</div>
          <div>{truckInfo.Email}</div>
          <div>{truckInfo.Description}</div>
          <div>{truckInfo.Hours_of_Operation}</div>
          <div>{truckInfo.Tags}</div>
          <div>{truckInfo.Profile}</div>
          <div>{truckInfo.P1}</div>
          <div>{truckInfo.P2}</div>
          <div>{truckInfo.P3}</div>
        </div>
      </div>
    </>
  );
};

export default IndividualModal;
