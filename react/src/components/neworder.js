import React, { Component } from 'react';
import '../css/neworder.css';
import $ from 'jquery';
import pic1 from '../img/oYYBAFsXf4qAf-80AABiwYG_KCQ199.jpg';
import pic2 from '../img/ooYBAFszTICAHe9ZAAH5R-UfBKE351.jpg';
import Mock from 'mockjs';

Mock.mock('http://www.baidu.com/api', {
		"user|13":[
			{
				"ids|+1":0,
				"name":"@province()",
				"detail|1-8": [{ "imgname": "@dataImage('290x163')", "text": "@cparagraph(20,50)", "address": "@city()", "people": "@integer(1,100)", "price": "@integer(120,980)", "priceold|0-1": "@integer(130,1000)", "zhekou": "@integer(1,10)", "dianping": "@integer(0,100)"}] ,
			}
		]
	})

class Neworder extends Component{
	constructor(props){
		super(props)
		this.state={
			arr:[],
			arr1:[],
			num:0
		}
		
	}
	tap(i){
		// console.log(i)
		var str = this.state.arr[i].detail
		// console.log(this.state.arr[i].detail)
		// console.log(str)
		this.setState({
			arr1:str
		})
		// console.log(this.state.arr1)
	}
	all(){
		var newarr=[]
		this.state.arr.map(function(item){
			//console.log(item.detail)
			item.detail.map(function(attr){
				//console.log(attr)
				newarr.push(attr)
			})
		})
		this.setState({
			arr1: newarr
		})
	//console.log(newarr)
	}
	render(){
		return(
			<div>
				<div className="z_neworder_head">
					<div className="z_neworder_headtit">
						<span></span>
						<h6>本周新品<mark>{this.state.num}</mark>份</h6>
					</div>
					<div className="z_neworder_headsaixuan">
						<i>筛选:</i>
						<ul className="saixuan_list">
							<li >
								<span onClick={this.all.bind(this)}>全部<mark>({this.state.num})</mark></span>
							</li>
							{
								this.state.arr.map(function(item,i){
									return(
										<li key={i} onClick={this.tap.bind(this,i)}>
											<span>{item.name.slice(0,2)}<mark>({item.detail.length})</mark></span>
										</li>
									)
								}.bind(this))
							}
						</ul>
					</div>
				</div>
				<div className="z_neworder_maincon">
					<div className="z_neworder_maincon_left">
						<div className="z_mainconleft_list">
							{

								this.state.arr1.map(function (item,i) {
										return (
											<a href="" key={i}>
												<img src={item.imgname} />
												<strong className="z_mainconleft_list_tit">{item.address.slice(0, item.address.length - 1)} | {item.address.slice(0, item.address.length - 1)}奇境乐园</strong>
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
			</div>
		)
	}
	componentWillMount(){
		var _this=this;
		var oldarr=[];
		$.ajax({
			type: 'post',
			url: 'http://www.baidu.com/api',
			dataType: 'json',
			success: function (data) {
				console.log(data.user)
				_this.setState({arr:data.user})
				data.user.map(function(item,i){
					item.detail.map(function(attr){
						oldarr.push(attr)
					})
					//console.log(item.detail.length)
				})
				_this.setState({
					arr1: oldarr,
					num:oldarr.length
				})
			}
		})
	}
}
$(function () {
	$(".saixuan_list").find("li").click(function () {
		$(this).css({ color:"#fff", background: "#ff7800" }).find("mark").css("color","#fff").end().siblings().css({color:"#ff7800",background:"0"}).find("mark").css("color","#666")
	})
	
	
})
export default Neworder;