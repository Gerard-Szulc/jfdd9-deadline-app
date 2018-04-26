import React, {Component} from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class Race extends Component{

  handleChange = (selectedOption) => {
    return this.props.handleChange(this.props.name,selectedOption);
    //console.log(selectedOption);

  }
  render() {

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