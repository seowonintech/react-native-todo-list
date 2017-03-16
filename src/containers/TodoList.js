// React
import React, { Component } from 'react';
import { Text } from 'react-native';
// Redux
import { connect } from 'react-redux';
// Custom
import Todo from '../components/Todo';

// const TodoList = ({ todos }) => (
//    <Text>{ todos }123</Text>
// );

const mapStateToProps = (state) => ({
    todos: state.todos,
});

const TodoList = connect(mapStateToProps)(Todo);

export default TodoList;