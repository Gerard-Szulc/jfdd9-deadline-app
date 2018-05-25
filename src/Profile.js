import React, {Component} from 'react';
import {withCatPage} from "./CatPage/context/CatPageContext";
import CatContainer from "./List/CatContainer";

class Profile extends Component{
  componentDidMount(){
    window.scrollTo(0,0)
  }
  render() {
    return(
      <div>
        <h1>Twoje koty</h1>
        { this.props.fetching === false ? (this.props.cats && this.props.cats
          .filter( cat =>  this.props.adoptionRequests.some((adoptedCat)=> adoptedCat.catId === cat.id ))
          .map(element =>
            <CatContainer key={element.id} cat={element}/>
          )): 'Loading'}

        {this.props.adoptionRequests.length === 0 ? <p>Nie adoptowałeś jeszcze żadnego kota. </p> : <p> </p>}

        </div>
    )
  }
}

export default withCatPage(Profile);