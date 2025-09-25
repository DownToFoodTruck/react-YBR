import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const position = [40.7128, -74.0060]; // Example: New York City

const Map = () => (
  <div style={{ height: '80vh', width: '100%' }}>
    <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Example marker in New York City.
        </Popup>
      </Marker>
    </MapContainer>
  </div>
);

export default Map;
