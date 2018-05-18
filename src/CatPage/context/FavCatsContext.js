import React, { Component } from 'react';
import firebase from 'firebase';

const favCatsContext = React.createContext();
export const favCatsConsumer = favCatsContext.Consumer;

export class FavCatsProvider extends Component {
  state = {
    favorite: []
  }

  render() {
    return (
      <favCatsContext.Provider value={this.state}>
        {this.props.children}
      </favCatsContext.Provider>
    )
  }
}

export function withFavCats(Component) {
  function
}