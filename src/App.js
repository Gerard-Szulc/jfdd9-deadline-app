import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './Main'
import FavoriteCats from './FavoriteCats'
import Shelters from './Shelters'
import {UserProvider} from "./User/context/User";
import Profile from './User/UserProfil'
import CatPage from './CatPage/CatPageView'
import {CatPageProvider} from "./CatPage/context/CatPageContext";


class App extends Component {
  render() {
    return (
      <UserProvider>
      <CatPageProvider>
      <Router>
        <div className="App">
          <NavBar/>
          <Route exact path="/" component={Main} />
          <Route exact path="/favorite-cats" component={FavoriteCats} />
          <Route exact path="/shelters" component={Shelters} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/catpage/:catId" component={CatPage}/>
        </div>
      </Router>
      </CatPageProvider>
      </UserProvider>
    )
  }
}

export default App;
