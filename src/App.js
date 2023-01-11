import {  useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const center = {
  lat: 6.9271,
  lng: 79.8612,
};

function App() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_API_KEY",
  });

  const markers = [
    {
      id: 1,
      name: "Colombo, Sri Lanka",
      position: { lat: 6.9271, lng:79.8612 }
    },
    {
      id: 2,
      name: "Sigiriya Rock, Sri Lanka",
      position: { lat: 7.9570, lng: 80.7603 }
    },
    {
      id: 3,
      name: "9 arch bridge, Sri Lanka",
      position: { lat: 6.8768, lng: 81.0608 }
    },
    {
      id: 4,
      name: "Jungle Beach, Sri Lanka",
      position: { lat: 6.0187, lng: 0.2394 }
    },
    {
      id: 5,
      name: "Lipton Seat Tea Platations, Sri Lanka",
      position: { lat: 6.781790858643255, lng:  81.01646865947944 }
    },
    {
      id: 6,
      name: "Temple of tooth relic, Kandy Sri Lanka",
      position: { lat: 7.293587710691421, lng: 80.6413357264653 }
    }
  ];
  
  const [activeMarker, setActiveMarker] = useState(null);
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };


  return isLoaded ? (
    <>
      <GoogleMap
        center={center}
        zoom={8}
        mapContainerStyle={{ width: "100%", height: "100vh" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onClick={() => setActiveMarker(null)}
      >
        {markers.map(({ id, name, position }) => (
          <Marker
            key={id}
            position={position}
            onClick={() => handleActiveMarker(id)}
          >
            {activeMarker === id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div>{name}</div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
      </GoogleMap>
    </>
  ) : (
    <></>
  );
}

export default App;
