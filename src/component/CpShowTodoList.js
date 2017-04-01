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
    const { todoControl, showTodoList } = this.props;
    
    return todoList.map((todo) => {
      return (
        <View style={{ height: 30, backgroundColor: 'aquamarine', flexDirection: 'row', alignItems: 'center'}} key={todo.id}>
          {/*<TouchableOpacity
            activeOpacity={1}
            onPress={() => toggleTodo(todo.id)}
          >
            <RadioButton selected={todo.complete} />
          </TouchableOpacity>*/}
          <TextInput
            onChangeText={(text) => onModifyTodoText(todo.id, text)}
            style={styles.textInput}
            value={todo.text}
          />
          {/*<TouchableOpacity
            activeOpacity={1}
            style={styles.buttonPress}
            onPress={() => deleteTodo(todo.id)}
          >
            <Text style={styles.welcomePress}>Delete</Text>
          </TouchableOpacity>*/}
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