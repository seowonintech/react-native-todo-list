import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity, ScrollView } from 'react-native';
// Firebase
import { firebaseDB } from '../core/firebase';
// Custom
import { RadioButton, Button } from '../lib/taesu-react-native';

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { handleChangeDatabase } = this.props;

        let todoTest = firebaseDB.ref().on('value', (snapshot) => {
            console.log('[TS_LOG] snapshot : ' + JSON.stringify(snapshot.val()));
            let firebaseTodoList = snapshot.val();
            handleChangeDatabase(firebaseTodoList);
        });
    }

    render() {
        const { todos, handleChangeText, handleCheckedRadioButton, handleDelete } = this.props;

        console.log('[TS_LOG] Object.keys(todos) : ' + Object.keys(todos));
        console.log('[TS_LOG] typeof todos : ' + typeof Object.keys(todos));
        console.log('[TS_LOG] todos : ' + JSON.stringify(todos));
        console.log('[TS_LOG] arrayTodos : ' + arrayTodos);
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