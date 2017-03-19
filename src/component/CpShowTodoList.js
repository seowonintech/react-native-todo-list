import React, { Component } from 'react';
import { TouchableOpacity, Text, View, TextInput, Button } from 'react-native'
import styles from '../styles'

class CpShowTodoList extends Component {
  constructor(props) {
    super(props);
  }

  showList() {
    const { todos, deleteTodo, onModifyTodoText } = this.props;
    console.log('[KangLOG] todo.id at showList : ' + JSON.stringify(todos));
    return todos.map((todo) => {
      return (
        <View style={{height: 30, backgroundColor: 'aquamarine', flexDirection: 'row'}} key={todo.id}>
          <TextInput
            onChangeText={(text) => onModifyTodoText(todo.id, text)}
            style={styles.textInput}
            value={todo.text}
          />
          <TouchableOpacity
            activeOpacity={1}
            style={styles.buttonPress}
            onPress={() => deleteTodo(todo.id)}
          >
            <Text style={styles.welcomePress}>Delete</Text>
          </TouchableOpacity>
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