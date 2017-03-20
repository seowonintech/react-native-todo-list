import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity, Button } from 'react-native';
// Custom
import { RadioButton } from '../lib/taesu-react-native';

const Todo = ({ todos, handleChangeText, handleCheckedRadioButton }) => (
    <View style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'skyblue',
            justifyContent: 'center'
        }}>
        {todos.map((todo, index) => (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: 'skyblue',
                    justifyContent: 'center',
                }}
                key={index}
            >
                <TouchableOpacity 
                    onPress={() => handleCheckedRadioButton(todo.id)}
                >
                    <RadioButton complete={todo.complete} />
                </TouchableOpacity>
                    <TextInput
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderColor: 'gray',
                            borderWidth: 1,
                            height: 30,
                            flex: 1
                        }}
                        value={todo.text}
                        onChangeText={text => {
                            handleChangeText(index, text);
                        }}
                    />
            </View>
        ))}
    </View>
);

export default Todo;