// React
import React from 'react'
import { View, TextInput, Button, Dimensions } from 'react-native';
// Redux
import { connect } from 'react-redux';
// Custom
import * as ActionTypes from '../actions/ActionTypes';
import { addTodo, initTodo, setText } from '../actions';

let AddTodo = ({ onClickAddButton, mainState, handleChangeText, onInitText }) => (
    <View>
        <TextInput
            style={{width: mainState.deviceWidth, height: mainState.deviceHeight/20, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => handleChangeText(text)}
            value={mainState.textInputValue}
        />
        <Button
            title="Add"
            onPress={ () => {
                if ( !mainState.textInputValue.trim() ) return;
                onClickAddButton(mainState.textInputValue);
                onInitText();
            }}
        />
    </View>
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
    }
});

AddTodo = connect(mapStateToProps, dispatchToProps)(AddTodo);
// AddTodo = connect()(AddTodo);

export default AddTodo;