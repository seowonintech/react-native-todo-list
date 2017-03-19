import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});


class CpShowTodoList extends Component {
  constructor(props) {
    super(props);
  }

  showList() {
    const { todos, deleteTodo, onModifyTodoText } = this.props;
    console.log('[KangLOG] todo.id at showList : ' + JSON.stringify(todos));
    return todos.map((todo) => {
      return (
        <View key={todo.id + 2}>
          <TextInput
            onChangeText={(text) => onModifyTodoText(todo.id, text)}
            style={styles.textInput}
            key={todo.id}
            value={todo.text}
          />
          <Button
            key={todo.id + 1}
            onPress={() => deleteTodo(todo.id)}
            title='delete'
          />
        </View>
      )
    });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'green' }}>
        {this.showList()}
      </View>
    );
  }
}

export default CpShowTodoList;