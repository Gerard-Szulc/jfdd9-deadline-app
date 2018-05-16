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
            <Link to="/"><li>Wyszukiwanie</li></Link>
            <Link to="/favorite-cats"><li>Ulubione Koty</li></Link>
            <Link to="/shelters"><li>Schroniska</li></Link>
            <div className="menuRight">
              <Link to="/profile"><li>Twój Profil</li></Link>
            </div>
          </ul>
          <div className="clear"></div>
        </nav>
    )
  }
}

export default NavBar;

