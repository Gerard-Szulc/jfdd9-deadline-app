import React, { Component } from 'react';
import './App.css';
import SearchBox from "./SearchBox/SearchBox";


class App extends Component {
  render() {
    return (
      <div className="App" style={{width: "100vw"}}>
        <SearchBox/>
      </div>


    );
  }
}

export default App;
