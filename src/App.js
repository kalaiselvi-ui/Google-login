import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import Login from './Login';
import GoogleLogin from './google';
//import firebase from 'firebase/auth';
//import styledFirebaseAuth from 'react-firebaseui/styledFirebaseAuth';


class App extends Component{
  state = {
    isSignedIn: true
  }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      //firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks:{
      signInSuccess: () => false
    }
  }
  render(){
    return(
     <>
     <GoogleLogin />
     <Login />
      <div className="Login">
        {this.state.isSignedIn ? (
        <div> Signed In!</div>
    ):
    ( 
    <div> Not Signed In!</div>)}
      </div>
      </>
    );
  }
}
export default App;
