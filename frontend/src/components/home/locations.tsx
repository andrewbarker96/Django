import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { GoogleMapsAPI } from '../../secrets/gmaps-api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 38.64627456665039,
  lng: -90.50367736816406
};

const Locations = () => {
  return (
    <LoadScript googleMapsApiKey={GoogleMapsAPI}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Locations;