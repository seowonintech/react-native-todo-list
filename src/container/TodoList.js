import { connect } from 'react-redux'
import ShowTodoList from '../component/ShowTodoList'

const mapStateToProps = (state) => ({
  todos: state.manipulateTodos
});

const TodoList = connect(
  mapStateToProps
)(ShowTodoList);

export default TodoList;