import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './navBar.css';
import logo from './logo-white.png';
import hamburger from  './hamburger.png';
import {withUser} from '../User/context/User'


class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="logo">
          <Link to="/"><img src={logo} alt="logo"/></Link>
        </div>
        <ul>
          <label htmlFor="show-menu" className="show-menu">
            <li id="hamburger" className="hamburger">
              <figure><img src={hamburger} alt="hamburger"/></figure>

            </li>
          </label>
          <input type="checkbox" id="show-menu" role="button"/>
          <li className="right-side">
            <Link to="/">Wyszukiwanie</Link>
          </li>
          <li className="right-side">
            <Link to="/favorite-cats">Ulubione Koty</Link>
          </li>
          <li className="right-side">
            <Link to="/shelters">Schroniska</Link>
          </li>
            <li className="right-side menuRight">
            {
              this.props.user !== null ? (
                  <button onClick={this.props.signOut}>Wyloguj</button>
              ) : (
                  <Link to="/profile">{this.props.user === null ? 'Zaloguj się' : 'Profil'}</Link>
              )
            }
            </li>

        </ul>
        <div className="clear"></div>
      </nav>
    )
  }
}

export default withUser(NavBar);

