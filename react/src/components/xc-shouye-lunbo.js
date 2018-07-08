
import React from 'react';
import '../css/xc-shouye-lunbo.css'
import '../css/xc-shouye-lunbo.scss'
import zhoubianjingqu from '../img/xcimg/xc1.jpg';
import jingxuanzhuti from '../img/xcimg/xc2.jpg';
import shangheyuan from '../img/xcimg/shangheyuan.jpg';
import xcmudidi from '../img/xcimg/xcmudidi.jpg';
import lunbo1  from '../img/xcimg/lunbo1.jpg';
import lunbo2 from '../img/xcimg/lunbo2.png';
import lunbo3 from '../img/xcimg/lunbo3.png';
import Neworder from './xcneworder';
import $ from 'jquery';

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
		})
		
	   
		}
	render(){
		return(

			
			
			<div className='xc_shouye_lunbo'>
				<div className='xc_lunbo'>
					<div>
						
					<img src={xcmudidi}/>
						
						
					</div>
					<div>
						{/* 轮播结构 */}
					<div id="banner">  
								
							
								<div id="banner_info"> 
								</div>
							
								<ul>   
									<li class="on">
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
// 轮播js代码



export default Xc_shouye_lunbotu;