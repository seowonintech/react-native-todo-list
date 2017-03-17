import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

const Todo = ({ todos, handleChangeText, mainState }) => (
    // <View style={{flexDirection: 'column', width: 140, height: 100}}>
    <View style={{flexDirection: 'column', flex: 0.95}}>
        {todos.map((todo, index) => (
            <TextInput
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 150,
                    flexDirection: 'row', 
                    borderColor: 'gray',
                    borderWidth: 1
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