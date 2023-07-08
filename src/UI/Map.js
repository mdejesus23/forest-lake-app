import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import classes from "./Map.module.scss";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <div className={classes["address-container"]}>
        <p>
          Alexcy One Building, Third Floor, 51 President's Ave, Parañaque, 1720
          Metro Manila
        </p>
      </div>
      <Gmap />
    </div>
  );
};

export default Map;

function Gmap() {
  // memoize the result. it performs the calculation once every time the dependencies rerender
  // and because we dont have dependecies here [], we will calculate its value once.
  const center = useMemo(
    () => ({ lat: 14.446076613679704, lng: 121.02905684499054 }),
    []
  );

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName={classes["map-container"]}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
