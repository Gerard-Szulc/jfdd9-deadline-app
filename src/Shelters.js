import React, { Component } from 'react'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const shelters = [
  {name: 'Promyk', address: 'Przyrodników 14, 80-298 Gdańsk', lat: 54.374760, lng: 18.449328},
  {name: 'Ciapkowo', address: 'Małokacka 3A, 81-654 Gdynia', lat: 54.492730, lng: 18.527670},
  {name: 'Schronisko Sopot', address: '1 Maja 32, 81-828 Sopot', lat: 54.443741, lng: 18.552334}

]

class Shelters extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: null,
    selectedPlace: null
  }

  onClick = (props, marker, e) => {
    console.log(props, marker)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      activeMarkerText: props.address,
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
          address={shelter.address}
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
           position={'centre'}

      >

        {this.renderMarkers(sheltersArray)}

        <InfoWindow onOpen={this.onInfoWindowOpen}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.activeMarkerText}</h1>
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