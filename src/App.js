import React, { Component } from 'react';
import logo from './CatPage/logo.svg';
import './App.css';
import CatPage from "./CatPage/CatPage";
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BrowserRouter>
        <Route path="/catpage/" component={CatPage} />
          <Link
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
