import React, { Component } from 'react';
import { Text, View, Navigator, NativeModules } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './container/CtSetDBToApp';
// import { COLOR, ThemeProvider } from 'react-native-material-ui';

import * as firebase from 'firebase';

import {
    pushMiddleware,
    updateMiddleware,
    deleteMiddleware
} from './middleware';

var config = {
    apiKey: "AIzaSyBOz3euXj8nTuyHFW7FK6jbZXP_3FqwV8U",
    authDomain: "react-todos-e69e3.firebaseapp.com",
    databaseURL: "https://react-todos-e69e3.firebaseio.com",
    projectId: "react-todos-e69e3",
    storageBucket: "react-todos-e69e3.appspot.com",
    messagingSenderId: "575260721031"
};
firebase.initializeApp(config);

const store = createStore(reducer, applyMiddleware(
    pushMiddleware,
    updateMiddleware,
    deleteMiddleware,
));
// const store = createStore(reducer);
var database = firebase.database();

class TodoApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <App database={database} />
            </Provider>
        );
    }
}

export default TodoApp;
