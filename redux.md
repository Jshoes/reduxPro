title: Redux
author:
  name: shoes
output: Redux.html
controls: true

--

# Redux

## 介绍

### 核心
  严格的单向数据流

### 三大原则
  * 单一数据源
  * state为只读
  * 纯函数修改

--

## 基础

### Action

```javascript

  {
    type:'ADD_TODO',
    infomation:'lets do something'
  }

```

>Action 是把数据从应用（译者注：这里之所以不叫 view 是因为这些数据有可能是服务器响应，用户输入或其它非 view 的数据 ）传到 store 的有效载荷。它是 store 数据的唯一来源。一般来说你会通过 store.dispatch() 将 action 传到 store。

> actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。

### Reducer

#### 设计state结构

#### Action的处理

```javascript

function todoApp(state = previousState, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todosth: action.something
      })
    default:
      return state
  }
}

```

>Reducer通过匹配Action type 完成对state的更新 并返回新的state

>Reducer接收旧的state和Action并返回新的state 遇到未知的Action 默认应返回旧的state


复杂的reducer组合

```javascript

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}

```

>注意每个 reducer 只负责管理全局 state 中它负责的一部分。每个 reducer 的 state 参数都不同，分别对应它管理的那部分 state 数据
Redux 提供了 combineReducers() 工具类来做上面 todoApp 做的事情

```javascript

import { combineReducers } from 'redux'

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp

```



### store
  * action用来描述发生了什么
  * reducer根据action来更新state

store就是把它们连接起来的对象

```javascript

import { createStore } from 'redux'
import todoApp from './reducers'
let store = createStore(todoApp)

```


--

# react-Redux

* Provider
* connect

>connect mapStateToProps,mapDispatchToProps,mergeProps,options[pure,areStateEqual,areOwnPropsEqual,areStatePropsEqual,areMergedPropsEqual,storeKey]

>容器组件和UI组件   UI组件  只负责UI的呈现 不带有任何的业务逻辑  没有状态   容器组件  负责管理数据和业务逻辑 不负责UI的呈现

--

app.js
```javascript
import {Provider} from 'react-redux'
<Provider store={store}>
```

--

container.js
```javascript
import {connect} from 'react-redux'
import {actions} from '../actions/actions'
export connect(mapStateToProps,mapDispatchToProps,mergeProps,options)(viewComponent)

function mapStateToProps(state){
  return{
    state:state
  }
}
function mapDispatchToProps(dispatch){
  return{
    actions:actions
  }
}
```
--

#参考资料
* [Redux](http://www.redux.org.cn/)
* [react-redux](https://redux.js.org/)
* [demo](https://github.com/Jshoes/reduxPro.git)
