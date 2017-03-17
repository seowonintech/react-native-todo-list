import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native'

class CpShowTodoList extends Component {
  constructor(props) {
    super(props);
  }

  showList(todos, deleteTodo) {
    // {/*onPress={() => deleteTodo(todo.id)}*/}
    return todos.map((todo) => (
      <TextInput
        style={{height: 20, borderColor: 'gray', borderWidth: 2, alignText: 'center'}}
        key={todo.id}
        value={todo.text}
      />
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