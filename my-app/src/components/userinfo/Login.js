import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './style/Profile.css';

class Login extends Component{
	constructor(){
		super();
		this.state = {
			viewShow:false,
			val1:'',
			val2:''
		};
	}

	componentDidMount(){
		this.setState({
			viewShow:true
		});
	}

	change1 = (e) => {
		this.setState({
			val1:e.target.value
		});
	}

	change2 = (e) => {
		this.setState({
			val2:e.target.value
		});
	}

	login = () => {
		let user = this.input1.value;
		let password = this.input2.value;
		if(user === 'admin' & password === 'admin'){
			this.setState({
				val1:'',
				val2:''
			});
			let json = {
				name:user,
				password:password
			};
			localStorage.setItem("user", JSON.stringify(json));
			window.history.go(-1);
		}else{
			alert('用户名或密码错误');
		}
	}

	render(){
		return(
			<div className={this.state.viewShow?'viewshow':'view'}>
				<div className="login_header">
					<Link to="/profile"></Link>
					登录百度账号
				</div>
				<div className="login_con">
					<div className="logo_dom"></div>
					<input
						type="text"
						placeholder="admin "
						value={this.state.val1}
						onChange={this.change1}
						ref={(el)=>{this.input1=el}}
					/>
					<input
						type="password"
						placeholder="admin"
						value={this.state.val2}
						onChange={this.change2}
						ref={(el)=>{this.input2=el}}
					/>
					<button
						onClick = { this.login }
					>
						登录
					</button>
					<div className="login_txt">
						<span>登录遇到问题</span>
						<span>其他方式登录</span>
					</div>
					<div className="signin">
						<span>立即注册</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
