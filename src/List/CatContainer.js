import React, { Component }from 'react';
import { Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faVenus from '@fortawesome/fontawesome-free-solid/faVenus'
import faMars from '@fortawesome/fontawesome-free-solid/faMars'
import {withCatPage} from "../CatPage/context/CatPageContext";

class CatContainer extends Component{
  render() {

    const defaultImage = 'http://athomeintn.com/wp-content/uploads/drawn-feline-cute-kitty-pencil-and-in-color-drawn-feline-cute-kitty-cute-cat-drawing.jpg'
    const catImage = this.props.cat.image === "" ? defaultImage : this.props.cat.image

    return (
      <div className="catContainer" >
        <div className="catContainerImage" style={{backgroundSize:'cover' ,backgroundImage: `url(${catImage})`}}>

        </div>
        <div className="catContainerDescription">
          <div className="catContainerName">
            <h3>{this.props.cat.name}</h3>
            {console.log(this.props.cat.sex)}
            {
              this.props.cat.sex === 'Kotka' ?
                <FontAwesomeIcon icon={faVenus} className="iconVenus"/>
                : <FontAwesomeIcon icon={faMars} className="iconMars" />
            }
          </div>

          <div className="description">
            <p>{this.props.cat.description.split(' ').slice(0,25).join(' ')}...</p>

            <Link to={`/catpage/${this.props.cat.id}`}>
              <button className="CTA">Pokaż więcej</button>
              <div className="clear"></div>
            </Link>
          </div>

          {this.props.shelterModeOn && <button className="catButtons" onClick={() => this.props.updateShelterAdoption(this.props.cat)}>Zgoda</button>}

        </div>

      </div>
    )
  }
}

export default withCatPage(CatContainer);
