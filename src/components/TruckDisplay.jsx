import React, { useState, useEffect } from "react";
import IndividualModal from "./IndividualModal";
import { FaRegSadCry, FaEye, FaCheck } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { upsertTruck, postGeolocation as postGeolocationThunk } from '../redux/slices/truckSliceNew';

export const TruckDisplay = (name) => {
  const truckData = name.name;
  const dispatch = useDispatch();
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

  useEffect(() => {
    // upsert the truck entity into the store so entities are saved
    if (truckData) dispatch(upsertTruck(truckData));
    // get user coordinates once on mount
    getUserCoordinates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      // dispatch the post geolocation thunk so backend update and entity update happen via Redux
      const res = await dispatch(postGeolocationThunk(payload)).unwrap();
      setIsPosted(true);
      console.log('Geolocation posted (thunk):', res);
      setTimeout(() => setIsPosted(false), 3000);
    } catch (err) {
      console.error('Error posting geolocation (thunk):', err);
      alert('Error posting location: ' + (err?.message || err));
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
              <span><a href={`https://maps.google.com/?q=${truckData.lastLat},${truckData.lastLong}`}>Seen Recently</a></span>
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
