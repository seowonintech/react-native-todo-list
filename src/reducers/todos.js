import * as ActionTypes from '../actions/ActionTypes';

let sampleTodos = [
    {
        id: 0,
        complete: false,
        text: "eat"
    },
    {
        id: 1,
        complete: false,
        text: "play"
    },
    {
        id: 2,
        complete: false,
        text: "love"
    },
];

const todo = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return {
                id: action.id++,
                complete: false,
                text: action.text,
            };
        case ActionTypes.MODIFY_TODO:
            return {
                id: action.id,
                text: action.text,
            };
        case ActionTypes.REMOVE_TODO:
            return {
                id: action.id,
            };
        case ActionTypes.COMPLETE_TODO:
            return {
                id: action.id,
                complete: !state.complete
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
        case ActionTypes.COMPLETE_TODO:
            return state.map((val) => {
                if ( val.id === action.id ) {
                    return {
                        ...val,
                        id: action.id,
                        complete: !val.complete
                    }
                }
                return val;
            });
        default:
            return state;
    }
};

export default todos;