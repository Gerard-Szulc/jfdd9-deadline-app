import React, {Component} from 'react';
import {withUser} from "./context/User";
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import {withCatPage} from "./../CatPage/context/CatPageContext";
import CatContainer from "./../List/CatContainer";
import './css/style-form.css';
import firebase from 'firebase'


class UserProfile extends Component {
  render() {
    console.log(this.props.adoptionRequests)
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
              {              this.props.cats && this.props.cats.filter( cat =>
                this.props.adoptionRequests.some(request => request.catId === cat.id && request.user === this.props.user.uid)
              ).map(element=><CatContainer key={element.id} cat={element}/>)}

            </div>
            )
        }
      </div>
    )
  }
}

export default withUser(withCatPage(UserProfile));