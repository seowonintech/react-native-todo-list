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
            let firebaseTodoList = snapshot.val();
            handleChangeDatabase(firebaseTodoList);
        });
    }

    render() {
        const { todos, handleChangeText, handleCheckedRadioButton, handleDelete } = this.props;

        // let arrayTodos = Object.entries(todos);
        let arrayTodos = Object.keys(todos).map(key => todos[key]);
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