import React, { Component }from 'react';
import { Link } from "react-router-dom";
import {withCatPage} from "./CatPage/context/CatPageContext";

class CatContainer extends Component{
  render() {
    return (
      <div className="catContainer" >
        <div className="catContainerImage">
          <img src={this.props.cat.image} alt={this.props.cat.name} />
          <div> <p><strong>{this.props.cat.name}</strong> <em>- {this.props.cat.sex.toLowerCase()}</em></p></div>
        </div>
        <div className="catContainerDescription">

          <p>{this.props.cat.description.split(' ').slice(0,20).join(' ')}...</p>
            <Link to={`/catpage/${this.props.cat.id}`}>
             <button>Pokaż więcej</button>
             </Link>

        </div>

      </div>
    )
  }
}

export default CatContainer;