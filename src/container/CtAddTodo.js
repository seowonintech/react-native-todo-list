import { connect } from 'react-redux'
import CpAddTodo from '../component/CpAddTodo'
import { addTodo, setTodoText, initTodo } from '../action'

const mapStateToProps = (state) => ({
  todoText: state.RdcTrackTodoText
});

const mapDispatchToProps = (dispatch) => ({
  onSetText: (text) => dispatch(setTodoText(text)),
  onClickAddTodo: (text) => dispatch(addTodo(text)),
  onInitTextInput: () => dispatch(initTodo())
})

const CtAddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(CpAddTodo);

export default CtAddTodo;