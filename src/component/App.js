import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CtTodoList from '../container/CtTodoList';
import CtAddTodo from '../container/CtAddTodo';
import { setDatabaseRef, refreshList } from '../action';

class App extends Component {
  constructor(props) {
    super(props);
    dispatch(setDatabaseRef(this.props.database));    
  }

  componentDidMount(){    
    let dbRef = this.props.database.ref('todos');
    dbRef.on('value', (snapshot) => {
      let todoList = snapshot.map(childSnapshot => {
        return {
          key: childSnapshot.key,
          text: childSnapshot.val().text,
          complete: childSnapshot.val().complete,
        };
      })
      dispatch(refreshList(todoList)); // array
    })
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