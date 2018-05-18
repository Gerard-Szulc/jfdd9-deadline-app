import React, { Component } from 'react'
import {withUser} from "./context/User";

const errorMessage = (code) => {
  switch (code) {
    case 'auth/invalid-email':
      return 'Nieprawidłowy adres e-mail'
    case 'auth/email-already-in-use':
      return 'Adres e-mail jest już w użyciu'
  }
}

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
        <p className="MessageError">{this.state.error && errorMessage(this.state.error.code)}</p>
        <form onSubmit={this.handleSubmit}>
          <div>
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
            </div>
          <button>Utwórz konto</button>
        </form>
      </div>
    )
  }
}

export default withUser(SignUpForm)