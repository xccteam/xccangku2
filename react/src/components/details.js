import React, { Component } from 'react';
import '../css/details.css';
import $ from 'jquery';
import '../css/swiper-3.3.1.min.css';
// import Swiper from 'swiper';



class Details extends Component{
	// componentWillMount(){
	// 	new Swiper('.swiper-container', {
	// 		direction: 'horizontal',
	// 		loop: true,
	// 		speed: 300,
	// 		autoplay: 1000

	// 	})
	// }
	render(){
		return(
			<div>
				<h6 className="z_details_path">首页&gt;湖州&gt;<mark>奇景乐园</mark></h6>
				<div className="z_details_mse">
					<div className="z_details_mseleft">
						<div className="z_mseleft_bigimg">
							
						</div>
						<div className="z_mseleft_smallimg">
							
						</div>
					</div>
					<div className="z_details_mseright">
						<h1>  浙江 | 湖州 奇境乐园，光与影的奇幻王国</h1>
						<p>位于HelloKitty乐园斜对面，运用光与影的艺术，将瑰丽的想象变成触手可及的乐园。项目包含许愿灯、魔幻滑梯、彩绘宇宙、魔法屋、魔音管弦乐、声波大战、时空漫画、影子与魔法球等等。</p>
						<div className="z_details_right_price">
							<p className="p1">
								<i>￥</i>
								<mark>120</mark>
								<em>起</em>
								<u>门市价:128元</u>
								<strong>节省8元</strong>
							</p>
							<p className="p2">
								<span>
									好评率:<mark>100%</mark>
								</span>
								<i>|</i>
								<span>
										已售:<mark>3</mark>
								</span>
								<i>|</i>
								<span>
									点评:<mark>0</mark>
								</span>
							</p>
						</div>
						<div className="z_details_right_app">
							<span className="app_top">APP新注册用户享380元大礼包<mark>（特殊产品除外）</mark></span>
							<span className="app_bottom">距离结束时间:</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Details;