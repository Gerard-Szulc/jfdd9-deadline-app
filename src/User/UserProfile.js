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
              <h1>Twoje koty</h1>
              {this.props.cats && this.props.cats.filter( cat => this.props.adopted.includes(cat.id) ).map(element=><CatContainer key={element.id} cat={element}/>)}
            </div>
            )
        }
      </div>
    )
  }
}

export default withUser(withCatPage(UserProfile));