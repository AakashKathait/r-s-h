"use client";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

const Coords = () => {
  const position = { lat: 49.264, lng: -123.132 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_MAP_KEY}>
      <div className="map">
        <Map
          colorScheme="DARK"
          defaultCenter={position}
          defaultZoom={13}
          gestureHandling="cooperative"
          disableDefaultUI={true}
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
        >
          <AdvancedMarker position={position}></AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
};

export default Coords;
