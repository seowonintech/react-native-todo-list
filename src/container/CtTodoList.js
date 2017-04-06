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
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  toggleTodo: (todo) => dispatch(toggleTodo(todo)),
  onModifyTodoText: (key, text) => dispatch(modifyTodoText(key, text)),
})

const CtTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CpShowTodoList);

export default CtTodoList;