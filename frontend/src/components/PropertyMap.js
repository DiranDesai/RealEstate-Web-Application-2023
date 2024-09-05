import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: -15.41667,
  lng: 28.28333
};

function PropertyMap() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDfy4ChgcVlAXpC7NNnabrQ_Yx812f2sZY" // Make sure his key is set in your .env file
      libraries={['places']} // Add any additional libraries you need
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        <Marker
            position={center}
          />
      </GoogleMap>
    </LoadScript>
  );
}

export default PropertyMap;
