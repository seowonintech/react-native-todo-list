import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CtTodoList from '../container/CtTodoList';
import CtAddTodo from '../container/CtAddTodo';
import setDatabaseRef from '../action';

class App extends Component {
  constructor(props) {
    super(props);
    dispatch(setDatabaseRef(this.props.database));
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'steelblue'}}>
        <CtAddTodo />
        <CtTodoList />
      </View>
    );
  }
}

export default App;