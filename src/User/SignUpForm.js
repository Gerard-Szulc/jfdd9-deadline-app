import React, { Component } from 'react'
import {withUser} from "./context/User";

class SignUpForm extends Component {

  state = {
    username: '',
    password: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.signUp(this.state.username, this.state.password)
  }

  render() {
    return (
      <div>
        <h2>Rejestracja</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.username}
            name="username"
            type="text"
            onChange={this.handleChange}
          />
          <input
            value={this.state.password}
            name="password"
            type="password"
            onChange={this.handleChange}
          />
          <button>Zarejestruj</button>
        </form>
      </div>
    )
  }
}

export default withUser(SignUpForm)