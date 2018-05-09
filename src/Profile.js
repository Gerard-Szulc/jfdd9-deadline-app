import React, {Component} from 'react';
import {withCatPage} from "./CatPage/context/CatPageContext";
import CatContainer from "./CatContainer";

class Profile extends Component{
  render() {
    return(
      <div>
        {this.props.adopted.map(element=><CatContainer cat={element} key={element.id}/>)}
      </div>
    )
  }
}

export default withCatPage(Profile);