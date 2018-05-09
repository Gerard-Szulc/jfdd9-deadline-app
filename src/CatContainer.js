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
        </div>
        <Link to={`/catpage/${this.props.cat.id}`}>
          <button>więcej...</button>
        </Link>
      </div>
    )
  }
}

export default CatContainer;