import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

function PropertyMap({position}) {
  if (!position || position.length === 0) {
    return <div>No location data available.</div>;
  }

  if (!window.google || window.google == undefined) return
  
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDfy4ChgcVlAXpC7NNnabrQ_Yx812f2sZY" // Make sure his key is set in your .env file
      libraries={['places']} // Add any additional libraries you need  
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={12}
      >
        <Marker
            position={position}
          />
      </GoogleMap>
    </LoadScript>
  );
}

export default PropertyMap;
