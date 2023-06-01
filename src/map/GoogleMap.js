import React from "react";
import GoogleMapReact from 'google-map-react';

export default function GoogleMap(){
  const defaultProps = {
    center: {
      lat: -21.75590391965576, 
      lng: -43.351386498559556
    },
    zoom: 15
  };

  return (
    <div style={{ height: '60vh'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact>
    </div>
  );
}
