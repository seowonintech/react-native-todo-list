// React
import React from 'react'
import { View, TextInput, Button } from 'react-native';
// Redux
import { connect } from 'react-redux';
// Custom
import * as ActionTypes from '../actions/ActionTypes';
import { addTodo, initTodo, setText } from '../actions';

let AddTodo = ({ onClickAddButton, textInputValue, handleChangeText, onInitText }) => (
    <View>
        <TextInput
            style={{width: 300, height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => handleChangeText(text)}
            value={textInputValue}
        />
        <Button
            title="Add"
            onPress={ () => {
                if ( !textInputValue.trim() ) return;
                onClickAddButton(textInputValue);
                onInitText();
            }}
        />
    </View>
);


// TODO: 뭔가 redux 를 이용해서 textinput value 컨트롤
const mapStateToProps = (state) => ({
    textInputValue: state.mainState.textInput
});

const dispatchToProps = (dispatch, ownProps) => ({
    onInitText: () => {
        dispatch(initTodo());
    },
    onClickAddButton: (text) => {
        dispatch(addTodo(text));
    },
    handleChangeText: (text) => {
        dispatch(setText(text));
    }
});

AddTodo = connect(mapStateToProps, dispatchToProps)(AddTodo);
// AddTodo = connect()(AddTodo);

export default AddTodo;