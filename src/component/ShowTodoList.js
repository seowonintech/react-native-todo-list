import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ShowTodoList extends Component {
  constructor(props) {
    super(props);
  }

  showList(todos) {
    return todos.map((todo, index) => (
      <Text key={index}>
        {todo.text}
      </Text>
    ));
  }

  render() {
    const { todos } = this.props;
    return (
      <View>
        {this.showList(todos)}
      </View>
    );
  }
}

export default ShowTodoList;