import React, { Component } from 'react';
import { Text, View, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import styles from '../styles'

class CpAddTodo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onClickAddTodo, onInitTextInput, onSetText, todoText, dbRef } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: 'powderblue', flexDirection: 'row' }}>
        <TextInput
          style={{ flex: 1, borderColor: 'gray', borderWidth: 2, textAlign: 'center' }}
          onChangeText={text => onSetText(text)}
          onFocus={() => onInitTextInput()}
        />
        <TouchableOpacity
          activeOpacity={1}
          style={styles.buttonPress}
          onPress={() => onClickAddTodo(todoText)}
        >
          <Text style={styles.welcomePress}>push me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CpAddTodo;