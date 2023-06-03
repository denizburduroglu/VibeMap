'use client';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 0,
    lng: 0,
 };
 

  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY ?? ""}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={2} />
    </LoadScript>
  );
};

export default MapContainer;
