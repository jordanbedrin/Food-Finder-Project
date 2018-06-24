import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDzjp9XUlSD-2314ouiduhgg1dvnI-BZTU&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `95vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={15} defaultCenter={{ lat: 25.803072, lng: -80.204494 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 25.803072, lng: -80.204494 }} />
    )}
  </GoogleMap>
));

ReactDOM.render(<MyMapComponent isMarkerShown />, document.getElementById("root"));
