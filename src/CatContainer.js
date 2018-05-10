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
            <div className="catContainerName"> <p><strong>{this.props.cat.name}</strong> <em>- {this.props.cat.sex.toLowerCase()}</em></p></div>
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