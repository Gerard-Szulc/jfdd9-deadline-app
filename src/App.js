import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './Main'
import FavoriteCats from './FavoriteCats'
import Shelters from './Shelters'
import {UserProvider} from "./User/context/User";
import Profile from './User/UserProfile'
import CatPage from './CatPage/CatPageView'
import {CatPageProvider, withCatPage} from "./CatPage/context/CatPageContext";
import firebase from 'firebase'
import config from './firebase/config'
import './App.css';
import AddCat from './AddCat'


class App extends Component {
  componentDidMount(){
    window.scrollTo(0,-20)
  };

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
          <Route path="/add-cat" component={AddCat}/>

        </div>
      </Router>
      </CatPageProvider>
      </UserProvider>
    )
  }
}

export default withCatPage(App);
