import React, { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";


function PropertyMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_KEY
  });

  console.log(isLoaded);

  const center = useMemo(() => ({ lat: -15.416667, lng: 28.283333 }), []);

  return (
    <div className="property-map shadow-1 py-5 mt-4">
      <h1 className="heading-1">Property Location</h1>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={18}
        >
          <Marker position={{ lat: -15.416667, lng: 28.283333 }} />

        </GoogleMap>
      )}
    </div>
  );
}

export default PropertyMap;
