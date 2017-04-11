// React
import React from 'react'
import { View, TextInput, Button, KeyboardAvoidingView } from 'react-native';
// Redux
import { connect } from 'react-redux';
// Custom
import * as ActionTypes from '../actions/ActionTypes';
import { addTodo, initTodo, setText } from '../actions';
// Firebase
import { firebaseDB } from '../core/firebase';

const styles = {
    KeyboardAvoidingView: {
        justifyContent: 'center',
        flex: 1,
        flexDirection:'row',
        backgroundColor: 'pink',
        height: 40,
    }
};

let AddTodo = ({ onClickAddButton, mainState, handleChangeText, onInitText, handleAuth }) => (
    <KeyboardAvoidingView contentContainerStyle={styles.KeyboardAvoidingView} behavior='position'>
        <TextInput
            style={{flex: 1, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => handleChangeText(text)}
            value={mainState.textInputValue}
        />
        <Button
            title="Add"
            onPress={ () => {
                if ( !mainState.textInputValue.trim() ) return;
                {/*onClickAddButton(mainState.textInputValue);*/}
                firebaseDB.ref().push({
                    complete: false,
                    text: mainState.textInputValue,
                });
                onInitText();
            }}
        />
        <Button
            title="Auth"
            onPress={ () => {
                handleAuth();
            }}
        />
    </KeyboardAvoidingView>
);


// TODO: 뭔가 redux 를 이용해서 textinput value 컨트롤
const mapStateToProps = (state) => ({
    mainState: state.mainState
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
    },
    handleAuth: () => {
        dispatch(initTodo());
    },
});

AddTodo = connect(mapStateToProps, dispatchToProps)(AddTodo);
// AddTodo = connect()(AddTodo);

export default AddTodo;