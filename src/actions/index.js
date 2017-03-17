import * as ActionTypes from './ActionTypes';

let initId = 0;

export const initTodo = () => ({
    type: ActionTypes.INIT_TODO
});

export const setText = (text) => ({
    type: ActionTypes.SET_TEXT,
    text
});

export const modifyTodo = (id, text) => ({
    type: ActionTypes.MODIFY_TODO,
    id,
    text
});

export const addTodo = (text) => ({
    type: ActionTypes.ADD_TODO,
    id: initId++,
    text
});

export const removeTodo = (id) => ({
    type: ActionTypes.REMOVE_TODO,
    id
});