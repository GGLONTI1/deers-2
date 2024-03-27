import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
  Libraries,
} from "@react-google-maps/api";

import mapStyles from "./mapStyles";
import { useState } from "react";

const libraries: Libraries = ["places"];

const mapContainerStyles = {
  width: "100vw",
  height: "100vh",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: 41.7151,
  lng: 44.8271,
};

function App() {
  const [markers, setMarkers] = useState([]);
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBTeaj-DvuG5yHwcwNQwVtWcN8ITtXDf6A",
    libraries,
  });
  if (loadError) return <div>Loading error...</div>;
  if (!isLoaded) return <div>Loading...</div>;
  console.log(isLoaded);
  console.log(markers);
  return (
    <div>
      <h1 className="title">DEERS ⛺ </h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyles}
        zoom={10}
        center={center}
        options={options}
        onClick={(e) => {
          setMarkers((current) => [
            ...current,
            {
              lat: e.latLng?.lat(),
              lng: e.latLng?.lng(),
              time: new Date(),
            },
          ]);
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: "/deer.svg",
              scaledSize: new window.google.maps.Size(36, 36),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(18, 18),
            }}
          />
        ))}
      </GoogleMap>
      <h1>
        hdjsfkj
      </h1>
    </div>
  );
}

export default App;
