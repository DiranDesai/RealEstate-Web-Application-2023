import React, { useMemo, useState } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: -15.41667,
  lng: 28.28333
};

function PropertyMap() {
  const [mapType, setMapType] = useState("terrain");
  const apiKey = 'AIzaSyAP98tjNJGnz6DKGESy1uGfHGIx9GnZmL0';

  return (
    <>
    <div className="container mt-5 mb-3"><h5 className="heading">Property Location</h5></div>
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        mapTypeId={mapType}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
    </>
  );
}

export default PropertyMap;