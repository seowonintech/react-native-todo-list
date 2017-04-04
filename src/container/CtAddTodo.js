import { connect } from 'react-redux'
import CpAddTodo from '../component/CpAddTodo'
import { addTodo, setTodoText, initTodo } from '../action'

const mapStateToProps = (state) => ({
  todoText: state.RdcTrackTodoText,
  dbRef: state.RdcManipulateTodos,
});

const mapDispatchToProps = (dispatch) => ({
  onClickAddTodo: (text) => dispatch(addTodo(text)),
  onSetText: (text) => dispatch(setTodoText(text)),
  onInitTextInput: () => dispatch(initTodo()),
});

const CtAddTodo = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CpAddTodo);

export default CtAddTodo;