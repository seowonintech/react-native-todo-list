import * as actions from '../action/action';

const RdcManipulateTodos = (state = {}, action) => {
  let dbRef;
  
  switch (action.type) {
    // the action parameter
    // should be same as the returned values from action functions
    // such as addTodo, deleteTodo and toggleTodo except for type
    // ** actions param is action function itself **      

    // Init database object
    // and key array
    case actions.SET_DATABASE_REF:
      return {
        database: action.database,
      };
    
    // You are not supposed to use any functions in reducer??
    case actions.ADD_TODO:
      return state;

    case actions.DELETE_TODO:
      return state;

    case actions.TOGGLE_TODO:
      return state;

    case actions.MODIFY_TODO_TEXT:
      return state;
  }
  return state;
}

export default RdcManipulateTodos;