import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const defaultMarker = new L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [13, 0],
});

const center = [51.505, -0.09];

const MapComp = () => {
  return (
    <MapContainer
      style={{ width: "100%", height: "100vh" }}
      center={center}
      zoom={13}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center} icon={defaultMarker}>
        <Popup className="request-popup"></Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComp;

// This code imports the MapContainer, TileLayer, Marker, and Popup components from the react-leaflet library. It also imports the L library from leaflet. It then creates a defaultMarker icon and sets a center coordinate. Finally, it renders a MapContainer component with a TileLayer and Marker component nested inside. The Marker component has its position set to the center coordinate and uses the defaultMarker icon. It also has a Popup component nested inside of it with an empty className attribute. The MapComp is then exported as a default export.
