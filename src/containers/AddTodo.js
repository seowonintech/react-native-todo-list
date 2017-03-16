// React
import React from 'react'
import { View, TextInput, Button } from 'react-native';
// Redux
import { connect } from 'react-redux';
// Custom
import * as ActionTypes from '../actions/ActionTypes';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
    let value;
    let textInput;

    return(
        <View>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={text => value = text}
                ref={node => {
                    textInput = node
                }}
                value={value}
            />
            <Button
                title="Add"
                onPress={ () => {
                    console.warn('[TS_Warning] value : ' + value);
                    dispatch(addTodo(value));
                    this.value = ' ';
                }}
            />
        </View>
    );
}

// TODO: 뭔가 redux 를 이용해서 textinput value 컨트롤
const mapStateToProps = (state) => ({

});

// const dispatchToProps = (dispatch) => ({
//     onClickAddButton: dispatch(addTodo('test'))
// });

// AddTodo = connect(undefined, dispatchToProps)(AddTodo);
AddTodo = connect()(AddTodo);

export default AddTodo;