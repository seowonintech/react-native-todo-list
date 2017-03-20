import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
// Custom
import { RadioButton, Button } from '../lib/taesu-react-native';

const Todo = ({ todos, handleChangeText, handleCheckedRadioButton, handleDelete }) => (
    <View style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'skyblue',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        {todos.map((todo, index) => (
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
    </View>
);

export default Todo;