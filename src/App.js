import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './Main'
import FavoriteCats from './FavoriteCats'
import Shelters from './Shelters'
import Profil from './Profil'
import CatPage from './CatPage/CatPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Route exact path="/" component={Main} />
          <Route exact path="/favorite-cats" component={FavoriteCats} />
          <Route exact path="/shelters" component={Shelters} />
          <Route exact path="/profil" component={Profil} />
          <Route path="/catpage" component={CatPage}/>
      </div>
        <nav>
          <p><Link to="/catpage">Strona kota</Link></p>
          <p><Link to="/">Intro</Link></p>
        </nav>
      </Router>
    );
  }
}

export default App;
