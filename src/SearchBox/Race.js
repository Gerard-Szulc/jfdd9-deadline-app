import React, {Component} from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class Race extends Component{

  handleChange = (selectedOption) => {
    //console.log(selectedOption);

    return this.props.handleChange(this.props.name,selectedOption);


  }

  render() {
    //console.log(this.props.selectedOption)
    return (
      <Select style={{width: "150px"}} multi={true} removeSelected={false}
        name="form-field-name"
        value={this.props.selectedOption}
        onChange={this.handleChange}
        options={this.props.options}
      />
    );
  }
}

export default Race