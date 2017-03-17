import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native'

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

  showList(todos, deleteTodo, onModifyTodoText) {
  // {/*onPress={() => deleteTodo(todo.id)}*/}
{/*onChangeText={(text) => onModifyTodoText(todo.id, text)}*/}    
    console.log('[KangLOG] todo.id at showList : ' + JSON.stringify(todos));
    return todos.map((todo) => {      
      return (
      <TextInput        
        onChangeText={(text) => onModifyTodoText(todo.id, text)}
        style={styles.textInput}
        key={todo.id}
        value={todo.text}
      />
    )});
  }

  render() {
    const { todos, deleteTodo, onModifyTodoText } = this.props;
    return (
      <View style={{flex: 1, backgroundColor: 'green'}}>
        {this.showList(todos, deleteTodo, onModifyTodoText)}
      </View>
    );
  }
}

export default CpShowTodoList;