import React, {Component} from 'react';
import {withCatPage} from "./CatPage/context/CatPageContext";
import CatContainer from "./CatContainer";

class Profile extends Component{
  render() {
    return(
      <div>
        <h1>Twoje koty</h1>
        {this.props.cats && this.props.cats.filter( cat => this.props.adopted.includes(cat.id) ).map(element=><CatContainer key={element.id} cat={element}/>)}

        {this.props.adopted.length === 0 ? <p>Nie adoptowałeś jeszcze żadnego kota. </p> : <p> </p>}

        </div>
    )
  }
}

export default withCatPage(Profile);