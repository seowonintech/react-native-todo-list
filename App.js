// React
import React from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
// Reudx
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Custom
import reducers from './src/reducers';
import { AddTodo, VisibilityFilter, TodoList } from './src/containers';
import Filter from './src/components/Filter';

const store = createStore(reducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ScrollView style={styles.container}>
            <Filter />
            <TodoList />
            <AddTodo />
        </ScrollView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
