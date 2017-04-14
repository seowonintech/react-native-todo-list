// React
import React, { Component } from 'react';
import { Text } from 'react-native';
// Redux
import { connect } from 'react-redux';
// Custom
import Todo from '../components/Todo';
import { modifyTodo, completeTodo, deleteTodo, setTodoList } from '../actions';

// const TodoList = ({ todos }) => (
//    <Text>{ todos }123</Text>
// );

const mapStateToProps = (state) => ({
    todos: state.todos,
    mainState: state.mainState
});

const mapDispatchToProps = (dispatch) => ({
    handleCheckedRadioButton: (id) => {
        dispatch(completeTodo(id))
    },
    handleChangeDatabase: (todoList) => {
        dispatch(setTodoList((todoList)))
    },
});

const TodoList = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default TodoList;