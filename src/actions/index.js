import * as ActionTypes from './ActionTypes';

let initId = 3;

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
    id: initId++, // initId 가 id: 값으로 적용 되고 ++ 연산된다 주의하자!
    text
});

export const deleteTodo = (id) => ({
    type: ActionTypes.DELETE_TODO,
    id
});

export const completeTodo = (id) => ({
    type: ActionTypes.COMPLETE_TODO,
    id
});