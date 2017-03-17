import * as ActionTypes from '../actions/ActionTypes';

let sampleTodos = [
    {
        id: 0,
        text: "eat"
    },
    {
        id: 1,
        text: "play"
    },
    {
        id: 2,
        text: "love"
    },
];

const todo = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return {
                id: action.id++,
                text: action.text
            };
        case ActionTypes.MODIFY_TODO:
            return {
                id: action.id,
                text: action.text
            };
        case ActionTypes.REMOVE_TODO:
            return {
                id: action.id
            };
        default:
            return state;
    }
};

const todos = (state = sampleTodos, action) => {
    switch ( action.type ) {
        case ActionTypes.ADD_TODO:
            return [
                ...state,
                todo(undefined, action) // 왜 첫번째 인수가 undefined인가? 안쓴다고 undefined?
                // {
                //     id: action.id,
                //     text: action.text
                // }
            ];
        case ActionTypes.MODIFY_TODO:
        {
            return state.map((val) => {
                if ( val.id === action.id ) {
                    return {
                        ...val,
                        id: action.id,
                        text: action.text
                    }
                }
                return val;
            });
        }
            
        case ActionTypes.REMOVE_TODO:
            return filter(val => {
                !val.id === action.id
            });
        default:
            return state;
    }
};

export default todos;