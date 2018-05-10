import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ToDoAppContainer from './containers/toDoAppContainer'
import store from './redux/configureStore'


class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <ToDoAppContainer />
      </Provider>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("app")
)
