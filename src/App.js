import React, {Component} from 'react';
import logo from './CatPage/logo.svg';
import './App.css';
import CatPage from "./CatPage/CatPage";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div>
            <Route exact path="/" render={() =>   <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>} />
            <Route path="/catpage" component={CatPage}/>
            <nav>
          <p><Link to="/catpage">Strona kota</Link></p>
        </nav>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
