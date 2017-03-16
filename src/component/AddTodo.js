import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

class AddTodo extends Component {
  constructor(props) {
    super(props);
  }

  onShowList() {
    dispatch(addTodo());
}

  render() {
    return (
      <View>
        <TextInput
          onChangeText={ }
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          value={"Push"}
        />
        <Button
          onPress={onShowList()}
          title="Push me!"
        />
      </View>
    );
  }
}

const AddTodoToList = connect()(AddTodo);

export default AddTodoToList;