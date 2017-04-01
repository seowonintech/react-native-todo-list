import * as action from './action';

let todoId = 0;
export const addTodo = (text) => ({
    type: action.ADD_TODO,    
    text
})

export const deleteTodo = (key) => ({
    type: action.DELETE_TODO,
    key
})

export const toggleTodo = (key) => ({
    type: action.TOGGLE_TODO,
    key
})

export const setTodoText = (text) => ({
    type: action.SET_TODO_TEXT,
    text
})

export const initTodo = () => ({
    type: action.INIT_TODO_TEXT,    
})

export const modifyTodoText = (key, text) => ({
    type: action.MODIFY_TODO_TEXT,
    key,
    text
})

export const setDatabaseRef = (dbRef) => ({
    type: action.TODO_DATABASE_REF,
    database: dbRef,
})

export const refreshList = (todos) => ({
    type: action.REFRESH_TODO_LIST,
    todos,
})