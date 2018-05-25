import React, {Component} from 'react'
import {withUser} from "./context/User";
import { Link } from 'react-router-dom'

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
        <h2>Shelter Panel</h2>
        {
          this.props.user && (
            <p>
              {this.state.shelter(this.props.user.uid)}
            </p>
          )
        }

        <div className="shelterPanel">
          <Link to="/add-cat"><button className="CTA">Dodaj nowego kota</button></Link>
          <div>
            <h3>Trwające adopcje:</h3>
            <p>Adopcje które czekają na Twoją akceptację.</p>
          </div>
          <div>
            <h3>Oczekują na adopcje:</h3>
            <p>Wciaż nie adoptowane.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default withUser(ShelterPanel)