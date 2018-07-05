import React, { Component } from 'react';
import '../css/register.css';
import $ from 'jquery';
import draw from '../img/draw.png';

class Login extends Component{
	render(){
		return(
			<div>
				<div className="z_logincon">
					<img src={draw}/>
					<div className="z_logincon_right">
						<div className="z_logincon_right_tit">
							<h6>用户登录</h6>
							<span>
								<a href="">免费注册</a>|
								<a href="">忘记密码</a>
							</span>
						</div>
						<div className="z_loginconuse">
							<input type="text" placeholder="请输入您已注册的手机号" />
							<i></i>
						</div>
						<div className="z_loginconpas">
							<input type="text" placeholder="请输入密码" />
							<i></i>
						</div>
						<div className="z_loginconts">
							<b>可以使用短信验证码登录</b>
							<span>发送短信验证码</span>
						</div>
						<p className="z_login_err">手机号错误</p>
						<button className="z_loginbtn">登录</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Login;