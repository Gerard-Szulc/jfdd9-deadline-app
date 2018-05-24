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

        <ul>
          <li className="logo">
            <Link to="/"><img src={logo} alt="logo"/></Link>
          </li>
          <label htmlFor="show-menu" className="show-menu">
            <li id="hamburger" className="hamburger">
              <figure><img src={hamburger} alt="hamburger"/></figure>

            </li>
          </label>
          <input type="checkbox" id="show-menu" role="button"/>
          <li className="right-side">
            <Link to="/">Strona główna</Link>
          </li>
          <li className="right-side">
            <Link to="/favorite-cats">Ulubione Koty</Link>
          </li>
          <li className="right-side">
            <Link to="/shelters">Schroniska</Link>
          </li>

            {
              this.props.user !== null ? (
                <li className={'right-side'}>
                  <Link to="/profile">Profil</Link>
                </li>
              ) : null
            }

            <li className={'menuRight right-side'}>
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

