import React, {Component} from 'react';
import {withUser} from "./context/User";
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import {withCatPage} from "./../CatPage/context/CatPageContext";
import CatContainer from "./../List/CatContainer";
import styleCss from './css/style-form.css';


class UserProfile extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="UserView">
        {
          this.props.user === null ? (
            <div className="if-no-user-container">
              <SignInForm />
              <SignUpForm />
            </div>

          ) : (
            <div>
              <h2>Twoje koty</h2>
            </div>
            )
        }
      </div>
    )
  }
}

export default withUser(withCatPage(UserProfile));