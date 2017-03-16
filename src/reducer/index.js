import { combineReducers } from 'redux';
import manipulateTodos from './manipulateTodos'
import trackTodoText from './trackTodoText'

const reducer = combineReducers({
  manipulateTodos,
  trackTodoText
});

export default reducer;