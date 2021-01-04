import React, { Component } from 'react';
import './login.css';
import google from './google.png';
import firebase from './firebase';

class Login extends Component{
    constructor(){
        super();
        this.state={
            isLogIn:false,
            name:"",
            photo:""
        }
    }  

    onSubmit = () =>{
       var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  })
  .catch((error) => {
     console.log(error);
  });
    }
    componentDidMount =() =>{
        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                console.log("user signed in")
                console.log(user.displayName + '\n' + user.email);
            }else{
                console.log("no user signed in")
            }
        });
    }
  
render(){
    return(
        <>
        <div className="login-form">
            <div className="gog-img">
        <img src= {google} alt="google" />
        <button type="button" className="signin" onClick={this.onSubmit}> Login with Google</button>
        </div>

        <h2>Login /Sign Up with your Email </h2>
        <span>Enter your Email <labelAsterisk style={{color:"#db3131"}}>*</labelAsterisk></span><br/><br/>
        <input type="text" placeholder="Enter email" labelAsterisk>
        </input><br/><br/>
        <button type="button" className="submit">Continue</button>
        </div>
        </>
    );
}

}
export default Login;