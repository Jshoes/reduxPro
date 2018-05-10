
import {handleActions} from 'redux-actions'

const defaultState = {
  list:[
    {
      item:'test',
      done:false,
    }
  ],
  newToDo:'',
  number:1,
}

//regular
const initialState = {
  list:[
    {
      item:'test',
      done:false,
    }
  ],
  newToDo:'',
  number:1,
}

/*export default function reducer(state = initialState , action){
  console.log("reducer",action)
  let {type} = action
  switch(type){
    case 'ADD_NUMBER':
      return Object.assign({},state,{number:action.payload.newNumber})
    default:
      return state;
  }
}*/

const reducer = handleActions(
  {
    'ADD_NUMBER':(state = initialState , action)=>({
      number:action.payload.newNumber
    }),
  },
  {number:1}
)

export default reducer
