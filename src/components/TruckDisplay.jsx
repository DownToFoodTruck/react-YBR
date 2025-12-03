import React, { useState } from "react";
import IndividualModal from "./IndividualModal";
import { FaRegSadCry, FaEye, FaCheck } from "react-icons/fa";

export const TruckDisplay = (name) => {
  const truckData = name.name;
  const [show, setShow] = useState(false);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [isPosting, setIsPosting] = useState(false);
  const [isPosted, setIsPosted] = useState(false);

  // Check if truck was seen recently (within 30 minutes)
  const isSeenRecently = () => {
    if (!truckData.lastSeenTms) {
      return false;
    }

    const lastSeenTime = new Date(truckData.lastSeenTms);
    const currentTime = new Date();
    const timeDifferenceInMinutes = (currentTime - lastSeenTime) / (1000 * 60);

    return timeDifferenceInMinutes <= 30;
  };

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
          codeLatLng(coords.latitude, coords.longitude);
        },
        (error) => {
          console.log("Something went wrong getting your position!");
        }
      );
    }
  };

  getUserCoordinates();

  const postGeolocation = async (e) => {
    e.stopPropagation(); // Prevent triggering modal
    
    if (!lat || !long) {
      alert("Geolocation not available yet. Please try again.");
      return;
    }

    setIsPosting(true);
    try {
      const payload = {
        truck_id: truckData._id,
        truck_name: truckData.Name,
        latitude: lat,
        longitude: long,
        seenTms: new Date().toISOString(),
      };
      
      console.log("Posting geolocation:", payload);
      
      const response = await fetch("/api/geolocation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json();
        setIsPosted(true);
        console.log("Geolocation posted successfully:", result);
        
        // Reset after 3 seconds
        setTimeout(() => {
          setIsPosted(false);
        }, 3000);
      } else {
        const errorData = await response.json();
        alert(`Failed to post location: ${errorData.error}`);
        console.error("Error response:", errorData);
      }
    } catch (error) {
      console.error("Error posting geolocation:", error);
      alert("Error posting location: " + error.message);
    } finally {
      setIsPosting(false);
    }
  };


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
      <div className="truck-display-container">
        <IndividualModal
          onClose={() => setShow(false)}
          show={show}
          truckData={truckData}
        />
        <article className="truck-article">
          {isSeenRecently() && (
            <div className="seen-recently-badge">
              <FaEye size={14} />
              <span>Seen Recently</span>
            </div>
          )}
          <button 
            className={`geolocation-eye-btn ${isPosted ? 'posted' : ''} ${isPosting ? 'posting' : ''}`}
            onClick={postGeolocation}
            disabled={isPosting}
            title={isPosted ? "Location posted!" : "Post current location"}
          >
            {isPosting ? (
              <span className="spinner"></span>
            ) : isPosted ? (
              <FaCheck size={20} />
            ) : (
              <FaEye size={20} />
            )}
          </button>
          <img
            className="truck-profile"
            src={truckData.P1}
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "../Images/Truck-Avatar.png";
            }}
            alt={truckData.Name}
          />
        </article>
      </div>
      <div className="truck-profile-content">
        <h3>{truckData.Name}</h3>
      </div>
      <div onClick={() => setShow(true)}>
        {truckStatus("Open")}
      </div>
    </div>
  );
};
