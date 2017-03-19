import * as actions from '../action/action';

const RdcManipulateTodos = (state = [], action) => {
  switch (action.type) {
    // the action parameter
    // should be same as the returned values from action functions
    // such as addTodo, deleteTodo and toggleTodo except for type
    // ** actions param is action function itself **    
    case actions.ADD_TODO:    
      return [
        ...state,
        {
          // values returned from addTodo action such as id and text, but no type.
          id: action.id,
          text: action.text,
          complete: false
        }
      ];

    case actions.DELETE_TODO:
      return state.filter(t => t.id !== action.id);

    // complete or not
    case actions.TOGGLE_TODO:
      return state.map(t => {
        if (t.id === action.id){
          return {
            ...t,
            complete: !complete
          }
        }
        return t;
      });

    case actions.MODIFY_TODO_TEXT:
      return state.map(t => {
        if (t.id === action.id){          
          var temp = {            
            ...t,
            text: action.text
          }
          return temp;
        }
        return t;
      });
  }
  return state;
}

export default RdcManipulateTodos;