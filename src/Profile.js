import React, {Component} from 'react';
import {withCatPage} from "./CatPage/context/CatPageContext";
import CatContainer from "./CatContainer";

class Profile extends Component{
  render() {
    return(
      <div>
        {this.props.adopted.map(element=><div><CatContainer cat={element}/><button onClick={()=>this.props.makeCatAdopted(element)}> Odadoptuj mnie </button></div>)}
      </div>
    )
  }
}

export default withCatPage(Profile);