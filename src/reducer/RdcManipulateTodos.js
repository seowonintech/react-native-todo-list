import * as actions from '../action/action';

const RdcManipulateTodos = (state = {}, action) => {
  switch (action.type) {
    // the action parameter
    // should be same as the returned values from action functions
    // such as addTodo, deleteTodo and toggleTodo except for type
    // ** actions param is action function itself **    
    case actions.REFRESH_TODO_LIST:
      return action.todos;

    case actions.ADD_TODO:
      let dbRef = action.database.ref('todos');
      dbRef.push({
        text: action.text,
        complete: false,
      });
      return {
        ...state,
        keys: [
          ...state.keys,
          dbRef.key,
        ]
      };

    case actions.DELETE_TODO:
      let dbRef = state.database.ref('todos');
      state.keys.filter(key => {});      
      // return state.filter(t => t.id !== action.id);

    // complete or not
    case actions.TOGGLE_TODO:
      // return state.map(t => {
      //   if (t.id === action.id){
      //     return {
      //       ...t,
      //       complete: !t.complete
      //     }
      //   }
      //   return t;
      // });

    case actions.MODIFY_TODO_TEXT:
      // return state.map(t => {
      //   if (t.id === action.id){          
      //     var temp = {            
      //       ...t,
      //       text: action.text
      //     }
      //     return temp;
      //   }
      //   return t;
      // });
  }
  return state;
}

export default RdcManipulateTodos;