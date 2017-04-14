import * as ActionTypes from '../actions/ActionTypes';
// Firebase
import firebaseDB from '../core/firebase';

// let sampleTodos = [
//     {
//         id: 0,
//         complete: false,
//         text: "eat"
//     },
//     {
//         id: 1,
//         complete: false,
//         text: "play"
//     },
//     {
//         id: 2,
//         complete: false,
//         text: "love"
//     },
// ];

let initTodoList = {
    hash1: {
        complete: false,
        text: "",
    },
};

const todo = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            // configFirebase.database().ref('/todo').set(action.text);
            firebaseDB.ref().push({
                complete: false,
                text: action.text,
            });
            return;
        case ActionTypes.MODIFY_TODO:
            return {
                id: action.id,
                text: action.text,
            };
        case ActionTypes.DELETE_TODO:
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

const todos = (state = {}, action) => {
    switch ( action.type ) {
        case ActionTypes.SET_TODOLIST:
            return action.todoList;
        case ActionTypes.ADD_TODO:
            todo(undefined, action);
            return;
            // 왜 첫번째 인수가 undefined인가? 
            // => 안 쓸때, null이나 undefined로 처리함.
                // {
                //     id: action.id,
                //     text: action.text
                // }
        // case ActionTypes.MODIFY_TODO:
        // {
        //     return state.map((val) => {
        //         if ( val.id === action.id ) {
        //             return {
        //                 ...val,
        //                 id: action.id,
        //                 text: action.text
        //             }
        //         }
        //         return val;
        //     });
        // }
            
        // case ActionTypes.DELETE_TODO:
        //     return state.filter(val => val.id !== action.id);
        // case ActionTypes.COMPLETE_TODO:
        //     return state.map((val) => {
        //         if ( val.id === action.id ) {
        //             return {
        //                 ...val,
        //                 id: action.id,
        //                 complete: !val.complete
        //             }
        //         }
        //         return val;
        //     });
        default:
            return state;
    }
};

export default todos;