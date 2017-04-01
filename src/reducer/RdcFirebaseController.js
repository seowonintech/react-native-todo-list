import * as actions from '../action/action';

const RdcFirebaseController = (state = [], action) => {
  switch (action.type) {
    // the action parameter
    // should be same as the returned values from action functions
    // such as addTodo, deleteTodo and toggleTodo except for type
    // ** actions param is action function itself **

    // Data from firebase
    // Show the todo list   
    case actions.REFRESH_TODO_LIST:
      return action.todos;
  }
  return state;
}

export default RdcFirebaseController;