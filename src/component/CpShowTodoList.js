import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'

class CpShowTodoList extends Component {
  constructor(props) {
    super(props);
  }

  showList(todos, deleteTodo) {
    return todos.map((todo) => (
      <TextInput 
        style={{backgroundColor: 'yellow', borderColor: 'gray', borderWidth: 2, textAlign: 'center'}}
        key={todo.id}
        onPress={() => deleteTodo(todo.id)}
      >
        {todo.text}
      </TextInput>
    ));
  }

  render() {
    const { todos, deleteTodo } = this.props;
    return (
      <View style={{flex: 1, backgroundColor: 'green'}}>
        {this.showList(todos, deleteTodo)}
      </View>
    );
  }
}

export default CpShowTodoList;