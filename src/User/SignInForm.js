import React, { Component } from 'react'
import {withUser} from "./context/User";

class SignInForm extends Component {

  state = {
    username: '',
    password: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.signIn(this.state.username, this.state.password)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return(
      <div>
        <h2>Zaloguj się</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name='username'
            type='text'
            value={this.state.username}
            onChange={this.handleChange}
          />

          <input
            name='password'
            type='text'
            value={this.state.password}
            onChange={this.handleChange}
          />

          <button
            type='submit'
          >Zaloguj</button>
        </form>
      </div>
    )
  }
}

export default withUser(SignInForm);