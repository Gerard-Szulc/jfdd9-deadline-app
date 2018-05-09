import React, { Component }from 'react';
import { Link } from "react-router-dom";

class CatContainer extends Component{
  render() {
    return (
      <div className="catContainer">
        <div className="catImage">
          <img src={this.props.cat.image} alt={this.props.cat.name} />
        </div>
        <div className="catDescription">
        <p><strong>{this.props.cat.name}</strong> <em>- {this.props.cat.sex.toLowerCase()}</em></p>
          <p>{this.props.cat.description.split(' ').slice(0,20).join(' ')}...<Link to={`/catpage/${this.props.cat.id}`}>
                                                                                                 <button>Pokaż więcej</button>
                                                                                               </Link></p>
        </div>

      </div>
    )
  }
}

export default CatContainer;