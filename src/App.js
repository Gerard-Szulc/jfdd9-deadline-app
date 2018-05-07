import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './Main'
import FavoriteCats from './FavoriteCats'
import Shelters from './Shelters'
import Profile from './Profile'
import CatPage from './CatPage/CatPage'
import LocationMap from './LocationMap'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Route exact path="/" component={Main} />
          <Route exact path="/favorite-cats" component={FavoriteCats} />
          <Route exact path="/shelters" component={Shelters} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/catpage" component={CatPage}/>
          <Route path="/location" component={LocationMap}/>
        <nav>
          <p><Link to="/catpage">Strona kota</Link></p>
          <p><Link to="/">Intro</Link></p>
        </nav>
        </div>
      </Router>
    );
  }
}

export default App;
