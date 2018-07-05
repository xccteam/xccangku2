import React, { Component } from 'react';
import $ from 'jquery';
import '../css/phone.css';
import logo from '../img/nl_img/logo.png';
import top_bg from '../img/top_bg.jpg';
import  icon_b_1 from '../img/icon_b_1.png';
import icon_b_2 from '../img/icon_b_2.png';
import icon_b_3 from '../img/icon_b_3.png';
import ghs from '../img/ghs.png';


class Phone extends Component{
	
	render(){
		return(
			<div className="z_phone">
				<div className="z_phonehead">
					<a href="/"><img src={logo}/></a>
					<ul>
						<li><a href="">首页</a></li>
						<li><a href="">好去处</a></li>
						<li><a href="">每周新品</a></li>
						<span></span>
					</ul>
				</div>
				<div className="z_phoneimg">
					<img src={top_bg} className="big"/>
					<div className="apple"></div>
					<div className="andrio"></div>
				</div>
				<div className="z_phonecon">
					<div className="z_phonecon_left">
						<img src={icon_b_1} alt=""/>
						<h5>手机独享优惠</h5>
						<p>手机客户端注册享380元大礼包！购买返还积分，优惠券，各类优惠活动不断档。</p>
					</div>
					<div className="z_ponecon_center">
						<img src={icon_b_2} alt="" />
						<h5>游玩立即出发</h5>
						<p>一开始我也是拒绝的，有了要出发，一大波周边景点向我靠近，Duang！不说了，要出门了！</p>
					</div>
					<div className="z_phonecon_right">
						<img src={icon_b_3} alt="" />
						<h5>保姆贴心陪伴</h5>
						<p>客服电话24小时畅通，旅行问题丢给我们吧！我们的口号是：你若安好，便是晴天！</p>
					</div>
				</div>
				<div className="z_phonefooter">
					<div className="z_phonefooter_links">
						<a href="">关于我们</a>
						<a href="">品质承诺</a>
						<a href="">招聘信息</a>
						<a href="">联系我们</a>
						<a href="">新闻动态</a>
						<a href="">帮助中心</a>
					</div>
					<p>中华人民共和国增值电信业务经营许可证  经营许可证编号：粤B2-20130613</p>
					<p>版权所有  ©  广州酷旅旅行社有限公司  2009-2015  粤ICP备11008339号</p>
					<div className="z_phonefooter_last">
						<img src={ghs} />
						<span>粤公网安备  44010602004448号</span>
					</div>
					
				</div>
				<Carousel autoplay>
					<div><h3>1</h3></div>
					<div><h3>2</h3></div>
					<div><h3>3</h3></div>
					<div><h3>4</h3></div>
				</Carousel>
			</div>
		)
	}
}
$(function () {
	console.log($("li"))
	$("li").mouseenter(function(){
		var juli = $(this).index()*$(this).width()
		$(this).parent().find("span").animate({
			left:juli
		},500)
	})
	
})
export default Phone;