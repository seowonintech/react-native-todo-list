import * as ActionTypes from '../actions/ActionTypes';
import { Dimensions } from 'react-native';

const initState = {
    textInputValue: '',
    deviceWidth: Dimensions.get('window').width,
    deviceHeight: Dimensions.get('window').height
};

const mainState = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.INIT_TODO:
            return {
                ...state, // state 복사 안해주면 다른 항목들이 날아간다. 
                textInputValue: ''
            };
        case ActionTypes.SET_TEXT:
            return {
                ...state, // state 복사 안해주면 다른 항목들이 날아간다. 
                textInputValue: action.text
            };
        default:
            return state;
    }
};

export default mainState;