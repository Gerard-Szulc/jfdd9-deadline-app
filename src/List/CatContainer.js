import React, { Component }from 'react';
import { Link } from "react-router-dom";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faVenus from '@fortawesome/fontawesome-free-solid/faVenus'
import faMars from '@fortawesome/fontawesome-free-solid/faMars'

class CatContainer extends Component{
  render() {
    return (
      <div className="catContainer" >
        <div className="catContainerImage" style={{backgroundSize:'cover' ,backgroundImage: `url(${this.props.cat.image})`}}>

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
              <button>Pokaż więcej</button>
            </Link>
          </div>

        </div>

      </div>
    )
  }
}

export default CatContainer;
