import React, { Component } from 'react'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google}
           initialCenter={{
             lat: 54.425545,
             lng: 18.528039
           }}
           zoom={12}
           onClick={this.onMapClicked}
      >

        <Marker
          title={'Promyk'}
          name={'Promyk'}
          position={{lat: 54.374760, lng: 18.449328}} />
        <Marker
          title={'Ciapkowo'}
          name={'Ciapkowo'}
          position={{lat: 54.492730, lng: 18.527670}} />
        <Marker
          title={'Schronisko Sopot'}
          name={'Schronisko Sopot'}
          position={{lat: 54.443741, lng: 18.552334}} />


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