import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ShowTodoList extends Component {
  constructor(props) {
    super(props);
  }

  showList() {
    return this.todos.map(todo => (
      <Text>
        {todo.text}
      </Text>
    ));
  }

  render() {
    const { todos } = this.props;
    return (
      <View>
        {JSON.stringify(todos[0])}
        {/*{this.showList()}*/}
      </View>
    );
  }
}

export default ShowTodoList;