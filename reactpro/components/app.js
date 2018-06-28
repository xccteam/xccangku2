
import React from 'react';

import '../stylesheet/sty.css'
import a from '../img/a.jpg'



class App extends React.Component{
	constructor(props){
		super(props)
	}
	
	tap(){
		console.log('hello world')
	}
	
	render(){
		return(
			<div>
				<h1 className="tit">hello</h1>
				<p>你好 webpack 构建 react</p>
				<button onClick={this.tap}>事件</button>
				<img src={a} />
				
				<div className="img"></div>
				
			</div>
		)
	}
		
	
}

export default App;

