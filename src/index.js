import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();



















// import React from "react";
// import ReactDOM from "react-dom";
// import { compose, withProps } from "recompose";
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker
// } from "react-google-maps";
// import App from './App';
// import './index.css';
//
// const MyMapComponent = compose(
//   withProps({
//     /**
//      * Note: create and replace your own key in the Google console.
//      * https://console.developers.google.com/apis/dashboard
//      * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
//      */
//     googleMapURL:
//       "https://maps.googleapis.com/maps/api/js?key=AIzaSyDzjp9XUlSD-2314ouiduhgg1dvnI-BZTU&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `800px` }} />,
//     mapElement: <div id = "map" style={{ height: `100%` }} />
//   }),
//   withScriptjs,
//   withGoogleMap
// )(props => (
//   <GoogleMap defaultZoom={14} defaultCenter={{ lat: 25.802973, lng: -80.204346 }}>
//     {props.isMarkerShown && (
//       <Marker position={{ lat: 25.802973, lng: -80.204346 }} />
//     )}
//   </GoogleMap>
// ));
//
// ReactDOM.render( <MyMapComponent isMarkerShown />, document.getElementById("root"));
// // ReactDOM.render( <App />, document.getElementById("root"));
