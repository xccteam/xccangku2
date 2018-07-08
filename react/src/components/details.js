import React, { Component } from 'react';
import '../css/details.css';
import $ from 'jquery';
import pic from '../img/oYYBAFs7MqWACkv9AALTy-GLhTI844.jpg';
import map from '../img/staticimage.png';
import pic3 from '../img/ooYBAFs7PGSAeIInAAI3TX4FhAo369.jpg';
import pic2 from '../img/ooYBAFszTICAHe9ZAAH5R-UfBKE351.jpg';
import pic1 from '../img/oYYBAFsXf4qAf-80AABiwYG_KCQ199.jpg';

class Details extends Component{
	render(){
		$(function () {
			//console.log($(".z_details_mainleft_nav").offset().top)
			var startpos = $(".z_details_mainleft_nav").offset().top
			var gmxz = $(".z_goumaixuzhi").offset().top
			var jtzn = $(".z_jiaotonghzinan").offset().top
			var xqjs = $(".z_xiangqingjieshao").offset().top
			var yhpj = $(".z_yonghupingjia").offset().top

			$(window).scroll(function () {

				if ($("html").scrollTop() >= startpos) {
					$(".z_details_mainleft_nav").css({ position: "fixed", left: $(".z_details_mainleft_nav").offset().left, top: 0 })
				} else {
					$(".z_details_mainleft_nav").css({ position: "static", left: 0, top: 0 })
				}
				// 购买须知
				if ($("html").scrollTop() >= gmxz && $("html").scrollTop() < jtzn) {
					$(".z_details_mainleft_nav").find("li").eq(0).css({ background: "#ff7800", color: "#fff" })
				} else {
					$(".z_details_mainleft_nav").find("li").eq(0).css({ background: "#fff", color: "#666" })
				}
				$(".z_details_mainleft_nav").find("li").eq(0).click(function () {
					$("html").scrollTop(gmxz)
				})
				// 交通指南
				if ($("html").scrollTop() >= jtzn && $("html").scrollTop() < xqjs) {
					$(".z_details_mainleft_nav").find("li").eq(1).css({ background: "#ff7800", color: "#fff" })
				} else {
					$(".z_details_mainleft_nav").find("li").eq(1).css({ background: "#fff", color: "#666" })
				}
				$(".z_details_mainleft_nav").find("li").eq(1).click(function () {
					$("html").scrollTop(jtzn)
				})
				// 详情介绍
				if ($("html").scrollTop() >= xqjs && $("html").scrollTop() < yhpj) {
					$(".z_details_mainleft_nav").find("li").eq(2).css({ background: "#ff7800", color: "#fff" })
				} else {
					$(".z_details_mainleft_nav").find("li").eq(2).css({ background: "#fff", color: "#666" })
				}
				$(".z_details_mainleft_nav").find("li").eq(2).click(function () {
					$("html").scrollTop(xqjs)
				})
				// 用户评价
				if ($("html").scrollTop() >= yhpj) {
					$(".z_details_mainleft_nav").find("li").eq(3).css({ background: "#ff7800", color: "#fff" })
				} else {
					$(".z_details_mainleft_nav").find("li").eq(3).css({ background: "#fff", color: "#666" })
				}
				$(".z_details_mainleft_nav").find("li").eq(3).click(function () {
					$("html").scrollTop(yhpj)
				})

			})

		})
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
							<span className="app_bottom">距离结束时间:<em className="day">12</em>天<em className="hours">21</em>小时<em className="miu">56</em>分<em className="sec">45</em>秒</span>
						</div>
						<div className="z_details_right_sheshi">
							<h6>配套设施:</h6>
							<span>P</span>
							<i>停车场</i>
						</div>
						<div className="z_details_right_share">
							<span>
								<i></i>
								分享到
							</span>
							<em>|</em>
							<span>
								<i></i>
								收藏
							</span>
						</div>
					</div>
				</div>
				<div className="z_details_secon">
					<div className="z_details_secon_choosetime">
						<div className="z_details_choosetime_tit">
							<i>选择出行日期:</i>
							<div className="rili">
								<span></span>
								<u>未选择</u>
								<em></em>
							</div>
						</div>
						<ul className="z_details_chooselist">
							<li>
								<img src={pic} alt=""/>
								<div className="item_inner">
									<h3>奇境乐园成人票1张</h3>
									<span>不可取消.不可改期</span>
								</div>
								<div className="z_chooselist_price">
									<i>￥</i>
									<h5>120</h5>
									<em>起</em>
								</div>
								<span className="msj">门市价:128元</span>
								<button>立即购买</button>
								<span className="tishi">需在提前一天的23:59购买</span>
							</li>
							<li>
								<img src={pic} alt="" />
								<div className="item_inner">
									<h3>奇境乐园成人票1张</h3>
									<span>不可取消.不可改期</span>
								</div>
								<div className="z_chooselist_price">
									<i>￥</i>
									<h5>120</h5>
									<em>起</em>
								</div>
								<span className="msj">门市价:128元</span>
								<button>立即购买</button>
								<span className="tishi">需在提前一天的23:59购买</span>
							</li>
						</ul>
					</div>
					<div className="z_details_secon_map">
						<img src={map} alt=""/>
						<div className="z_details_maptit">
							<h6>奇境乐园</h6>
							<i>交通指南</i>
						</div>
						<div className="z_details_maoaddress">
							地址：天使大道10号浅草园商业区，HelloKitty斜对面
						</div>
					</div>
				</div>
				<div className="z_details_mainbox">
					<div className="z_details_mainleft">
						<ul className="z_details_mainleft_nav">
							<li>购买须知</li>
							<li>交通指南</li>
							<li>详情介绍</li>
							<li>用户评价</li>
						</ul>
						<div className="z_goumaixuzhi">
							<h1><span></span>购买须知</h1>
							<div className="z_goumaixuzhicon">
								<h6>【使用方式】</h6>
								<ul>
									<li>入园方式：至景区扫码入园。</li>
								</ul>
							</div>
							<div className="z_goumaixuzhicon">
								<h6>【使用时间】</h6>
								<ul>
									<li>开放时间：10:00-21:00。</li>
								</ul>
							</div>
							<div className="z_goumaixuzhicon">
								<h6>【加购套餐项目】</h6>
								<ul>
									<li>门票政策：儿童1.0m（不含）以下免费，1.0m以上按全价购买。</li>
								</ul>
							</div>
							<div className="z_goumaixuzhicon">
								<h6>【额外服务提示】</h6>
								<ul>
									<li>景区提供收费停车，收费标准以景区公布为准。</li>
								</ul>
							</div>
						</div>
						<div className="z_jiaotonghzinan">
							<h1><span></span>交通指南</h1>
							<h3>主要路线</h3>
							<ul>
								<li>从杭州出发：</li>
								<li>杭州市区→环城北路→莫干山路→余杭塘路→花蒋路→留祥路→杭州绕城高速公路→紫金港枢纽→杭长高速公路→安吉互通→安吉大道→绕城东线→奇境乐园</li>
								<li>从上海出发：</li>
								<li>上海市区→人民大道→黄陂北路→延安中路→延安高架路→沪渝高速公路→泗安枢纽→杭长高速公路→安吉互通→安吉大道→绕城东线→奇境乐园</li>
							</ul>
						</div>
						<div className="z_xiangqingjieshao">
							<h1><span></span>详情介绍</h1>
							<ul>
								<li className="biaoti">
									<div className="z_biaoti_center">
										<i></i>
										<h6>走进光与影的奇幻王国</h6>
										<i></i>
									</div>
								</li>
								<li>大型原创光影互动艺术展——奇境乐园，坐落于HelloKitty乐园斜对面。这是一座现实与魔法交替的奇幻王国，将孩子们心中的瑰丽想象变成真实可触的游乐空间，将大人们的多彩梦境演化成一场别开生面的游乐体验。</li>
								<li>
									<img src={pic3} alt=""/>
								</li>
							</ul>
						</div>
						<div className="z_yonghupingjia">
							<h1><span></span>用户评价</h1>
							
						</div>
					</div>
					<div className="z_details_mainright">
						<div className="z_neworder_maincon_right">
							<div className="z_maincon_remaixinpin">
								<h6>热卖新品</h6>
								<ul>
									<li>
										<a href="">
											<div className="z_remaixinpin_img">
												<img src={pic1} alt="" />
												<u>三道堰水乐园</u>
											</div>
											<p>
												<strong>￥28</strong>
												<span>门市价:￥45</span>
												<em>立即购买</em>
											</p>
										</a>
									</li>
									<li>
										<a href="">
											<div className="z_remaixinpin_img">
												<img src={pic2} alt="" />
												<u>肇庆宋隆小镇熹云文化别苑</u>
											</div>
											<p>
												<strong>￥1380</strong>
												<span>门市价:￥2000</span>
												<em>立即购买</em>
											</p>
										</a>
									</li>
									<li>
										<a href="">
											<div className="z_remaixinpin_img">
												<img src={pic1} alt="" />
												<u>上水.城市水公园</u>
											</div>
											<p>
												<strong>￥56</strong>
												<span>门市价:￥58</span>
												<em>立即购买</em>
											</p>
										</a>
									</li>
									<li>
										<a href="">
											<div className="z_remaixinpin_img">
												<img src={pic2} alt="" />
												<u>炭河千古情</u>
											</div>
											<p>
												<strong>￥160</strong>
												<u>门市价:￥200</u>
												<em>立即购买</em>
											</p>
										</a>
									</li>
									<li>
										<a href="">
											<div className="z_remaixinpin_img">
												<img src={pic1} alt="" />
												<u>会稽山峡洞漂流</u>
											</div>
											<p>
												<strong>￥55</strong>
												<span>门市价:￥60</span>
												<em>立即购买</em>
											</p>
										</a>
									</li>

								</ul>
							</div>
							<div className="z_maincon_lvyougonglue">
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
				</div>
			</div>
		)
	}
	
}



export default Details;