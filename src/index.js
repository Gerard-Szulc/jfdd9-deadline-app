import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase'
import config from './config/firebaseConfig'

firebase.initializeApp(config);

// firebase.auth().createUserWithEmailAndPassword(
//   'ewa@gmail.com',
//   'test1234'
// )

// firebase.auth().signInWithEmailAndPassword(
//   'ewa@gmail.com',
//   'test1234'
// ).then(
//   result => console.log(result.user.email)
// ).catch(
//   error => console.log(error.message)
// )

// firebase.auth().signOut()

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
