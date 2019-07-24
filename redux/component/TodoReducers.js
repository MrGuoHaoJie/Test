
const ToDoReducer = (state,action)=>{
    // 自己封装方法,传过来(数据类型,值),
    if(typeof state === 'undefined'){
        return[]
    }
    switch (action.type) {
        //可以有不同的数据方法
        case 'ADD_TODO':
            // 返回展开的展开数据(es6语法)
            return[...state,action.text]
            break;
        default:
            return state;
            break;
    }
}
export default ToDoReducer;