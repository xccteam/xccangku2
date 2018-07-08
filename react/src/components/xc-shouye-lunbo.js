//首页轮播组件
import React from 'react';
import '../css/xc-shouye-lunbo.css'
import '../css/xc-shouye-lunbo.scss'
import zhoubianjingqu from '../img/xcimg/xc1.jpg';
import jingxuanzhuti from '../img/xcimg/xc2.jpg';
import shangheyuan from '../img/xcimg/shangheyuan.jpg';
import xcmudidi from '../img/xcimg/xcmudidi.jpg';
import Neworder from './xcneworder';
import $ from 'jquery';

class Xc_shouye_lunbotu extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			
			<div className='xc_shouye_lunbo'>
				<div className='xc_lunbo'>
					<div>
						
					<img src={xcmudidi}/>
						
						
					</div>
					<div>
					

					</div>
					<div className='xc_shangheyuan'><img src={shangheyuan}/></div>
				</div>
				<div className='xc_chengshizhoubiaoyou' >
					<Neworder/>
				</div>
				<div className='xc_zbjq'><img src={zhoubianjingqu}/></div>
				<div className='xc_jingxuanzhuti'><img src={jingxuanzhuti}/></div>
				
			
			</div>
		)
	}
}


export default Xc_shouye_lunbotu;