import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import ToDoApp from '../component/todoApp'
import {addNumber} from '../actions/actions'
import * as actions from '../actions/actions'

function mapStateProps(state){
  return {
    toDoApp:state.toDoApp
  }
}

function mapDispatchToProps(dispatch){
  console.log(actions)
  return {
    actions: bindActionCreators(actions,dispatch),
    dispatch
  };
}

const ToDoAppContainer = connect(mapStateProps,mapDispatchToProps)(ToDoApp);


export default ToDoAppContainer
