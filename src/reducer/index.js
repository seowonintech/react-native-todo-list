import { combineReducers } from 'redux';
import RdcManipulateTodos from './RdcManipulateTodos'
import RdcTrackTodoText from './RdcTrackTodoText'

const reducer = combineReducers({
  RdcManipulateTodos,
  RdcTrackTodoText
});

export default reducer;