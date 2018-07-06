import React, { Component } from 'react';
import $ from 'jquery';
import '../css/phone.css';
import logo from '../img/nl_img/logo.png';
import top_bg from '../img/top_bg.jpg';
import  icon_b_1 from '../img/icon_b_1.png';
import icon_b_2 from '../img/icon_b_2.png';
import icon_b_3 from '../img/icon_b_3.png';
import ghs from '../img/ghs.png';
import lunbo1 from '../img/230x414_1.jpg';
import lunbo2 from '../img/230x414_2.jpg';
import lunbo3 from '../img/230x414_3.jpg'
import { Link } from 'react-router';

class Phone extends Component{
	
	render(){
		return(
			<div className="z_phone">
				<div className="z_phonehead">
					<a href="/"><img src={logo}/></a>
					<ul>
						<li><a href="">首页</a></li>
						<li>
							<Link to={{ pathname: '/nl_funny' }}>好去处</Link>
						</li>
						<li>
							<Link to={{pathname:'/neworder'}}>每周新品</Link>
						</li>
						<span></span>
					</ul>
				</div>
				<div className="z_wrap">
					<div className="z_phoneimg">
						<img src={top_bg} className="big"/>
						<div className="apple"></div>
						<div className="andrio"></div>
						<div className="z_lunbo">
							<ul className="z_lunboimg">
								<li><a href="#"><img src={lunbo1}/></a></li>
								<li><a href="#"><img src={lunbo2}/></a></li>
								<li><a href="#"><img src={lunbo3}/></a></li>
    						</ul>
							<ul className="z_lunbonum">
								<li className="num"></li>
								<li className="num"></li>
								<li className="num"></li>
							</ul>
						</div>
					</div>
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
				
			</div>
		)
	}
	componentDidMount(){
		$("li").mouseenter(function () {
			var juli = $(this).index() * $(this).width()
			$(this).parent().find("span").animate({
				left: juli
			}, 500)
		})

		$(document).ready(function () {
			var i = 0;
			var clone = $(".z_lunboimg li").first().clone();
			$(".z_lunboimg").append(clone);
			var size = $(".z_lunboimg li").length;

			var timer = setInterval(function () {
				i++;
				move();
			}, 2000);

			$(".z_lunbo").hover(function () {
				clearInterval(timer);
			}, function () {
				timer = setInterval(function () {
					i++;
					move();
				}, 2000);
			})

			$(".z_lunbonum li").hover(function () {

				var index = $(this).index();//获取当前索引值
				i = index;
				$(".z_lunbonum").stop().animate({ left: -index * 230 }, 500);
				$(this).addClass("bg").siblings().removeClass("bg");
			});

			//移动事件
			function move() {

				if (i == size) {
					$(".z_lunboimg").css({ left: 0 });
					i = 1;
				}
				if (i == -1) {
					$(".z_lunboimg").css({ left: -(size - 1) * 230 });
					i = size - 2;
				}
				$(".z_lunboimg").stop().animate({ left: -i * 230 }, 1000);
				if (i == size - 1) {
					$(".num").eq(0).addClass("bg").siblings().removeClass("bg");
				} else {
					$(".num").eq(i).addClass("bg").siblings().removeClass("bg");
				}
			}
		})	
	}
}
$(function () {
	//console.log($("li"))
	

	
})

export default Phone;