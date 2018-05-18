import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './Main'
import FavoriteCats from './FavoriteCats'
import Shelters from './Shelters'
import {UserProvider} from "./User/context/User";
import Profile from './User/UserProfile'
import CatPage from './CatPage/CatPageView'
import {CatPageProvider} from "./CatPage/context/CatPageContext";
import Calendar from './Calendar'



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
          <Route path="/calendar" component={Calendar} />
        </div>
      </Router>
      </CatPageProvider>
      </UserProvider>
    )
  }
}

export default App;
