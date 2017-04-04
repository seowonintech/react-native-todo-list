import { combineReducers } from 'redux';
import RdcManipulateTodos from './RdcManipulateTodos'
import RdcTrackTodoText from './RdcTrackTodoText'
import RdcFirebaseController from './RdcFirebaseController'

const reducer = combineReducers({
  RdcManipulateTodos,
  RdcTrackTodoText,
  RdcFirebaseController,
});

export default reducer;