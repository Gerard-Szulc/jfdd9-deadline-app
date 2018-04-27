import React, {Component} from 'react';
import SearchBox from "./SearchBox/SearchBox";
import List from "./List";

class Main extends Component{
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



      }, ()=>console.log(this.state.search)
    )}

  render() {
    return(
      <div>
        <SearchBox search={this.state.search} handleChange={this.handleChange}/>
        <List search={this.state.search}/>
        Main
      </div>

    )
  }
}

export default Main;