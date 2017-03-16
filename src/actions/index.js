import * as ActionTypes from './ActionTypes';

let initId = 0;

const addTodo = (text) => ({
    type: ActionTypes.ADD_TODO,
    id: initId++,
    text
});

const removeTodo = (id) => ({
    type: ActionTypes.REMOVE_TODO,
    id
});