
import  React from  'react';


export  default class Demo extends  React.Component{

    constructor(props){
        super(props)
        this.tap=this.tap.bind(this)

    }
    tap(){
        this.props.onClick(this.refs.ipt.value)
        this.refs.ipt.value='';
    }
    render() {
        var jsx=[];
        for (var i=0;i<this.props.name.length;i++){
            jsx.push(<div key={i}> {this.props.name[i]} </div>)
        }
        return(
            <div>
                <h3>flux数据流管理应用框架</h3>
                <input type="text" ref="ipt" />
                <button onClick={this.tap}> 添加</button>

                <hr/>
                {jsx}
            </div>
        )
    }

}