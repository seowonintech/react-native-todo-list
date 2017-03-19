import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

const Todo = ({ todos, handleChangeText, mainState }) => (
    // <View style={{flexDirection: 'column', width: 140, height: 100}}>
    <View style={{
        flex: 95,
        flexDirection: 'column',
        backgroundColor: 'skyblue',
        justifyContent: 'center'
    }}>
        {todos.map((todo, index) => (
            <TextInput
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: 'gray',
                    borderWidth: 1,
                    height: 30
                }}
                key={index}
                value={todo.text}
                onChangeText={text => {
                    handleChangeText(index, text);
                }}
            />
        ))}
    </View>
);

export default Todo;