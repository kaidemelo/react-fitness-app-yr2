import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Maps.css';

const key = "AIzaSyDvBTCJru3Fo2z2ABUtNdOLKGoliM-q87w";

class GoogleMaps extends Component {
    render() {
        return (
          <div id="map-wrapper">
            <Map classname = "g-map" google={this.props.google} zoom={14}>
     
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
     
            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  {/* <h1>{this.state.selectedPlace.name}</h1> */}
                </div>
            </InfoWindow>
          </Map>
          </div>
        )
    }
}

export default GoogleApiWrapper({
  apiKey: (key)
})(GoogleMaps);