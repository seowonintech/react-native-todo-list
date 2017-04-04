import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CtTodoList from '../container/CtTodoList';
import CtAddTodo from '../container/CtAddTodo';
import { setDatabaseRef, refreshList } from '../action';
import { connect } from 'react-redux'

class MainWindow extends Component {
  constructor(props) {
    super(props);        
  }

  componentDidMount(){
    const {dispatch} = this.props;
    dispatch(setDatabaseRef(this.props.database));

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

export default MainWindow;