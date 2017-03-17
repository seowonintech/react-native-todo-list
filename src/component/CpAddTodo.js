import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

class CpAddTodo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, onClickAddTodo, onInitTextInput, onSetText, todoText } = this.props;
    return (
      <View>
        <TextInput
          onChangeText={(text) => onSetText(text)}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          value={todoText}
        />
        <Button
          onPress={() => {onClickAddTodo(todoText); onInitTextInput()}}
          title="Push me!"
        />
      </View>
    );
  }
}

export default CpAddTodo;