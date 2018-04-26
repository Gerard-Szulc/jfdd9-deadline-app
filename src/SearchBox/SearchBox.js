import React, {Component} from 'react'
import Race from "./Race";
import {ageOptions,colorOptions,sexOptions,raceOptions} from './options'
const SearchBoxStyle = {

  width: '100%',
  display: 'flex',
  justifyContent: 'center'

};


class SearchBox extends Component{

  state = {
    selectedRaceOption: null,
    selectedSexOption: null,
    selectedColorOption: null,
    selectedAgeOption: null,
  };

  handleChange = (name, selectedOption) => {
    this.setState(    {
      [name]:selectedOption

    });
    console.log(selectedOption)
  };
  render(){
    return(

      <div style={ SearchBoxStyle }>
        <Race name="selectedRaceOption" options={raceOptions} handleChange={this.handleChange} selectedOption={this.state.selectedRaceOption}/>
        <Race name="selectedSexOption" options={sexOptions} handleChange={this.handleChange} selectedOption={this.state.selectedSexOption}/>
        <Race name="selectedColorOption" options={colorOptions} handleChange={this.handleChange} selectedOption={this.state.selectedColorOption}/>
        <Race name="selectedAgeOption" options={ageOptions} handleChange={this.handleChange} selectedOption={this.state.selectedAgeOption}/>
      </div>

    )
  }

}
export default SearchBox