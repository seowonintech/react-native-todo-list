import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

class AddTodo extends Component {
  constructor(props) {
    super(props);
  }

  onShowList() {
    console.log("aaaa");
  }

  render() {
    return (
      <View>
        <TextInput>AddTodo</TextInput>
        <Button
          onPress={onShowList}
          title="Push me!"
        />
      </View>
    );
  }
}

export default AddTodo;