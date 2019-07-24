
import  React from 'react'
import  ReactDOM from 'react-dom'
import Action from './component/Action'
import Store from './component/Store'
class Demo extends React.Component{
    constructor(props){
        super(props)
        //绑定点击事件
        this.tap = this.tap.bind(this)
        this.onchangeitem=this.onchangeitem.bind(this)
        this.state={
            res:Store.getState()
        }
    }
       // 点击添加输入框里的数据
    tap(){
        // 1.调用仓库固有的方法,这时需要去创建仓库store
       Store.dispatch(Action(this.refs.ipt.value))

        // Store.dispatch({type:'ADD_TODO', text:text})
        // 输入以后把输入框清空
        this.refs.ipt.value=""
    }
    // 设置数据,仓库的固有方法Store.getState()
    onchangeitem(){
        this.setState({res:Store.getState()})
    }
    // 钩子函数,在组件已经完全挂载到网页上才会调用被执行，所以可以保证数据的加载
    componentDidMount() {
        //subscribe是监听,上面设置的函数运行,就会有变化
        Store.subscribe(this.onchangeitem)
    }

    render() {
        var jsx=[];
        for (var i=0;i<this.state.res.length;i++){
            jsx.push(<div key={i}> {this.state.res[i]} </div>)
        }
        return(
            <div>
                <h3>redux数据流管理框架</h3>
                <input type="text" ref="ipt" />
                <button onClick={this.tap}> 添加</button>
                <hr/>
                {jsx}
            </div>
        )
    }
}
ReactDOM.render(<Demo/>,document.getElementById("box"))