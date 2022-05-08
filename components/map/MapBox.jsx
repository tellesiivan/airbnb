import Map, { Marker, Popup } from "react-map-gl";
import { useState, useMemo } from "react";

import * as geolib from "geolib";
import { useRouter } from "next/router";

export default function MapBox({ results }) {
  // map results and return an object per each result with latitude and longitude to group them in an array
  const coords = results.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  const [selectedLocation, setSelectedLocation] = useState(null);
  const centerCoords = geolib.getCenter(coords);

  const [view, setView] = useState({
    initialViewState: {
      ...centerCoords,
      zoom: 10.5,
    },
    style: { width: "100%", height: "100%" },
  });

  const viewPortChange = (currentViewState) => {
    const { viewState } = currentViewState;
    // -----> Updating state object
    setView((prev) => ({
      ...prev, // spread the previous state...
      initialViewState: {
        // target state change on initialViewState object
        ...prev.initialViewState, // spread previous changes on initialViewState object
        longitude: viewState.longitude,
        latitude: viewState.latitude,
        zoom: viewState.zoom,
      },
    }));
  };

  return (
    <Map
      {...view}
      mapStyle="mapbox://styles/tellesiivan/cl2u3ye69000e16ns1lq14tep"
      mapboxAccessToken={process.env.mapbox_key}
      onMove={viewPortChange}
    >
      {results.map((r, i) => (
        <div key={i}>
          <Marker
            longitude={r.long}
            latitude={r.lat}
            onClick={() => setSelectedLocation(r)}
          >
            <div
              role="img"
              aria-label="push-pin"
              className="flex w-3 h-3 cursor-pointer group"
            >
              <span className="absolute inline-flex w-full h-full bg-red-200 rounded-full opacity-75 animate-ping group-hover:bg-red-100"></span>
              <span className="relative inline-flex w-3 h-3 bg-red-400 rounded-full"></span>
            </div>
          </Marker>

          {/* popup to show if we click on a selected item */}
          {selectedLocation?.lat === r.lat ? (
            <Popup
              longitude={r.long}
              latitude={r.lat}
              closeButton={true}
              onClose={() => setSelectedLocation(null)}
              anchor="bottom"
            >
              <div>Here!</div>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
}
