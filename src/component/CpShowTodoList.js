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
    
    return showTodoList.map((todo) => {
      return (
        <View style={{ height: 30, backgroundColor: 'aquamarine', flexDirection: 'row', alignItems: 'center'}} key={todo.key}>
          <TextInput
            style={styles.textInput}
            value={todo.text}
          />
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