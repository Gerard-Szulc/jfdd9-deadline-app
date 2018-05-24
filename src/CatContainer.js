import React, { Component }from 'react';
import { Link } from "react-router-dom";
import {withCatPage} from "./CatPage/context/CatPageContext";

class CatContainer extends Component{


  render() {
    const defaultImage = 'http://athomeintn.com/wp-content/uploads/drawn-feline-cute-kitty-pencil-and-in-color-drawn-feline-cute-kitty-cute-cat-drawing.jpg'
    const catImage = this.props.cat.image ? defaultImage : this.props.cat.image

    return (
      this.props.cats && (
      <div className="catContainer" >
        <div className="catContainerImage" style={{backgroundSize:'cover' ,backgroundImage: `url(${catImage})`}}>

        </div>
        <div className="catContainerDescription">
            <div className="catContainerName"> <p><strong>{this.props.cat.name}</strong> <em>- {this.props.cat.sex.toLowerCase()}</em></p></div>
          <div><p>{this.props.cat.description.split(' ').slice(0,25).join(' ')}...</p>
            <Link to={`/catpage/${this.props.cat.id}`}>
             <button>Pokaż więcej</button>
             </Link></div>

        </div>

      </div>)
    )
  }
}

export default withCatPage(CatContainer);