import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBOz3euXj8nTuyHFW7FK6jbZXP_3FqwV8U",
  authDomain: "react-todos-e69e3.firebaseapp.com",
  databaseURL: "https://react-todos-e69e3.firebaseio.com",
  projectId: "react-todos-e69e3",
  storageBucket: "react-todos-e69e3.appspot.com",
  messagingSenderId: "575260721031"
};
firebase.initializeApp(config);
var databaseRef = firebase.database().ref();

export default class App extends React.Component {

  componentDidMount() {
    databaseRef.on('value', function(snapshot) {
      snapshot.forEach(childSnapshot => {
        console.warn('[KangLOG] snapshwarnval() : ' + JSON.stringify( childSnapshot.val() ) + ' Key : ' + childSnapshot.key );
      });
    });
  }

  onPressLearnMore() {
    databaseRef.push({
      title: "aaa",
      content: "bbb",
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        />
        <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="#841584"
        />
      </View>
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
