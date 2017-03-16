import * as action from '../action/action';

let initState=
[
  {id:1, text:"aaaa"},
  {id:2, text:"bbbb"},
  {id:3, text:"cccc"}
]

const manipulateTodos = (state = initState, action) => {
  switch (action.type) {
    // the action parameter
    // should be same as the returned values from action functions
    // such as addTodo, deleteTodo and toggleTodo except for type
    // ** actions param is action function itself **
    case action.ADD_TODO:
      return [
        ...state,
        {
          // values returned from addTodo action such as id and text, but no type.
          id: action.id,
          text: action.text,
          complete: false
        }
      ];

    case action.DELETE_TODO:
      return state.filter(t => t.id !== action.id);

    // complete or not
    case action.TOGGLE_TODO:
      return state.map(t => {
        if (t.id === action.id){
          return {
            ...state,
            complete: !complete
          }
        }
      });
  }
  return state;
}

export default manipulateTodos;