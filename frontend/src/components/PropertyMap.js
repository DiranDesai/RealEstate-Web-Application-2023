import React, { useMemo } from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '600px'
};

function PropertyMap() {
  const center = { lat: -15.416667, lng: 28.283333 };

  const onLoad = (map) => {
    if (window.google && window.google.maps && window.google.maps.marker) {
      const advancedMarker = new window.google.maps.marker.AdvancedMarkerElement({
        position: center,
        map: map,
        content: '<div style="color: red;">Hello, World!</div>' // Customize content as needed
      });
    } else {
      console.error('AdvancedMarkerElement is not available. Check your API version and script loading.');
    }
  };


  let isLoaded = false


  return (
    <div className="property-map shadow-1 mt-4">
       
        <LoadScript
          googleMapsApiKey={process.env.GOOGLE_API_KEY}
        >
          <GoogleMap mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}>

          </GoogleMap>

        </LoadScript>
      
    </div>
  );
}

export default PropertyMap;
