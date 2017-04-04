import * as actions from '../action/action';

let initState = "";

const RdcTrackTodoText = (state = initState, action) => {
  switch (action.type) {
    // the action parameter
    // should be same as the returned values from action functions
    // such as addTodo, deleteTodo and toggleTodo except for type
    // ** actions param is action function itself **
    case actions.SET_TODO_TEXT:
      return action.text;
    
    case actions.INIT_TODO_TEXT:
      return "";
  }
  return state;
}

export default RdcTrackTodoText;