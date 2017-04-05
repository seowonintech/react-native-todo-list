import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './container/CtSetDBToApp';
import * as actions from './action/action'
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBOz3euXj8nTuyHFW7FK6jbZXP_3FqwV8U",
    authDomain: "react-todos-e69e3.firebaseapp.com",
    databaseURL: "https://react-todos-e69e3.firebaseio.com",
    storageBucket: "react-todos-e69e3.appspot.com",
    messagingSenderId: "575260721031"
};
firebase.initializeApp(config);

const pushMiddleware = store => next => action => {
    if (action.type == actions.ADD_TODO){        
        var dbRef = store.getState().RdcManipulateTodos.database.ref("todo");
        dbRef.push({
            text: action.text,
            complete: false,
        });
    }
    return next(action);
}

const store = createStore(reducer, applyMiddleware(pushMiddleware));
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
