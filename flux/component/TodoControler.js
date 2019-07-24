
import  React from  'react';
import Demo from "./Demo";
import Action from "./Action";
import Store from './Store';
export  default class TodoControler extends  React.Component{

    constructor(props){
        super(props)
        this.tap=this.tap.bind(this);
        this.onchangeItem=this.onchangeItem.bind(this)
        this.state={
            //获取拷贝的所有
            res:Store.getAll()
        }
    }

    tap(text){
        Action.addItem(text)
    }
    //事件更改的函数,对应监听事件的回调
    onchangeItem(){
        //获取更新以后所有数据
        var data = Store.getAll();
        //再付给状态值
        this.setState({res:data})
    }

    //组件加载完后的钩子函数
    componentDidMount() {
        //调用监听事件,监听最新数据的改变
        Store.changeListener(this.onchangeItem)
    }


    render() {

        return(
            <div>
                <Demo onClick={this.tap} name={this.state.res} />
            </div>
        )
    }

}