import React, { Component }from 'react';
import { Link } from "react-router-dom";

class CatContainer extends Component{
  render() {
    return (
      <div className="catContainer">
        <div className="catContainerImage">
          <img src={this.props.cat.image} alt={this.props.cat.name} />
        </div>
        <div className="catContainerDescription">
          <p>{this.props.cat.description}</p>
        <div className="catDescription">
          <p>{this.props.cat.description.split(' ').slice(0,20).join(' ')}...<Link to={`/catpage/${this.props.cat.id}`}>
                                                                                                 <button>Pokaż więcej</button>
                                                                                               </Link></p>
        </div>

      </div>
    )
  }
}

export default CatContainer;