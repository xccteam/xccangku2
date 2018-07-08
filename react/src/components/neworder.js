import React, { Component } from 'react';
import '../css/neworder.css';
import $ from 'jquery';

class Neworder extends Component{
	render(){
		return(
			<div>
				<div className="z_neworder_head">
					<div className="z_neworder_headtit">
						<span></span>
						<h6>本周新品<mark>50</mark>份</h6>
					</div>
					<div className="z_neworder_headsaixuan">
						<i>筛选:</i>
						<ul>
							<li>
								<span>全部<mark>(50)</mark></span>
							</li>
							<li>
								<span>浙江<mark>(3)</mark></span>
							</li>
							<li>
								<span>广东<mark>(21)</mark></span>
							</li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>
				</div>
<<<<<<< HEAD
				<div className="z_neworder_maincon">
					<div className="z_neworder_maincon_left">
						<div className="z_mainconleft_list">
							{

								this.state.arr1.map(function (item,i) {
										return (
											<a href="" key={i}>
												<img src={item.imgname} />
												<strong className="z_mainconleft_list_tit">{item.address.slice(0, item.address.length-1)} | 奇境乐园</strong>
												<div className="z_mainconleft_list_recomm">
													<span>
														<em>{item.people}</em>
														人购买
									</span>
													<span>
														<em>100%</em>
														好评
									</span>
												</div>
												<div className="z_mainconleft_list_dis">
													<p>{item.text}</p>
													<span className="z_mainconleft_list_price">
														<i>￥</i>
														{item.price}
										<em>起/份</em>
														<u>门市价:{item.oldprice}</u>
														<span className="z_sale_tips">
															<i></i>
															{item.zhekou}折
										</span>
													</span>
												</div>
											</a>
									)
								})
							}
							
							
						</div>
					</div>
					<div className="z_neworder_maincon_right">
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
						<div className="z_maincon_remaixinpin">
							<h6>热卖新品</h6>
							<ul>
								<li>
									<a href="">
										<div className="z_remaixinpin_img">
											<img src={pic1} alt=""/>
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
											<img src={pic2} alt=""/>
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
					</div>
				</div>
=======
>>>>>>> 94ee5afd9d1b667c5c60d5dbbfb55fc9eb95e8a0
			</div>
		)
	}
}

export default Neworder;