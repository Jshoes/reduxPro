import React , {Component} from 'react'

export default class TodoApp extends Component{

  handleClick(){
    let { toDoApp:{number} ,actions:{addNumber} } = this.props
    console.log(this.props)
    addNumber(number)
  }
  handleClickSub(){
    let { toDoApp:{number} ,actions:{subNumber} } = this.props
    subNumber(number)
  }
  render(){
    let { toDoApp:{number} } = this.props
    //console.log(this.props)
    return (
      <div>
        Now Number : {number}
        <button onClick={this.handleClick.bind(this)}>增加</button>
        <button onClick={this.handleClickSub.bind(this)}>减少</button>
      </div>
    )
  }
}
