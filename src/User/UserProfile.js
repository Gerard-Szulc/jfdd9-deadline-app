import React, {Component} from 'react';
import {withUser} from "./context/User";
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import {withCatPage} from "./../CatPage/context/CatPageContext";
import CatContainer from "./../List/CatContainer";
import {Link} from "react-router-dom";
import styleCss from './css/style-form.css';

const isShelter = userId => {
  return (
    userId === 'YcFFJByZ6nUuxFfzbvO9jHYUMHJ3' ||
      userId === 'TFFiewHfyjZxcpo18nPAFb2HyRU2' ||
      userId === '2nfC3GoY4TRw3v0NDNzctBFJAL02' ?
      true
      : false
  )
}

class UserProfile extends Component {
  render() {
    console.log(this.props.adoptionRequests)
    return (
      <div className="UserView">

        {this.props.user && isShelter(this.props.user.uid) === true? (
          <div className="shelter-panel">
            <Link to="/add-cat"><button className="CTA">Dodaj kota do adopcji</button></Link>
          </div>
        ) : null}

        {
          this.props.user === null ? (
            <div className="if-no-user-container">
              <SignInForm />
              <SignUpForm />
            </div>

          ) : (
            <div>
              <h2>Twoje koty</h2>
              {
                this.props.cats && this.props.cats.filter(
                  cat => this.props.adoptionRequests.some(
                    request => request.catId === cat.id && request.user === this.props.user.uid
                  )
                ).map(
                  element => <CatContainer key={element.id} cat={element}/>
                )
              }
            </div>
          )
        }
      </div>
    )
  }
}

export default withUser(withCatPage(UserProfile));