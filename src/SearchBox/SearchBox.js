import React, {Component} from 'react'
import Race from "./Race";
import {ageOptions,colorOptions,sexOptions,raceOptions} from '../CatsBase'
const SearchBoxStyle = {

  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1.5rem'

};


class SearchBox extends Component{

  mapOptions = (options) => Object.entries(options).map((element)=>({value: element[1], label: element[1]}));



  render(){
    return(

      <div style={ SearchBoxStyle }>

        <Race name="selectedRaceOption"
              options={this.mapOptions(raceOptions)}
              handleChange={this.props.handleChange}
              selectedOption={this.props.search.selectedRaceOption}/>

        <Race name="selectedSexOption"
              options={this.mapOptions(sexOptions)}
              handleChange={this.props.handleChange}
              selectedOption={this.props.search.selectedSexOption}/>

        <Race name="selectedColorOption"
              options={this.mapOptions(colorOptions)}
              handleChange={this.props.handleChange}
              selectedOption={this.props.search.selectedColorOption}/>

        <Race name="selectedAgeOption"
              options={this.mapOptions(ageOptions)}
              handleChange={this.props.handleChange}
              selectedOption={this.props.search.selectedAgeOption}/>
      </div>

    )
  }

}
export default SearchBox