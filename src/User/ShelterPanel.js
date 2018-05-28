import React, {Component} from 'react'
import {withUser} from "./context/User";
import { Link } from 'react-router-dom';
import AcceptedAdoption from './AcceptedAdoption';
import CatsFromShelter from './CatsFromShelter';
import style from './css/shelterPanel.css';

class ShelterPanel extends Component{
  state = {
    shelter: userId => {
      return (
        userId === 'YcFFJByZ6nUuxFfzbvO9jHYUMHJ3' ? 'Promyk'
        : userId === 'TFFiewHfyjZxcpo18nPAFb2HyRU2' ? 'Ciapkowo'
        : userId === '2nfC3GoY4TRw3v0NDNzctBFJAL02' ? 'Sopot'
        : null
      )
    }
  }
  render(){
    return(
      <div className="container">
        {
          this.props.user && (
            <p><h2>
              {this.state.shelter(this.props.user.uid)}
            </h2></p>
          )
        }

        <div className="shelterPanel">
          <Link to="/add-cat"><button className="CTA add-new-cat">Dodaj nowego kota</button></Link>
          <div className="shelterPanel-cats adoption-requests">
            <h3>Trwające adopcje:</h3>
            <p>Adopcje które czekają na Twoją akceptację.</p>
            <AcceptedAdoption shelter={this.props.user && this.state.shelter(this.props.user.uid)}/>
          </div>
          <div className="shelterPanel-cats">
            <h3>Oczekują na adopcje:</h3>
            <p>Niezaadoptowane.</p>
            <CatsFromShelter shelter={this.props.user && this.state.shelter(this.props.user.uid)}/>
          </div>
        </div>
      </div>
    )
  }
}

export default withUser(ShelterPanel)