import React , {Component} from 'react'

export default class TodoApp extends Component{

  handleClick(){
    let { toDoApp:{number} ,actions:{addNumber} } = this.props
    //console.log(this.props)
    addNumber(number+1)
  }
  render(){
    let { toDoApp:{number} } = this.props
    return (
      <div>
        Now Number : {number}
        <button onClick={this.handleClick.bind(this)}>增加</button>
      </div>
    )
  }
}
