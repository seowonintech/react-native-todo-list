import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBOz3euXj8nTuyHFW7FK6jbZXP_3FqwV8U",
  authDomain: "react-todos-e69e3.firebaseapp.com",
  databaseURL: "https://react-todos-e69e3.firebaseio.com",
  storageBucket: "react-todos-e69e3.appspot.com",
  messagingSenderId: "575260721031"
};
firebase.initializeApp(config);

export var dbRef = firebase.database().ref();