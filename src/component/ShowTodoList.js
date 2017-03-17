import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ShowTodoList extends Component {
  constructor(props) {
    super(props);
  }

  showList(todos, deleteTodo) {
    return todos.map((todo) => (
      <Text 
        key={todo.id}
        onPress={() => deleteTodo(todo.id)}
      >
        {todo.text}
      </Text>
    ));
  }

  render() {
    const { todos, deleteTodo } = this.props;
    return (
      <View>
        {this.showList(todos, deleteTodo)}
      </View>
    );
  }
}

export default ShowTodoList;