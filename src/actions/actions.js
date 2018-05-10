import store from '../redux/configureStore'
import { createAction , handleActions , combineActions } from 'redux-actions'

const addAction = createAction('ADD_NUMBER')

export function addNumber(number){
  //console.log(addAction({newNumber:number}),addAction)
  return function(dispatch){
    //console.log("dispatch",dispatch)
    dispatch(addAction({newNumber:number}))
    //dispatch({type:'ADD_NUMBER',payload:{newNumber:number}})
  }
  //store.dispatch(addAction({newNumber:number}))
}



/*regular
export function addNumber(currentNumber){
    let newNumber = currentNumber + 1
    store.dispatch(addNumberToReducer(newNumber))
}

function addNumberToReducer(newNumber){
  return {
    type:ADD_NUMBER,
    newNumber
  }
}
*/
