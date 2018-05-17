import React, { Component }from 'react';
import { Link } from "react-router-dom";

const sexSymbol = {
  kotka: "fas fa-venus",
  kocur: "fas fa-mars"
}

class CatContainer extends Component{
  render() {
    return (
      <div className="catContainer" >
        <div className="catContainerImage" style={{backgroundSize:'cover' ,backgroundImage: `url(${this.props.cat.image})`}}>

        </div>
        <div className="catContainerDescription">
            <div className="catContainerName"> <p>{this.props.cat.name}<em>- {this.props.cat.sex.toLowerCase()}</em></p></div>
          <div><p>{this.props.cat.description.split(' ').slice(0,25).join(' ')}...</p>
            <Link to={`/catpage/${this.props.cat.id}`}>
             <button>Pokaż więcej</button>
             </Link></div>

        </div>

      </div>
    )
  }
}

export default CatContainer;


