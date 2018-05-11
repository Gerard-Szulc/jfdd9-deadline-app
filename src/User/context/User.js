import React, { Component } from 'react';
import firebase from 'firebase';
const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

export class UserProvider extends Component{
  state = {
    user: null,
    signIn: (username, password) => {
      firebase.auth().signInWithEmailAndPassword(username, password)
    },

    signOut: () => {
      firebase.auth().signOut();
    },

    signUp: (username, password) => {
      firebase.auth().createUserWithEmailAndPassword(username, password)
    },
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(
      user => this.setState({user: user})
    )
  }

  render() {
    return(
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export function withUser(Component) {
  function UserAwareComponent(props) {
    return (
      <UserContext.Consumer>
        {
          state => <Component {...props} {...state}/>
        }
      </UserContext.Consumer>
    )
  }

  UserAwareComponent.displayName = `UserAware(${Component.displayName || Component.name || 'Component'})`
  return UserAwareComponent
}