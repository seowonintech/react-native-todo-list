import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TodoList from '../container/TodoList';
import TrackTodoText from '../container/TrackTodoText';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TrackTodoText />
        <TodoList />
      </View>
    );
  }
}

export default App;