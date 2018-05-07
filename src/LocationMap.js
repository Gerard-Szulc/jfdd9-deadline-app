import React, { Component } from 'react'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google}
           initialCenter={{
             lat: 54.445545,
             lng: 18.528039
           }}
           zoom={12}
           onClick={this.onMapClicked}
           >

        <Marker
          title={'Promyk'}
          name={'Promyk'}
          position={{lat: 54.374698, lng: 18.449061}} />
        <Marker
          title={'Ciapkowo'}
          name={'Ciapkowo'}
          position={{lat: 54.492495, lng: 18.528108}} />
        <Marker
          title={'Schronisko Sopot'}
          name={'Schronisko Sopot'}
          position={{lat: 54.443741, lng: 18.552355}} />
        <Marker />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBO9R2KyAzW0kSKuwEJoJifPpsqp0bftvU')
})(MapContainer)