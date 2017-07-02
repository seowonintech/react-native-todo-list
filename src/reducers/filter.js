// import * as ActionTypes from '../actions/ActionTypes';

// const filter = (state = {}, action) => {
//     switch (action.type) {
//         case ActionTypes.FILTER_ALL:
//             return state;            
//         case ActionTypes.FILTER_ACTIVE:
//             for (var x in state) {
//                 state.todo.complete
//             }
//             return {
//                 ...state,
//             };
//         case ActionTypes.FILTER_COMPLETE:
//             return {
//                 ...state,
                
//             };
//         default:
//             return state;
//     }
// };
import * as ActionTypes from '../actions/ActionTypes';

const filter = (state = ActionTypes.FILTER_ALL, action) => {
    switch (action.type) {
        case ActionTypes.SET_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export default filter;