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
    projectId: "react-todos-e69e3",
    storageBucket: "react-todos-e69e3.appspot.com",
    messagingSenderId: "575260721031"
};
firebase.initializeApp(config);

const pushMiddleware = store => next => action => {
    if (action.type == actions.ADD_TODO) {
        var dbRef = store.getState().RdcManipulateTodos.database.ref("todo");
        dbRef.push({
            text: action.text,
            complete: false,
        });
    }
    return next(action);
}

const updateMiddleware = store => next => action => {
    if (action.type == actions.TOGGLE_TODO) {
        var dbRef = store.getState().RdcManipulateTodos.database.ref("todo");
        var childRef = dbRef.child(action.todo.key);
        childRef.update({
            complete: !action.todo.complete,
        });
    }

    if (action.type == actions.MODIFY_TODO_TEXT) {
        var dbRef = store.getState().RdcManipulateTodos.database.ref("todo");
        var childRef = dbRef.child(action.todo.key);
        childRef.update({
            text: action.todo.text,
        });
    }
    return next(action);
}

const deleteMiddleware = store => next => action => {
    if (action.type == actions.DELETE_TODO) {
        var dbRef = store.getState().RdcManipulateTodos.database.ref("todo");
        var childRef = dbRef.child(action.todo.key);
        childRef.remove();
    }
    return next(action);
}

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
