import { connect } from 'react-redux'
import CpAddTodo from '../component/CpAddTodo'
import { addTodo, setTodoText, initTodo } from '../action'

const mapStateToProps = (state) => ({
  todoText: state.RdcManipulateTodos
});

const mapDispatchToProps = (dispatch) => ({  
  onClickAddTodo: (text) => dispatch(addTodo(text)),  
})

const CtAddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(CpAddTodo);

export default CtAddTodo;