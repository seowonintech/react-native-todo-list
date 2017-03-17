import * as ActionTypes from './ActionTypes';

let initId = 0;

export const initTodo = () => ({
    type: ActionTypes.INIT_TODO
});

export const modifyTodo = (text) => ({
    type: ActionTypes.MODIFY_TODO,
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