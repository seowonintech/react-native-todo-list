import { connect } from 'react-redux'
import AddTodo from '../component/AddTodo'
import {addTodo, setTodoText} from '../action'

const mapStateToProps = (state) => ({
  todoText: state.trackTodoText
});

const mapDispatchToProps = (dispatch) => ({
  onSetText: (text) => dispatch(setTodoText(text)),
  onClickAddTodo: (text) => dispatch(addTodo(text))
})

const TrackTodoText = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);

export default TrackTodoText;