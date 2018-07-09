import React, { Component } from 'react';
import '../css/register.css';
import $ from 'jquery';
import draw from '../img/draw.png';
import Actions from './redux/Actions'
import Store from './redux/Store';
import{ Link } from 'react-router';

class Login extends Component{
	constructor(props){
		super(props)
		this.state={
			arr:Store.getState()
		}
		this.onchanges=this.onchanges.bind(this)
		}
		tap(){
				Store.dispatch(Actions.login({phone:this.refs.phone.value}))
				//this.refs.phone.value=''
				this.props.history.push('/')
		}
		onchanges(){
				this.setState({arr:Store.getState()})
			}
		componentDidMount(){
		//		监听
			Store.subscribe(this.onchanges)
		}
	render(){
		return(
			<div>
				<div className="z_logincon">
					<img src={draw}/>
					<div className="z_logincon_right">
						<div className="z_logincon_right_tit">
							<h6>用户登录</h6>
							<span>
								<Link to={{ pathname: '/register' }}>免费注册</Link>
								<a href="">忘记密码</a>
							</span>
						</div>
						<div className="z_loginconuse">
							<input type="text" placeholder="请输入您已注册的手机号" ref='phone'/>
							<i></i>
						</div>
						<div className="z_loginconpas">
							<input type="password" placeholder="请输入密码" />
							<i></i>
						</div>
						<div className="z_loginconts">
							<b>可以使用短信验证码登录</b>
							<span>发送短信验证码</span>
						</div>
						<p className="z_login_err">手机号错误</p>
						<button className="z_loginbtn"  onClick={this.tap.bind(this)}>登录</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Login;