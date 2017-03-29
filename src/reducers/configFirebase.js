import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBRJP9y7Ax9LSS-nG6m7pf1XNeMxETPZe4",
    authDomain: "react-native-todo-list-43024.firebaseapp.com",
    databaseURL: "https://react-native-todo-list-43024.firebaseio.com",
    storageBucket: "react-native-todo-list-43024.appspot.com",
    messagingSenderId: "455336740943"
};

const configFirebase = {
    app: firebase.initializeApp(config),
    storage: firebase.storage(),
    database: firebase.database(),
};

export default configFirebase;