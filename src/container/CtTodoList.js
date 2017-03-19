import { connect } from 'react-redux'
import CpShowTodoList from '../component/CpShowTodoList'
import { deleteTodo, toggleTodo, modifyTodoText } from '../action'

const mapStateToProps = (state) => ({
  todos: state.RdcManipulateTodos
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  onModifyTodoText: (id, text) => dispatch(modifyTodoText(id, text))
})

const CtTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CpShowTodoList);

export default CtTodoList;