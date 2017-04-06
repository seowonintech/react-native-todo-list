import React, { Component } from 'react';
import { TouchableOpacity, Text, View, TextInput, Button } from 'react-native'
import styles from '../styles'

const RadioButton = (props) => {
  return (
    <View style={[{
      height: 24,
      width: 24,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    }, props.style]}>
      {
        props.selected ?
          <View style={{
            height: 12,
            width: 12,
            borderRadius: 6,
            backgroundColor: '#000',
          }} />
          : null
      }
    </View>
  );
}

class CpShowTodoList extends Component {
  constructor(props) {
    super(props);
  }

  showList() {
    const { showTodoList, toggleTodo, deleteTodo, onModifyTodoText, onTemporarilyChangeText } = this.props;

    return showTodoList.map((todo) => {
      return (
        <View style={{ height: 30, backgroundColor: 'aquamarine', flexDirection: 'row', alignItems: 'center' }} key={todo.key}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => toggleTodo(todo)}
          >
            <RadioButton selected={todo.complete} />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            value={todo.text}
            onChangeText={(text) => onTemporarilyChangeText(todo, text)}
            onEndEditing={(text) => onModifyTodoText(todo, text)}
            returnKeyType="done"
          />                      
          <TouchableOpacity
            activeOpacity={1}
            style={styles.buttonPress}
            onPress={() => deleteTodo(todo)}
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