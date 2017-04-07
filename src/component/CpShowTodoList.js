import React, { Component } from 'react';
import { TouchableOpacity, Text, View, TextInput } from 'react-native'
import styles from '../styles'
import {
  Button,
  SearchBar,
  CheckBox
} from 'react-native-elements';

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
        <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }} key={todo.key}>
          <CheckBox                        
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            containerStyle={{backgroundColor: 'white', borderWidth: 0, margin: 0, marginLeft: 10, marginRight: 0, padding: 0}}
            onPress={() => toggleTodo(todo)}
            checked={todo.complete}
          />
          <SearchBar
            noIcon
            lightTheme
            containerStyle={{ flex: 5, backgroundColor: 'white', margin: 0, marginLeft: 0, marginRight: 0, padding: 0, borderTopWidth: 0, borderBottomWidth: 0 }}
            value={todo.text}
            onChangeText={(text) => onTemporarilyChangeText(todo, text)}
            onEndEditing={(text) => onModifyTodoText(todo, text)}
            returnKeyType="done"
            placeholder='Type Here...' />
          <Button
            raised
            icon={{ name: 'cached' }}
            backgroundColor='#a97af8'
            borderRadius={30}
            buttonStyle={{ height: 30 }}
            onPress={() => deleteTodo(todo)}
            title='Del' />
        </View>
      )
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.showList()}
      </View>
    );
  }
}

export default CpShowTodoList;