import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './container/CtSetDBToApp';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBOz3euXj8nTuyHFW7FK6jbZXP_3FqwV8U",
    authDomain: "react-todos-e69e3.firebaseapp.com",
    databaseURL: "https://react-todos-e69e3.firebaseio.com",
    storageBucket: "react-todos-e69e3.appspot.com",
    messagingSenderId: "575260721031"
};
firebase.initializeApp(config);

// const logger = store => next => action => {
//   console.group(action.type);
//   console.info('dispatching', action);
//   let result = next(action);
//   console.warn('next state', store.getState());
//   console.groupEnd(action.type);
//   return result;
// }

// const logger2 = store => next => action => {
//   let result = next(action);
//   console.warn('second next state', store.getState());  
//   return result;
// }

// const store = createStore(reducer, applyMiddleware(logger, logger2));
const store = createStore(reducer);
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
