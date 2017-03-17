import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000066'
  },
  welcomePress: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
  button: {
    borderColor: '#000066',
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonPress: {    
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000066',
    backgroundColor: '#000066',
    borderWidth: 1,
    borderRadius: 10,
  },
});

class CpAddTodo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, onClickAddTodo, onInitTextInput, onSetText, todoText } = this.props;
    return (
      <View style={{flex: 1, backgroundColor: 'powderblue', flexDirection: 'row'}}>
        <TextInput
          style={{flex: 1, borderColor: 'gray', borderWidth: 2, textAlign: 'center'}}
          onChangeText={(text) => onSetText(text)}
          value={todoText}          
        />
        <TouchableOpacity
          activeOpacity={1}
          style={ styles.buttonPress }
          onPress={() => {onClickAddTodo(todoText); onInitTextInput()}}
        >
          <Text style={ styles.welcomePress }>push me</Text>
        </TouchableOpacity>

        {/*<Button 
          style={{flex: 1, borderColor: 'black', borderWidth: 2, textAlign: 'center'}}
          onPress={() => {onClickAddTodo(todoText); onInitTextInput()}}
          title="Push me!"
        />*/}
      </View>
    );
  }
}

export default CpAddTodo;