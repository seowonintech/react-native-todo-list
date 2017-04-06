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

  componentDidMount() {
    const { dispatch, database } = this.props;
    console.warn('[KangLOG] Component did mount!! : ');
    dispatch(setDatabaseRef(database));

    let dbRef = database.ref("todo");
    dbRef.on('value', (snapshot) => {
      if (snapshot.val() != undefined) {
        var arrayOfTodos = Object.keys(snapshot.val()).map(key => {
          var item = snapshot.val()[key];
          return {
            key,
            text: item.text,
            complete: item.complete,
          };
        });
        // console.warn('[KangLOG] arrayOfTodos : ' + JSON.stringify(arrayOfTodos));
        dispatch(refreshList(arrayOfTodos)); // array
      }
      else { // When there is no data. Completely delete all items!
        dispatch(refreshList([]));
      }
    })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'steelblue' }}>
        <CtAddTodo />
        <CtTodoList />
      </View>
    );
  }
}

export default MainWindow;