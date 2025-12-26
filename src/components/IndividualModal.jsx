import React, { useState, lazy, Suspense } from "react";
import { FaRegSadCry, FaMapMarkerAlt, FaGlobe, FaPhone, FaClock } from "react-icons/fa";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const IndividualModal = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
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
          ×
        </button>

        <div className="truck-modal-carousel">
          <Suspense fallback={<div className="loading-placeholder">Loading images...</div>}>
            <Carousel 
              activeIndex={activeIndex} 
              onSelect={(index) => setActiveIndex(index)}
              interval={null}
              className="carousel"
              fade={true}
            >
              {truckPictures.filter(pic => pic !== "NULL").map((pic, index) => (
                <Carousel.Item key={index}>
                  <div className="carousel-image-wrapper">
                    <img
                      className="modal-carousel-img"
                      src={pic}
                      alt={`${truckData.Name} - Image ${index + 1}`}
                      loading="eager"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "../Images/Truck-Avatar.png";
                      }}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Suspense>
        </div>

        <div className="truck-modal-content">
          <h2>{truckData.Name}</h2>
          
          {truckData.Description !== "NULL" && (
            <p className="truck-description">{truckData.Description}</p>
          )}

          <div className="truck-info-grid">
            {truckData.Address !== "NULL" && (
              <a
                className="info-item"
                href={`https://www.google.com/maps/place/${truckData.Address.replace(" ", "+")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt />
                <span>{truckData.Address}</span>
              </a>
            )}

            {truckData.Hours_of_Operation !== "NULL" && (
              <div className="info-item">
                <FaClock />
                <span>{truckData.Hours_of_Operation}</span>
              </div>
            )}

            {truckData.Phone !== "NULL" && (
              <a className="info-item" href={`tel:${truckData.Phone}`}>
                <FaPhone />
                <span>{truckData.Phone}</span>
              </a>
            )}

            {truckData.Site !== "NULL" && (
              <a 
                className="info-item" 
                href={truckData.Site} 
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe />
                <span>Website</span>
              </a>
            )}
          </div>

          {truckData.Tags && (
            <div className="truck-tags">
              {truckData.Tags.split(",").map((tag, index) => (
                <span key={index} className="tag">
                  {tag.trim()}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndividualModal;
