import Map from "react-map-gl";
import { useState } from "react";

export default function MapBox() {
  const [view, setView] = useState({
    initialViewState: {
      longitude: -100,
      latitude: 40,
      zoom: 9.5,
    },
    style: { width: "100%", height: "100%" },
  });

  function viewPortChange(currentViewState) {
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

    console.log(view);
  }

  return (
    <Map
      {...view}
      mapStyle="mapbox://styles/tellesiivan/cl2u3ye69000e16ns1lq14tep"
      mapboxAccessToken={process.env.mapbox_key}
      onMove={viewPortChange}
    />
  );
}
