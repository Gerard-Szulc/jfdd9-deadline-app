import React, { Component } from 'react'
import {withUser} from "./context/User";

class SignInForm extends Component {

  state = {
    username: '',
    password: '',
    error: null
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.signIn(this.state.username, this.state.password).catch(
      error => this.setState({error})
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
        {this.state.error && <p>{this.state.error.message}</p>}
        <form onSubmit={this.handleSubmit}>
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

          <br />
          <button
            type='submit'
          >Zaloguj</button>
        </form>
      </div>
    )
  }
}

export default withUser(SignInForm);