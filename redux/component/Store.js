
import {createStore} from 'redux'
//3.引入仓库内部部小格子
import ToDoReducers from './TodoReducers'

// 2.创建仓库createStore ,使用自定义仓库类型ToDoReducers,在跳到todoReducers页面
const Store =createStore(ToDoReducers)

export  default Store;