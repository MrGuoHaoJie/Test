
import Dispatch from './Dispatch'

const  Action={
    addItem(text){
        //当前派发器对象
        Dispatch.dispatch({
            actionType:"ADD_TODO",
            text:text
        })
    },

}




export default Action;