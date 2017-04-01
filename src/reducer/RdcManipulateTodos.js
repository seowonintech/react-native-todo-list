import * as actions from '../action/action';

const RdcManipulateTodos = (state = {}, action) => {
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

    case actions.ADD_TODO:
      let dbRef = action.database.ref('todos');
      dbRef.push({
        text: action.text,
        complete: false,
      });
      return state;

    case actions.DELETE_TODO:
      let dbRef = state.database.ref('todos');
      dbRef.child(action.key).remove();
      return state;

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