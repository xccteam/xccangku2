
import React from 'react';
import '../css/xc-shouye-lunbo.css'
import '../css/xc-shouye-lunbo.scss'
import shangheyuan from '../img/oYYBAFqo6AaAH6aeAACZ7cEC9lE770.jpg';
import kuya from '../img/oYYBAFs5kiOAXBWtAAD0DSMTdaw200.png';
import lunbo1  from '../img/xcimg/lunbo1.jpg';
import lunbo2 from '../img/xcimg/lunbo2.png';
import lunbo3 from '../img/xcimg/lunbo3.png';
import Neworder from './xcneworder';
import $ from 'jquery';
import{ Link } from 'react-router';
import ylw from '../img/562490b61d742.jpg';
import sy from '../img/569c95043ab69.jpg';
import gz from '../img/55f7c46de6342.jpg';
import right from '../img/未标题-2.png';

class Xc_shouye_lunbotu extends React.Component{
	constructor(props){
		super(props)
	}


	componentDidMount(){
		$(function(){
			clearInterval(t);
			var t =0;
			var n=0;
			var  count=0;
			$(document).ready(function() {
				count = $("#banner_list a").length;
				$("#banner_list a:not(:first-child)").hide();
				$("#banner_info").html($("#banner_list a:first-child").find("img").attr('alt'));
				$("#banner_info").click(function() {
					window.open($("#banner_list a:first-child").attr('href'), "_blank")
				});
				$("#banner li").click(function() {
					var i = $(this).text() - 1; //获取Li元素内的值，即1，2，3，4
					n = i;
					if (i >= count) return;
					$("#banner_info").html($("#banner_list a").eq(i).find("img").attr('alt'));
					$("#banner_info").unbind().click(function() {
						window.open($("#banner_list a").eq(i).attr('href'), "_blank")
					}) ;
					$("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
					document.getElementById("banner").style.background = "";
					$(this).toggleClass("on");
					$(this).siblings().removeAttr("class");
				});
				clearInterval(t);
				t = setInterval(function(){showAuto()},3000);
				$("#banner").mouseenter(function() {
					clearInterval(t);
				});
				$("#banner").mouseleave(function() {
					clearInterval(t);
					setInterval(function(){showAuto()},3000);
				})
			})
		  
			function showAuto() {
				n = n >= (count - 1) ? 0 : ++n;
				$("#banner li").eq(n).trigger('click');
			}
			$(".xc_shangheyuan").find("img").mouseenter(function(){
				$(this).css("marginLeft","-6px")
			})
			$(".xc_shangheyuan").find("img").mouseleave(function () {
				$(this).css("marginLeft", "0")
			})
		})
		
	   
		}
	render(){
		return(

			
			
			<div className='xc_shouye_lunbo'>
				<div className='xc_lunbo'>
					<div>
						<div className="xc_lunbo_menu">
							<span><i></i></span>
							<a href="">目的地:河南</a>
							<ul>
								<li><a href="">郑州</a></li>
								<li><a href="">开封</a></li>
								<li><a href="">洛阳</a></li>
								<li><a href="">平顶山</a></li>
								<li><a href="">焦作</a></li>
								<li><a href="">信阳</a></li>
							</ul>
						</div>
						<div className="xc_lunbo_menu">
							<span><i></i></span>
							<a href="">热门景区</a>
							<ul>
								<li><a href="">凤翔温泉</a></li>
								<li><a href="">清明上河园</a></li>
								<li><a href="">大宋·东京梦华</a></li>
							</ul>
						</div>
						<div className="xc_lunbo_menu">
							<span><i></i></span>
							<a href="">主题推荐</a>
							<ul>
								<li><a href="">清明上河园</a></li>
								<li><a href="">焦作奇秀山水</a></li>
							</ul>
						</div>
						<div className="xc_lunbo_menu">
							<span><i></i></span>
							  <Link to={{pathname:'/phone'}}>手机客户端下载</Link>
						</div>
					</div>
					<div>
						{/* 轮播结构 */}
					<div id="banner">  
								
							
								<div id="banner_info"> 
								</div>
							
								<ul>   
								<li className="on">
										1
									</li>
									<li>
										2
									</li>
									<li>
										3
									</li>
									<li>
										4
									</li>
								</ul>
								<div id="banner_list">
									<a href="#" target="_blank">
									<img src={lunbo3} />
									</a> 
									<a href="#" target="_blank">
									<img src={lunbo2} />
									</a>
									 <a href="#" target="_blank">
									 <img src={lunbo3} / ></a>
									  <a href="#" target="_blank">
									  <img src={lunbo1} />
									  </a>
								</div>
							</div>
							{/* 轮播结构结束 */}
					

					</div>
					<div className='xc_shangheyuan'>
						<img src={shangheyuan}/>
						<img src={kuya} alt=""/>
					</div>
				</div>
				<div className='xc_chengshizhoubiaoyou' >
					<Neworder/>
				</div>
				<h1 className="xc_z_tit"><mark>周边景区</mark>/享受不一样的风景</h1>
				<div className='xc_zbjq'>
					
					<div className="xc_zbjq_left">
						<div>
							<p>
								<strong>洛阳市 凤翔温泉</strong>
								<i>河南省洛阳市龙门石窟世界文化遗产园区管委会张沟村</i>
							</p>
						</div>
						<ul>
							<li>
								<i>开封市 清明上河园</i>
							</li>
							<li>
								<i>开封市 大宋·东京梦华</i>
							</li>
							<li>
								<i>郑州市 嵩山少林寺</i>
							</li>
							<li>
								<i>郑州市 禅宗音乐大典</i>
							</li>
						</ul>
					</div>
					<div className="xc_zbjq_right">
						<div className="z_maincon_lvyougonglue xc_z">
							<h6>旅游攻略</h6>
							<ul>
								<li>
									<a href="">
										<i>深圳</i>
										<span>东部华侨城超全攻略，去之前必看</span>
									</a>
								</li>
								<li>
									<a href="">
										<i>广州</i>
										<span>超全长隆水上乐园攻略</span>
									</a>
								</li>
								<li>
									<a href="">
										<i>深圳</i>
										<span>东部华侨城超全攻略，去之前必看</span>
									</a>
								</li>
								<li>
									<a href="">
										<i>广州</i>
										<span>超全长隆水上乐园攻略</span>
									</a>
								</li>
								<li>
									<a href="">
										<i>深圳</i>
										<span>东部华侨城超全攻略，去之前必看</span>
									</a>
								</li>
								<li>
									<a href="">
										<i>广州</i>
										<span>超全长隆水上乐园攻略</span>
									</a>
								</li>
								<li>
									<a href="">
										<i>深圳</i>
										<span>东部华侨城超全攻略，去之前必看</span>
									</a>
								</li>
								<li>
									<a href="">
										<i>广州</i>
										<span>超全长隆水上乐园攻略</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<h1 className="xc_z_tit"><mark>精选主题</mark>/玩转当季热门</h1>
				<div className='xc_jingxuanzhuti'>
					<div className="xc_jxzt_left">
						<ul>
							<li>
								<img src={ylw} alt=""/>
								<i>天下第一亚龙湾</i>
							</li>
							<li>
								<img src={sy} alt=""/>
								<i>三亚黄金度假带</i>
							</li>
							<li>
								<img src={gz} alt=""/>
								<i>江南七大古镇</i>
							</li>
						</ul>
					</div>
					<div className="xc_jxzt_right">
						<img src={right} alt=""/>
					</div>
				</div>
				
			
			</div>
		)
	}
}
// 轮播js代码



export default Xc_shouye_lunbotu;