import { combineReducers } from 'redux';
import * as ActionTypes from '../actions/ActionTypes';
import todos from './todos';
import mainState from './mainState';

const todoApp = combineReducers({
    todos,
    mainState,
});

export default todoApp;