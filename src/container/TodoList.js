import { connect } from 'react-redux'
import ShowTodoList from '../component/ShowTodoList'

const mapStateToProps = (state) => ({
  todos: state.todos
});

const TodoList = connect(
  mapStateToProps
)(ShowTodoList);

export default TodoList;