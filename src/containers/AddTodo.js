// React
import React from 'react'
import { View, TextInput, KeyboardAvoidingView } from 'react-native';
// Redux
import { connect } from 'react-redux';
// Custom
import * as ActionTypes from '../actions/ActionTypes';
import { addTodo, initTodo, setText } from '../actions';
// Firebase
import { firebaseDB } from '../core/firebase';
// Material Design
import { Button } from 'react-native-elements';

const styles = {
    KeyboardAvoidingView: {
        justifyContent: 'center',
        flex: 1,
        flexDirection:'row',
        height: 40,        
    },
};

let AddTodo = ({ mainState, handleChangeText, onInitText }) => (
    <KeyboardAvoidingView contentContainerStyle={styles.KeyboardAvoidingView} behavior='position'>
        <TextInput
            style={{
                flex: 0.8,
                borderColor: 'grey',
                borderWidth: 1
            }}
            onChangeText={text => handleChangeText(text)}
            value={mainState.textInputValue}
            icon={{
                name: 'note-add'
            }}
        />
        <Button
            medium
            rounded
            buttonStyle={{
                flex: 1,
                marginRight: 0,
                marginLeft: 0,
            }}
            backgroundColor={mainState.mainColor}
            title="Add"
            icon={{
                name: 'add-circle' 
            }}
            fontWeight="bold"
            onPress={ () => {
                if ( !mainState.textInputValue.trim() ) return;
                let key = firebaseDB.ref().push({
                    complete: false,
                    text: mainState.textInputValue,
                }).key;
                onInitText();
            }}
            activeOpacity={0.7}
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
    handleChangeText: (text) => {
        dispatch(setText(text));
    },
});

AddTodo = connect(mapStateToProps, dispatchToProps)(AddTodo);
// AddTodo = connect()(AddTodo);

export default AddTodo;