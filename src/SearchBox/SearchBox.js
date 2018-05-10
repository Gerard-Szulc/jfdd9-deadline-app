import React, {Component} from 'react'
import Race from "./Race";
import {ageOptions,colorOptions,sexOptions,raceOptions} from '../CatsBase'
import searchbox from './searchbox.css';


class SearchBox extends Component{

  mapOptions = (options) => Object.entries(options).map((element)=>({value: element[1], label: element[1]}));



  render(){
    return(

      <div className="searchBox">

        <label>Wyszukaj kota</label>
        <div className="options">
          <Race name="selectedRaceOption"
                title="rasa"
                options={this.mapOptions(raceOptions)}
                handleChange={this.props.handleChange}
                selectedOption={this.props.search.selectedRaceOption}
          />

          <Race name="selectedSexOption"
                title="płeć"
                options={this.mapOptions(sexOptions)}
                handleChange={this.props.handleChange}
                selectedOption={this.props.search.selectedSexOption}/>

          <Race name="selectedColorOption"
                title="umaszczenie"
                options={this.mapOptions(colorOptions)}
                handleChange={this.props.handleChange}
                selectedOption={this.props.search.selectedColorOption}/>

          <Race name="selectedAgeOption"
                title="wiek"
                options={this.mapOptions(ageOptions)}
                handleChange={this.props.handleChange}
                selectedOption={this.props.search.selectedAgeOption}/>
        </div>
        </div>
    )
  }

}
export default SearchBox