// React
import React, { Component } from 'react';
import { Text } from 'react-native';
// Redux
import { connect } from 'react-redux';
// Custom
import Todo from '../components/Todo';
import { modifyTodo } from '../actions';

// const TodoList = ({ todos }) => (
//    <Text>{ todos }123</Text>
// );

const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
    handleChangeText: (id, text) => {
        dispatch(modifyTodo(id, text))
    }
});

const TodoList = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default TodoList;