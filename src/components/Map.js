import React, {Component} from "react";
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
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */

    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDzjp9XUlSD-2314ouiduhgg1dvnI-BZTU&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
    mapElement: <div id = "map" style={{ height: `100%` }} />

  }),
  withScriptjs,
  withGoogleMap
)(props => {
  if(props.rest.lat){
    console.log(typeof(parseFloat(props.rest.lat)))
  }
  return(
  <GoogleMap defaultZoom={20} center={{ lat: parseFloat(props.rest.lat), lng: parseFloat(props.rest.lng) }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: parseFloat(props.rest.lat), lng: parseFloat(props.rest.lng)}} />
    )}
  </GoogleMap>
  )
});


class Map extends Component{
  render() { console.log();
    return(
      <MyMapComponent isMarkerShown rest={this.props.rest}  />
    )
  }
}

export default Map;



// ReactDOM.render( <MyMapComponent isMarkerShown />, document.getElementById("root"));
// ReactDOM.render( <App />, document.getElementById("root"));
