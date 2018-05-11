import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './navBar.css';
import logo from './logo-white.png';


class NavBar extends Component {
  render() {
    return(
        <nav>
          <div className="logo">
            <Link to="/"><img src={logo} alt="logo" /></Link>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorite-cats">Favorite Cats</Link>
            </li>
            <li>
              <Link to="/shelters">Shelters</Link>
            </li>
            <div className="menuRight">
              <li>
                <Link to="/profile">Your Profile</Link>
              </li>
            </div>
          </ul>
          <div className="clear"></div>
        </nav>
    )
  }
}

export default NavBar;

