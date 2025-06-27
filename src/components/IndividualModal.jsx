import React from "react";
import { FaRegSadCry } from "react-icons/fa";

const IndividualModal = (props) => {
  if (!props.show) return null;

  const { truckData } = props;
  const truckPictures = [truckData.P1, truckData.P2, truckData.P3];
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
          {truckPictures.map((pic, index) => {return (
            <img
              key={index}
              src={
                pic != "NULL"
                  ? pic
                  : "../Images/Truck-Avatar.png"
              }
              loading="lazy"
              onError={(e) =>
                (e.target.onerror = null)(
                  (e.target.src =
                    <FaRegSadCry className="truck-profile" />)
                )
              }
            />
          )})}
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
