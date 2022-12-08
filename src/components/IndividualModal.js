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
            <p>
              <h3>
                <a
                  href={
                    truckInfo.Address != "NULL"
                      ? "https://www.google.com/maps/place/" +
                        truckInfo.Address.replace(" ", "+")
                      : "#"
                  }
                >
                  HERE
                </a>
              </h3>
            </p>
            <p>{truckInfo.Phone != "NULL" ? truckInfo.Phone : ""}</p>
            <a
              style={{ textDecoration: "none" }}
              href={truckInfo.Site != "NULL" ? truckInfo.Site : ""}
              target="_blank"
            >
              {truckInfo.Site != "NULL" ? truckInfo.Site : ""}
            </a>
            <p>{truckInfo.Email != "NULL" ? truckInfo.Email : ""}</p>
            <p>
              {truckInfo.Description != "NULL"
                ? truckInfo.Description.toUpperCase()
                : ""}
            </p>
            <p>
              {truckInfo.Hours_of_Operation != "NULL"
                ? truckInfo.Hours_of_Operation
                : ""}
            </p>
            <div>Cuisine tags: {truckInfo.Tags}</div>
            {/* <div>{truckInfo.Profile}</div> */}

            <div className="truck-modal-pics">
              <img
                src={
                  truckInfo.P1 != "NULL"
                    ? truckInfo.P1
                    : "../Images/Truck-Avatar.png"
                }
              />
              <img
                src={
                  truckInfo.P2 != "NULL"
                    ? truckInfo.P2
                    : "../Images/Truck-Avatar.png"
                }
              />
              <img
                src={
                  truckInfo.P3 != "NULL"
                    ? truckInfo.P2
                    : "../Images/Truck-Avatar.png"
                }
              />
            </div>
            <div onClick={() => alert("MAYBE A SICK ASS PING OF THE VENDOR")}>
              WHERE AM I???
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualModal;
