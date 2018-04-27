import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Shelters from "./Shelters";



class NavBar extends Component {
  render() {
    return(
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorite-cats">FavoriteCats</Link>
            </li>
            <li>
              <Link to="/shelters">Shelters</Link>
            </li>
            <li>
              <Link to="/profil">Your Profil</Link>
            </li>
          </ul>
        </div>
    )
  }
}

export default NavBar;

