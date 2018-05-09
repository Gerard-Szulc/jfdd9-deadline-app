import React, {Component} from 'react';
import { Link } from "react-router-dom";


class NavBar extends Component {
  render() {
    return(
        <div className="NavBar">
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
              <Link to="/profile">Your Profile</Link>
            </li>
          </ul>
        </div>
    )
  }
}

export default NavBar;

