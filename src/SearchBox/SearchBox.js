import React, {Component} from 'react'
import Race from "./Race";
import './searchbox.css';
import {withCatPage} from "../CatPage/context/CatPageContext";


class SearchBox extends Component{

   mapOptions = (option) => this.props.cats && this.props.cats.map(
    (element)=> element[option]
   ).reduce((result,nextItem) => result.includes(nextItem) ? result : result.concat(nextItem), []).map(
     item => ({ label: item, value: item })
   )





  render(){
    return(

      <div className="searchBox">

        <label>Wyszukaj kota</label>
        <div className="options">
          <Race name="selectedRaceOption"
                title="rasa"
                options={this.mapOptions('race')}
                handleChange={this.props.handleChange}
                selectedOption={this.props.search.selectedRaceOption}
          />

          <Race name="selectedSexOption"
                title="płeć"
                options={this.mapOptions('sex')}
                handleChange={this.props.handleChange}
                selectedOption={this.props.search.selectedSexOption}/>

          <Race name="selectedColorOption"
                title="umaszczenie"
                options={this.mapOptions('ointment')}
                handleChange={this.props.handleChange}
                selectedOption={this.props.search.selectedColorOption}/>

          <Race name="selectedAgeOption"
                title="wiek"
                options={this.mapOptions('age')}
                handleChange={this.props.handleChange}
                selectedOption={this.props.search.selectedAgeOption}/>
        </div>
        </div>
    )
  }

}
export default withCatPage(SearchBox)