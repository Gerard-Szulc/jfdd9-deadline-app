import React, {Component} from 'react';
import {withUser} from "./context/User";
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import {withCatPage} from "./../CatPage/context/CatPageContext";
import CatContainer from "./../CatContainer";


class UserProfil extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {
          this.props.user === null ? (
            <div>
              <SignInForm />
              <SignUpForm />
            </div>

          ) : (
            <div>
              <button onClick={this.props.signOut}>Wyloguj</button>
              <h1>Twoje koty</h1>
              jest zalogowany
              {this.props.cats && this.props.cats.filter( cat => this.props.adopted.includes(cat.id) ).map(element=><CatContainer key={element.id} cat={element}/>)}
            </div>
            )
        }
      </div>
    )
  }
}

export default withUser(withCatPage(UserProfil));