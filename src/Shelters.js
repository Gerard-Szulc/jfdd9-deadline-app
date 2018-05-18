import React, { Component } from 'react'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const markers = {
  'Promyk':  <Marker
    key={'Promyk'}
    title={'Promyk'}
    name={'Promyk'}
    position={{lat: 54.374760, lng: 18.449328}} />,
  'Ciapkowo': <Marker
    key={'Ciapkowo'}
    title={'Ciapkowo'}
    name={'Ciapkowo'}
    position={{lat: 54.492730, lng: 18.527670}} />,
  'Schronisko Sopot': <Marker
    key={'Schronisko Sopot'}
    title={'Schronisko Sopot'}
    name={'Schronisko Sopot'}
    position={{lat: 54.443741, lng: 18.552334}} />
}

class Shelters extends Component {

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

      >

        {this.props.shelter ? markers[this.props.shelter] :
          Object.values(markers)
        }

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
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