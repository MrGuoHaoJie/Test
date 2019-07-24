
import  {Dispatcher} from  'flux';

import  Store from './Store'
//创建派发器对象
const  Dispatch = new Dispatcher();
//注册回调,接受数据
Dispatch.register((action)=>{
    switch (action.actionType) {
        case "ADD_TODO":

            //调用store
           Store.addTodoItem(action.text);
            Store.changeEmiter();
            break;

    }
    
})





//暴露出去
export default Dispatch;