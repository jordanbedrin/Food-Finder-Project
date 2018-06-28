import React, {Component} from "react";
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
    containerElement: <div style={{ height: `70em` }} />,
    mapElement: <div id = "map" style={{ height: `100%` }} />

  }),
  withScriptjs,
  withGoogleMap
)(props => {
  if(props.rest.lat){
    console.log(typeof(parseFloat(props.rest.lat)))
  }
  return(
  <GoogleMap defaultZoom={20} center={{ lat: parseFloat(props.rest.lat || 25.802843), lng: parseFloat(props.rest.lng || -80.204356) }}>
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

