import { combineReducers } from 'redux';
import * as ActionTypes from '../actions/ActionTypes';
import todos from './todos';

const todoApp = combineReducers({
    todos
});

export default todoApp;