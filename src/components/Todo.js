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

        console.log('[TS_LOG] 123Object.keys(todos) : ' + Object.keys(todos));
        console.log('[TS_LOG] typeof todos : ' + typeof Object.keys(todos));
        console.log('[TS_LOG] todos : ' + JSON.stringify(todos));

        // let arrayTodos = Object.entries(todos);
        let arrayTodos = Object.keys(todos).map(key => todos[key]);
        console.log('[TS_LOG] ### arrayTodos : ' + JSON.stringify(arrayTodos));
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
                {arrayTodos.map((todo, index) => (
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            backgroundColor: 'skyblue',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        key={index}
                    >
                        <TouchableOpacity 
                            onPress={() => handleCheckedRadioButton(todo.id)}
                        >
                            <RadioButton complete={todo.complete} />
                        </TouchableOpacity>
                        <View style={{flex: 1}}>
                            <TextInput
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                    height: 30,
                                    flex: 1,
                                }}
                                value={todo.text}
                                onChangeText={text => {
                                    handleChangeText(index, text);
                                }}
                            />
                        </View>
                        <TouchableOpacity 
                            onPress={() => handleDelete(todo.id)}
                        >
                            <Button />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        );
    }
}

export default Todo;