import * as ActionTypes from '../actions/ActionTypes';
import { Dimensions } from 'react-native';

const initState = {
    textInputValue: '',
    filter: 0,
    mainColor: '#009688', // teal
    subColor: '#E91E63', // pink
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
        // case ActionTypes.SET_FILTER:
        //     return {
        //         ...state, // state 복사 안해주면 다른 항목들이 날아간다. 
        //         filter: action.filter
        //     };
        default:
            return state;
    }
};

export default mainState;