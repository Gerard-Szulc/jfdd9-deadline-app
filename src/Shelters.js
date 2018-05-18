import React, { Component } from 'react'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const shelters = [
  {name: 'Promyk', lat: 54.374760, lng: 18.449328},
  {name: 'Ciapkowo', lat: 54.492730, lng: 18.527670},
  {name: 'Schronisko Sopot', lat: 54.443741, lng: 18.552334}

]

class Shelters extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: null,
    selectedPlace: null
  }

  onClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  renderMarkers(shelters) {
    return (
      shelters.map(
        shelter => (
        <Marker
          key={shelter.name}
          title={shelter.name}
          name={shelter.name}
          onClick={this.onClick}
          position={{lat: shelter.lat, lng: shelter.lng}} />
        )
      )
    )
  }

  render() {

    const sheltersArray = this.props.shelter ?
      shelters.filter( shelter => shelter.name === this.props.shelter) : shelters

    const avgLat = sheltersArray.map(shelter => shelter.lat).reduce((total, next) => total + next, 0) / sheltersArray.length
    const avgLng = sheltersArray.map(shelter => shelter.lng).reduce((total, next) => total + next, 0) / sheltersArray.length

    return (
      <div>
      <Map google={this.props.google}
           initialCenter={{
             lat: avgLat,
             lng: avgLng
           }}
           gestureHandling={this.props.gestureHandling || 'greedy'}
           zoom={12}
           onClick={this.onMapClicked}
           position={'centre'}

      >

        {this.renderMarkers(sheltersArray)}

        <InfoWindow onOpen={this.onInfoWindowOpen}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>Tu czeka kot dla Ciebie</h1>
          </div>
        </InfoWindow>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBO9R2KyAzW0kSKuwEJoJifPpsqp0bftvU'),
})(Shelters)