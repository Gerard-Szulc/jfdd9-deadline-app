import React, { Component } from 'react'
import {withUser} from "./context/User";

const errorMessage = (code) => {
  switch (code) {
    case 'auth/user-not-found':
      return 'Nie ma takiego użytkownika.'
    case 'auth/wrong-password':
      return 'Niepoprawne hasło.'
    case 'auth/weak-password':
      return 'Ustal silniejsze hasło'
  }
}

class SignInForm extends Component {

  state = {
    username: '',
    password: '',
    error: null
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.signIn(this.state.username, this.state.password).catch(
      error => this.setState({error:error})
    )
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return(
      <div className="form sigIn">
        <h2>Zaloguj się</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <p className="MessageError">{this.state.error && errorMessage(this.state.error.code)}</p>
            <input
              name='username'
              type='text'
              value={this.state.username}
              onChange={this.handleChange}
              placeholder='E-mail'
              aria-label="Adres e-mail"
            />

            <br />
            <input
              name='password'
              type='password'
              value={this.state.password}
              onChange={this.handleChange}
              placeholder='Hasło'
              aria-label="Hasło"
            />
          </div>
          <button
            type='submit'
          >Zaloguj</button>
        </form>
      </div>
    )
  }
}

export default withUser(SignInForm);