import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity, ScrollView } from 'react-native';
// Firebase
import { firebaseApp, firebaseDB } from '../core/firebase';
// Custom
import { RadioButton, Button } from '../lib/taesu-react-native';


let todoTest = firebaseDB.ref().on('value', (snapshot) => {
    console.log('[TS_LOG] snapshot : ' + JSON.stringify(snapshot.val()));
    let sampleTodos = snapshot.val();
    console.log('[TS_LOG] JSON.stringify(sampleTodos) : ' + JSON.stringify(sampleTodos));
    firebaseDatebase = JSON.stringify(sampleTodos);
});

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { todos, handleChangeText, handleCheckedRadioButton, handleDelete } = this.props;
        return (
            <ScrollView 
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    backgroundColor: 'skyblue',
                }}
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                
            </ScrollView>
        );
    }
}

export default Todo;