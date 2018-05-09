import React, {Component} from 'react';
import {withCatPage} from "./CatPage/context/CatPageContext";

class FavoriteCats extends Component{
  render() {
    return(
      <div>
        <h1> FavoriteCats</h1>
        {this.props.favourite.map(element=><p>{element.description}</p>)}
      </div>
    )
  }
}

export default withCatPage(FavoriteCats);