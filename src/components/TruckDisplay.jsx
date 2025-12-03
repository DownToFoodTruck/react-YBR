import React, { useState } from "react";
import IndividualModal from "./IndividualModal";
import { FaRegSadCry } from "react-icons/fa";

export const TruckDisplay = (name) => {
  const truckData = name.name;
  const [show, setShow] = useState(false);

 const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  const geolocationAPI = navigator.geolocation;
  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      console.log("Geolocation API is not available in your browser!");
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          setLat(coords.latitude);
          setLong(coords.longitude);
          codeLatLng(coords.latitude, coords.longitude)
        },
        (error) => {
          console.log("Something went wrong getting your position!");
        }
      );
    }
  };

  getUserCoordinates()


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
            onClick={()=>alert(`${truckData.Name} is located at Latitude: ${lat}, Longitude: ${long}`)}
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
