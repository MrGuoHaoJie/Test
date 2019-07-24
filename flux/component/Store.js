
//Store中change事件的触发通过this.emit  监听改变通过  this.on() 使用的是events模块中EventEmitter对象
import  {EventEmitter} from  'events';
//拷贝属性方法使用 object-assign 原生js依赖中的 assign对象
import assign from 'object-assign';
//拷贝所有原形方法
const Store = assign({},EventEmitter.prototype, {
    Todos: [],
    //数据添加
    addTodoItem(text) {
        this.Todos.push(text)
    },
    //数据更新完以后发出改变函数
    changeEmiter(){
        this.emit("change")
    },
    //监听事件
    changeListener(callback){
        this.on('change',callback)
    },
    //返回所有
    getAll(){
        return this.Todos;
    },


})

export default Store