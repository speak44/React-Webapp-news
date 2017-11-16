import React,{Component} from 'react';

import {Link} from 'react-router-dom';

import './style/Profile.css';

class AlreadyLogin extends Component{
	constructor(){
		super();
		this.state = {
			viewShow:false
		};
	}
	componentDidMount(){
		this.setState({
			viewShow:true
		});
	}
	deluser = () => {
		localStorage.removeItem('user');
	}
	render(){
		return(
			<div
				className={this.state.viewShow?'viewshow':'view'}
			>
				<div className="profileHeader profileHeader2">
					<Link to="/" className="go_back"></Link>
					<a className="touxiang"></a>
					<a className="username">cici</a>
				</div>
				<div className="log_con">
					<div>我的消息</div>
					<div>我的收藏</div>
					<div>无图模式</div>
					<div>
						<Link
							to="/"
							onClick={this.deluser}
						>
							退出登录
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default AlreadyLogin;
