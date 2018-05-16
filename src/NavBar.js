import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './navBar.css';
import logo from './logo-white.png';
import {withUser} from "./User/context/User";



class NavBar extends Component {
  render() {
    return(
        <nav>
          <div className="logo">
            <Link to="/"><img src={logo} alt="logo" /></Link>
          </div>
          <ul>
            <li>
              <Link to="/">Wyszukiwanie</Link>
            </li>
            <li>
              <Link to="/favorite-cats">Ulubione Koty</Link>
            </li>
            <li>
              <Link to="/shelters">Schroniska</Link>
            </li>
            <div className="menuRight">
              <li>
                <Link to="/profile">{this.props.user === null ? 'Zaloguj się' : 'Profil'}</Link>
              </li>
              {
                this.props.user !== null ? (
                  <li>
                    <button onClick={this.props.signOut}>Wyloguj</button>
                  </li>
                ): ''}
            </div>
          </ul>
          <div className="clear"></div>
        </nav>
    )
  }
}

export default withUser(NavBar);

