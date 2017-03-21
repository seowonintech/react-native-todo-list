import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './component/App';

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

class TodoApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

export default TodoApp;
