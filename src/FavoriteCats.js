import React, {Component} from 'react';
import {withCatPage} from "./CatPage/context/CatPageContext";
import CatContainer from "./CatContainer";

class FavoriteCats extends Component{
  render() {
    return(
      <div>
        <h1> FavoriteCats</h1>

        {this.props.favourite.map(element=><div><CatContainer key={element.id} cat={element}/><button onClick={()=>this.props.makeCatFavorite(element)}>Już Cię nie lubię</button></div>)}


      </div>
    )
  }
}

export default withCatPage(FavoriteCats);