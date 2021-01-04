import firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyChG2n7ZF26WGFxguZCHgY-hGEQXq9l8os",
    authDomain: "login-84db0.firebaseapp.com",
    projectId: "login-84db0",
    storageBucket: "login-84db0.appspot.com",
    messagingSenderId: "310875067361",
    appId: "1:310875067361:web:d43e151f7972775e1c38a0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;