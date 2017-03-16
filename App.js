// React
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Reudx
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Custom
import TodoList from './src/containers/TodoList';
import reducers from './src/reducers';

const store = createStore(reducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <View style={styles.container}>
              {/*<Text>
                  "asdf"
              </Text>*/}
              <TodoList />
          </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
