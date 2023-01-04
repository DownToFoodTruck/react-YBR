import React from "react";

const IndividualModal = (props) => {
  if (!props.show) return null;

  const { truckData } = props;
  console.log(truckData);

  function modifySelection(tag) {
    alert(tag);
  }

  return (
    <div className="truck-modal" onClick={props.onClose}>
      <div
        className="truck-modal-container"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="about-modal-close-btn" onClick={props.onClose}>
          X
        </button>

        <div className="truck-data">
          <h2>{truckData.Name}</h2>
          <p>
            <h3>
              <a
                href={
                  truckData.Address != "NULL"
                    ? `https://www.google.com/maps/place/${truckData.Address.replace(
                        " ",
                        "+"
                      )}`
                    : "#"
                }
              >
                {truckData.Address != "NULL" ? truckData.Address : ""}
              </a>
            </h3>
          </p>

          <p>{truckData.Phone != "NULL" ? truckData.Phone : ""}</p>

          <a
            style={{ textDecoration: "none" }}
            href={truckData.Site != "NULL" ? truckData.Site : ""}
            target="_blank"
          >
            {truckData.Site != "NULL" ? truckData.Site : ""}
          </a>

          <p>{truckData.Email != "NULL" ? truckData.Email : ""}</p>
          <p>
            {truckData.Description != "NULL"
              ? truckData.Description.toUpperCase()
              : ""}
          </p>

          <p>
            {truckData.Hours_of_Operation != "NULL"
              ? truckData.Hours_of_Operation
              : ""}
          </p>
          <div>
            Cuisine tags:{" "}
            {truckData.Tags.split(",").map((e) => (
              <div>
                <a
                  onClick={() => {
                    modifySelection(e);
                  }}
                >
                  {e}
                </a>
              </div>
            ))}
          </div>

          <div className="truck-modal-pics">
            <img
              src={
                truckData.P1 != "NULL"
                  ? truckData.P1
                  : "../Images/Truck-Avatar.png"
              }
            />
            <img
              src={
                truckData.P2 != "NULL"
                  ? truckData.P2
                  : "../Images/Truck-Avatar.png"
              }
            />
            <img
              src={
                truckData.P3 != "NULL"
                  ? truckData.P3
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
  );
};

export default IndividualModal;
