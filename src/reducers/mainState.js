import * as ActionTypes from '../actions/ActionTypes';

const initState = {
    textInput: ''
};

const mainState = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.INIT_TODO:
            return {
                textInput: ''
            };
        case ActionTypes.MODIFY_TODO:
            return {
                textInput: action.text
            };
        default:
            return state;
    }
};

export default mainState;