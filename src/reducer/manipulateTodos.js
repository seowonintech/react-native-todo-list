import * as actions from '../action/action';

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
    case actions.ADD_TODO:
    console.warn('[Kang] action.text : ' + action.text);
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
            ...state,
            complete: !complete
          }
        }
      });
  }
  return state;
}

export default manipulateTodos;