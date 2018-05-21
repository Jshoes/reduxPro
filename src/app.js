import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/configureStore'
import {ProRouter} from './route'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import ToDoAppContainer from './containers/toDoAppContainer'


class AppMenu extends React.Component{
  render(){
    console.log("啊啊啊啊啊啊",ProRouter)
    return (
      <Provider store={store}>
        <Router>
            <div>
              <div>
                <Link to="/">首页</Link>
                <Link to="/about">about</Link>
              </div>
              {this.props.children}
            </div>
        </Router>
      </Provider>
    )
  }
}

class App extends React.Component{
  render(){
    return(
      <AppMenu>
        <ProRouter />
      </AppMenu>
    )
  }
}




ReactDOM.render(
  <App />,
  document.getElementById("app")
)
