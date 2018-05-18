import React, {Component} from 'react';
import SearchBox from "./SearchBox/SearchBox";
import List from "./List/List";

const getSearchOptions = search =>
  Object.entries(search)
    .filter(([option, value]) => value)
    .map(
      ([option, value]) => {
        const valueKeys = value.map(({value}) => value);

        return {[option]: valueKeys}

      });

class Main extends Component {
  state = {
    search: {
      selectedRaceOption: [],
      selectedSexOption: [],
      selectedColorOption: [],
      selectedAgeOption: [],
    }
  };


  handleChange = (name, selectedOption) => {

    //
    this.setState({

      search: {
        ...this.state.search,
        [name]: selectedOption
      }

    })
  }

  render() {
    return (
      <div id='main'>
        <SearchBox search={this.state.search} handleChange={this.handleChange}/>
        <List search={getSearchOptions(this.state.search)}/>
      </div>

    )
  }
}

export default Main;