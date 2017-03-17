import { connect } from 'react-redux'
import ShowTodoList from '../component/ShowTodoList'
import { deleteTodo } from '../action'

const mapStateToProps = (state) => ({
  todos: state.manipulateTodos
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id))
})

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowTodoList);

export default TodoList;