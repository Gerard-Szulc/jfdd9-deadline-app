import React, {Component} from 'react';
import {withCatPage} from "./CatPage/context/CatPageContext";
import CatContainer from "./List/CatContainer";
import './FavoriteCats/FavoriteCats.css'
import {withUser} from "./User/context/User";


class FavoriteCats extends Component{
  render() {
    return(
      <div className="favoriteCats">
        <h1>Twoje ulubione koty</h1>
        {/*{ this.props.fetching === false ? (this.props.cats && this.props.cats*/}
          {/*.filter( cat =>  this.props.favourite.some((favouriteCat)=> favouriteCat.catId === cat.id))*/}
          {/*.map(element =>*/}
            {/*<CatContainer key={element.id} cat={element}/>*/}
          {/*)): 'Loading'}*/}

        {/*{this.props.favourite.length === 0 ? <p>Nie polubiłeś jeszcze żadnego kota. </p> : <p> </p>}*/}


        {this.props.cats && this.props.cats.filter( cat =>
          this.props.favourite.some(request => request.catId === cat.id && request.user === this.props.user.uid)
        ).map(element=><CatContainer key={element.id} cat={element}/>)}
      </div>
    )
  }
}

export default withUser(withCatPage(FavoriteCats));