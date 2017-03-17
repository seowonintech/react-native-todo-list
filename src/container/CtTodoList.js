import { connect } from 'react-redux'
import ShowTodoList from '../component/ShowTodoList'
import { deleteTodo } from '../action'

const mapStateToProps = (state) => ({
  todos: state.RdcManipulateTodos
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id))
})

const CtTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowTodoList);

export default CtTodoList;