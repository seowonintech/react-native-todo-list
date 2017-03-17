import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

const Todo = ({ todos, handleChangeText, mainState }) => (
    <View>
        {todos.map((todo, index) => (
            <TextInput
                style={{width: mainState.deviceWidth, height: mainState.deviceHeight/20, borderColor: 'gray', borderWidth: 1}}
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