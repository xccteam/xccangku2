//首页轮播组件
import React from 'react';
import '../css/xc-shouye-lunbo.css'
class Xc_shouye_lunbotu extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			
			<div className='xc_shouye_lunbo'>
				<div className='xc_lunbo'>
					<div>left</div>
					<div>right</div>
					<div>right</div>
				</div>
				<div className='xc_chengshizhoubiaoyou' >1</div>
				<div className='xc_zbjq'>222</div>
				<div className='xc_jingxuanzhuti'>1</div>
				
			
			</div>
		)
	}
}
export default Xc_shouye_lunbotu;