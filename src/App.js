import React, { Component } from 'react';
import './App.css';
import SearchBox from "./SearchBox/SearchBox";


class App extends Component {

  state = {
    search: {
      selectedRaceOption: null,
      selectedSexOption: null,
      selectedColorOption: null,
      selectedAgeOption: null,
    }
  };

  handleChange = (name, selectedOption) => {

    //
    this.setState({

      search: {
        ...this.state.search,
        [name]: selectedOption
      }



    }, ()=>console.log(this.state)
    )}

  render() {
    return (
      <div className="App" style={{width: "100vw"}}>
        <SearchBox search={this.state.search} handleChange={this.handleChange}/>
      </div>


    );
  }
}

export default App;
