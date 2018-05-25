import React, {Component} from 'react';
import {withCatPage} from "./CatPage/context/CatPageContext";
import CatContainer from "./List/CatContainer";
import './FavoriteCats/FavoriteCats.css'
import {withUser} from "./User/context/User";
import './User/css/style-form.css';


class FavoriteCats extends Component{
  render() {
    return(
      <div className="UserView container">
        <h2>Twoje ulubione koty</h2>
        {/*{ this.props.fetching === false ? (this.props.cats && this.props.cats*/}
          {/*.filter( cat =>  this.props.favourite.some((favouriteCat)=> favouriteCat.catId === cat.id))*/}
          {/*.map(element =>*/}
            {/*<CatContainer key={element.id} cat={element}/>*/}
          {/*)): 'Loading'}*/}

        {/*{this.props.favourite.length === 0 ? <p>Nie polubiłeś jeszcze żadnego kota. </p> : <p> </p>}*/}
        <div >
      <div className={"list"}>
        {this.props.cats && this.props.favourite ? this.props.cats.filter( cat =>
          Object.entries(this.props.favourite).some(([id,request]) => id === cat.id)
        ).map(element=><CatContainer key={element.id} cat={element}/>) : <p>Nie polubiłeś jeszcze żadnego kota. </p>}
      </div>
        </div>
      </div>
    )
  }
}

export default withUser(withCatPage(FavoriteCats));