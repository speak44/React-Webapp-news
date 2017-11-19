import React,{Component} from 'react';
import {
	Link
} from 'react-router-dom';
import './style/manage.css';

class Manage extends Component{

	constructor(){
		super();
	}

	render(){
		return(
			<div className={true?'viewshow2':'view2'}>
				<div className='manageHeader'>
					<Link
						to="/"
						onClick={this.setLocalStorage}
					></Link>
					<span>订阅中心</span>
				</div>

				<div className="manageSearch">
					<Link to="/subscribe/search">
						<span className="span1"></span>
						<span className="span2">搜索任意关键字即可订阅</span>
					</Link>
				</div>

				<div className="manageBody">
					<div>
						央视网
						<span
							className={false?'bg2':'bg1'}
							// onClick={this.selectFn}
						>
						</span>

					</div>
				</div>

				<div className="govern">
					<Link to="/subscribe/manage">管理我的订阅</Link>
				</div>
			</div>
		);
	}
}

export default Manage;
