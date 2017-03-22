import * as action from './action';

let todoId = 0;
export const addTodo = (text) => ({
    type: action.ADD_TODO,
    id: todoId++,
    text
})

export const deleteTodo = (id) => ({
    type: action.DELETE_TODO,
    id
})

export const toggleTodo = (id) => ({
    type: action.TOGGLE_TODO,
    id
})

export const setTodoText = (text) => ({
    type: action.SET_TODO_TEXT,
    text
})

export const initTodo = () => ({
    type: action.INIT_TODO_TEXT,    
})

export const modifyTodoText = (id, text) => ({
    type: action.MODIFY_TODO_TEXT,
    id,
    text
})

export const setDatabaseRef = (dbRef) => ({
    type: action.TODO_DATABASE_REF,
    database: dbRef,
})