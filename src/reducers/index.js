import { combineReducers } from 'redux';
import * as ActionTypes from '../actions/ActionTypes';
import todos from './todos';
import mainState from './mainState';
import filter from './filter';

const todoApp = combineReducers({
    todos,
    mainState,
    filter
});

export default todoApp;