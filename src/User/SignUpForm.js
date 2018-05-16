import React, { Component } from 'react'
import {withUser} from "./context/User";

class SignUpForm extends Component {

  state = {
    username: '',
    password: '',
    error: null
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.signUp(this.state.username, this.state.password).catch(
      error => this.setState({error: error})
    )
  }

  render() {
    return (
      <div className="form sigIn">
        <h2>Utwórz konto</h2>
        {this.state.error && <p>{this.state.error.message}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.username}
            name="username"
            type="text"
            onChange={this.handleChange}
            placeholder='E-mail'
            aria-label="Adres e-mail"
          />

          <br />
          <input
            value={this.state.password}
            name="password"
            type="password"
            onChange={this.handleChange}
            placeholder='E-mail'
            aria-label="Adres e-mail"
          />

          <br />
          <button>Utwórz konto</button>
        </form>
      </div>
    )
  }
}

export default withUser(SignUpForm)