//view视图

import React from 'react';
import Action from './Action'
import Store from './Store'

class Demo extends React.Component{
	constructor(props){
		super(props)
		this.state={
			arr:Store.getState()
		}
		this.onchanges=this.onchanges.bind(this)
	}
	tap(){
		Store.dispatch(Action(this.refs.ipt.value))
		this.refs.ipt.value=''
	}
	
	
	onchanges(){
		this.setState({arr:Store.getState()})
	}
	componentDidMount(){
//		监听
		Store.subscribe(this.onchanges)
	}
	
	render(){
		return(
			<div>
				<h1>redux状态管理器</h1>
				
				<input type="text" ref="ipt"/>
				<button onClick={this.tap.bind(this)}>添加</button>
				<hr/>
				
				{
					this.state.arr.map(function(item,i){
						return(
							<div key={i}>{item}</div>
						)
					})
				}
				
			</div>
		)
	}
}

export default Demo;