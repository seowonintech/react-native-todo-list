import { connect } from 'react-redux'
import CpShowTodoList from '../component/CpShowTodoList'
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
)(CpShowTodoList);

export default CtTodoList;