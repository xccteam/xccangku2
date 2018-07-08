import React, { Component } from 'react';
import '../css/register.css';
import $ from 'jquery';
import Actions from './redux/Actions'
import Store from './redux/Store'

class Register extends Component {
	constructor(props){
		super(props)
		this.state={
			arr:Store.getState()
		}
		this.onchanges=this.onchanges.bind(this)
		}
		// tap(){
			
		// }
		onchanges(){
				this.setState({arr:Store.getState()})
			}
		componentDidMount(){
		//		监听
			Store.subscribe(this.onchanges)
		}
	 foo() {
			var a = Math.floor(Math.random() * 10);
			var b = Math.floor(Math.random() * 10);
			var c = Math.floor(Math.random() * 10);
			var arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "g", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
			var code = a + arr[a] + arr[b] + arr[c]
			$(".yzm").find("b").html(code)
		}
	change(){
		this.foo()
	}
	tap(){
		
		if($("#tel").val()==""){
			$("#tel").css({background:"#ffe9dc",border:"1px solid red",color:"black"})
		} else if ($("#tel").val().length!=11){
			$("#tel").css({ background: "#ffe9dc", border: "1px solid red", color: "black" })
			$("#tel").val("手机号有误,请重新输入")

		}else{
			if($("#name").val()==""){
				$("#name").css({background:"#ffe9dc",border:"1px solid red",color:"black"})
				} else if ($("#name").val().length!=3){
				$("#name").css({ background: "#ffe9dc", border: "1px solid red", color: "black" })
				$("#name").val("请输入正确的姓名")
			}else{
				Store.dispatch(Actions.login({phone:this.refs.phone.value}))
				//this.refs.phone.value=''
				this.props.history.push('/nl_puc')
			}
		}
		
	}
	render() {
		

		return (
			<div className="z_reg">
				<div className="z_reg_head">
					<span>
						{/* <i>1</i> */}
						<b>填写注册信息</b>
						<u className="z_xian"></u>
					</span>
					<span>
						{/* <i>2</i> */}
						{/* <b>手机号验证</b> */}
					</span>
					<span>
						{/* <i>3</i> */}
						{/* <b>注册完成</b> */}
					</span>
				</div>
				<div className="z_reg_bottom">
					<div className="first_left">
						<div className="frist_tit">
							<h6>新用户注册</h6>
							<i>已有账号？</i>
							<a href="">立即登录&gt;&gt;</a>
						</div>
						<form>
							<div className="phone">
								<span>手机:</span>
								<input type="text" placeholder="请输入您的手机号码" id="tel"/>
								<i></i>
							</div>
							<div className="name">
								<span>姓名:</span>
								<input type="text" placeholder="请输入您的真实姓名"  id="name" ref='phone'/>
								<i></i>
							</div>
							<div className="pass">
								<span>密码:</span>
								<input type="text" placeholder="请输入6-20位字母和数字的组合" id="pass"/>
								<i></i>
							</div>
							<div className="pass1">
								<span>确认密码:</span>
								<input type="text" placeholder="请再次输入您的密码" id="pass1"/>
								<i></i>
							</div>
							<div className="yzm">
								<span>验证码:</span>
								<input type="text" placeholder="请输入验证码" id="yzm"/>
								<b></b>
								<u onClick={this.change.bind(this)}>换一张</u>
							</div>
							<div className="z_tishi">请输入正确的验证码</div>
							<button onClick={this.tap.bind(this)}>确定</button>
						</form>
					</div>
					<div className="first_right">
						<div className="frist_tit">为什么要成为会员？</div>
						<p>
							<b>会员积分</b>
							获得会员积分优惠资格每次购买都是更优惠
						</p>
						<p>
							<b>会员抽奖</b>
							参与抽奖，抢购旅行也能白菜价
						</p>
						<p>
							<b>精彩活动</b>
							老用户有机会参与线下活动和旅友们共度周末
						</p>
					</div>
				</div>
			</div>
		);
	}
	
	componentDidMount(){
		// 保存每个input框的placeholder值
		var str = "";
		var str1 = $("#tel").attr("placeholder");
		var str2 = $("#name").attr("placeholder");
		var str3 = $("#pass").attr("placeholder");
		var str4 = $("#pass1").attr("placeholder");
		var str5 = $("#yzm").attr("placeholder")
		$("input").focus(function () {
			str = $(this).attr("placeholder")
			$(this).attr("placeholder", "")
		})
		$("#tel").change(function () {
			if($(this).val().length==11){
				$(this).parent().find("i").css("display", "inline-block").css("background-position-y", "-609px");
				$(".yzm").css("display", "block")
			}else{
				$(this).parent().find("i").css("display", "inline-block").css("background-position-y", "-670px");
				$(".yzm").css("display","none")
			}
			console.log($(this).val().length)
		})
		$("#tel").blur(function () {
			if ($(this).val() == "") {
				$(this).attr("placeholder", str1)
				$(this).parent().find("i").css("display", "none")
			}
		})
		$("#name").change(function () {
			if($(this).val().length==3){
				$(this).parent().find("i").css("display", "inline-block").css("background-position-y", "-609px");
			}else{
				$(this).parent().find("i").css("display", "inline-block").css("background-position-y", "-670px")
			}
		})
		$("#name").blur(function () {
			if ($(this).val() == "") {
				$(this).attr("placeholder", str2)
				$(this).parent().find("i").css("display", "none")
			}
		})
		$("#pass").change(function () {
			if($(this).val().length>=6 && $(this).val().length<=12){
				$(this).parent().find("i").css("display", "inline-block").css("background-position-y", "-609px");
			}else{
				$(this).parent().find("i").css("display", "inline-block").css("background-position-y", "-670px")
			}
		})
		$("#pass").blur(function () {
			if ($(this).val() == "") {
				$(this).attr("placeholder", str3)
				$(this).parent().find("i").css("display", "none")
			}
		})
		$("#pass1").change(function () {
			if ($(this).val() == $("#pass").val()) {
				$(this).parent().find("i").css("display", "inline-block").css("background-position-y", "-609px");
			} else {
				$(this).parent().find("i").css("display", "inline-block").css("background-position-y", "-670px")
			}
		})
		$("#pass1").blur(function () {
			if ($(this).val() == "") {
				$(this).attr("placeholder", str4)
				$(this).parent().find("i").css("display", "none")
			}
		})
		$("#yzm").change(function () {
			if ($(this).val() != $(".yzm").find("b").html()){
				$(".z_tishi").css("display","block")
			}else{
				$(".z_tishi").css("display","none")
			}
		})
		$("#yzm").blur(function () {
			if ($(this).val() == "") {
				$(this).attr("placeholder", str5)
				$(this).parent().find("i").css("display", "none")
			}
		})

		

		
















		this.foo()

		
		
	}

	
	
}

export default Register;