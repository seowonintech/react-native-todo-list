import { connect } from 'react-redux'
import CpShowTodoList from '../component/CpShowTodoList'
import { deleteTodo, toggleTodo, modifyTodoText } from '../action'

// todoElements include database object and keys.
// todoElements will be needed when delete, toggle or complete todo.
// todoList include text and complete flag retrevied from firebase
const mapStateToProps = (state) => ({
  showTodoList: state.RdcFirebaseController,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (key) => dispatch(deleteTodo(key)),
  toggleTodo: (key) => dispatch(toggleTodo(key)),
  onModifyTodoText: (key, text) => dispatch(modifyTodoText(key, text)),
})

const CtTodoList = connect(
  mapStateToProps,
)(CpShowTodoList);

export default CtTodoList;