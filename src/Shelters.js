import React, { Component } from 'react'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const getMarkers = context => ({
  'Promyk':  <Marker
    key={'Promyk'}
    title={'Promyk'}
    name={'Promyk'}
    onClick={context.onClick}
    position={{lat: 54.374760, lng: 18.449328}} />,
  'Ciapkowo': <Marker
    key={'Ciapkowo'}
    title={'Ciapkowo'}
    name={'Ciapkowo'}
    onClick={context.onClick}
    position={{lat: 54.492730, lng: 18.527670}} />,
  'Schronisko Sopot': <Marker
    key={'Schronisko Sopot'}
    title={'Schronisko Sopot'}
    name={'Schronisko Sopot'}
    onClick={context.onClick}
    position={{lat: 54.443741, lng: 18.552334}} />
})

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

  // // onClick = (props) => {
  // //   if (this.state.showingInfoWindow) {
  // //     this.setState({
  // //       showingInfoWindow: false,
  // //       activeMarker: null
  // //     })
  // //   }
  // };

  render() {
    return (
      <div>
      <Map google={this.props.google}
           initialCenter={{
             lat: 54.425545,
             lng: 18.528039
           }}
           gestureHandling={this.props.gestureHandling || 'greedy'}
           zoom={12}
           onClick={this.onMapClicked}
           position={'centre'}

      >

        {this.props.shelter ? getMarkers(this)[this.props.shelter] :
          Object.values(getMarkers(this))
        }

        <InfoWindow onOpen={this.onInfoWindowOpen}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>Tu znajdziesz kota dla siebie</h1>
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