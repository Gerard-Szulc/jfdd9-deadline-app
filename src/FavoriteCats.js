import React, {Component} from 'react';
import {withCatPage} from "./CatPage/context/CatPageContext";
import CatContainer from "./CatContainer";

class FavoriteCats extends Component{
  render() {
    return(
      <div>
        <h1> FavoriteCats</h1>

        {this.props.cats && this.props.cats.filter( cat => this.props.favourite.includes(cat.id) ).map(element=><CatContainer key={element.id} cat={element}/>)}


      </div>
    )
  }
}

export default withCatPage(FavoriteCats);