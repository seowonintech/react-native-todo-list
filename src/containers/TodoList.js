// React
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Custom
import Todo from '../components/Todo';
import { modifyTodo, completeTodo, deleteTodo, setTodoList } from '../actions';

const mapStateToProps = (state) => ({
    todos: state.todos,
    mainState: state.mainState,
    filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
    handleChangeDatabase: (todoList) => {
        dispatch(setTodoList(todoList));
    },
});

const TodoList = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default TodoList;