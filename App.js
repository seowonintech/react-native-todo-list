// React
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Reudx
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Custom
import TodoList from './src/containers/TodoList';
import AddTodo from './src/containers/AddTodo';
import reducers from './src/reducers';

const store = createStore(reducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <View style={styles.container}>
              <TodoList />
              <AddTodo />
              {/*<View style={{flex: 1, backgroundColor: 'powderblue'}} />
              <View style={{flex: 2, backgroundColor: 'skyblue'}} />
              <View style={{flex: 3, backgroundColor: 'steelblue'}} />*/}
          </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
