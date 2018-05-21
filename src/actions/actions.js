import store from '../redux/configureStore'
import { createAction , handleActions , combineActions,createActions } from 'redux-actions'

//const addAction = createAction('ADD_NUMBER')
//const subAction = createAction('SUB_NUMBER')



 const {addNumber,subNumber} = createActions({
  ADD_NUMBER:(number)=>({newNumber:number+1}),
  SUB_NUMBER:(number)=>({newNumber:number-1}),
})

export {addNumber,subNumber}
// export function addNumber(number){
//   //console.log(addAction({newNumber:number}),addAction)
//   number++
//
//   return function(dispatch){
//     //console.log("dispatch",dispatch)
//     dispatch(addAction({newNumber:number}))
//     //dispatch({type:'ADD_NUMBER',payload:{newNumber:number}})
//   }
//   //store.dispatch(addAction({newNumber:number}))
// }
//
// export function subNumber(number){
//   number--
//   return (dispatch)=>{
//     dispatch(subAction({newNumber:number}))
//   }
// }



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
