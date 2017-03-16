import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TodoList from '../container/TodoList';
import AddTodoToList from '../component/AddTodo';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <AddTodo />
        <TodoList />
      </View>
    );
  }
}

export default App;