import React, { Component } from 'react';
import { Text, View, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import styles from '../styles';
import {
  Button,
  SearchBar
} from 'react-native-elements';

class CpAddTodo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onClickAddTodo, onInitTextInput, onSetText, todoText, dbRef } = this.props;
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <SearchBar
          noIcon
          round
          containerStyle={{flex: 1, backgroundColor: 'white', borderTopWidth: 0, borderBottomWidth: 0}}
          onChangeText={text => onSetText(text)}
          onFocus={() => onInitTextInput()}
          placeholder='Type Here...' />
        <Button
          raised
          icon={{ name: 'cached' }}
          backgroundColor='#397af8'
          borderRadius={30}
          buttonStyle={{height: 30}}
          onPress={() => onClickAddTodo(todoText)}
          title='Add' />
      </View>
    );
  }
}

export default CpAddTodo;