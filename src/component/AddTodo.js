import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

class AddTodo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, onClickAddTodo, onSetText, todoText } = this.props;    
    return (
      <View>
        <TextInput
          onChangeText={ (text) => onSetText(text) }
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}          
        />
        <Button
          onPress={() => onClickAddTodo(todoText)}
          title="Push me!"
        />
      </View>
    );
  }
}

export default AddTodo;