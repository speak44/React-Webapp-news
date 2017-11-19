import React from 'react';
import './style/SubscribeSearch.css';
import {Link} from 'react-router-dom';
class SubscribeSearch extends React.Component{

	constructor(){
		super();
		this.state = {
		};
	}


	//检测频道订阅

	render(){
		return(
			<div>
				<div className='ssHeader'>
					<Link to="/" className="goBack"></Link>
					<div className="title">搜索订阅</div>
					<Link to="/manage" className="done">完成</Link>
				</div>

				<div className="ssSearch">
					<div className="ssCon">
						<span></span>
						<input
							placeholder="搜索任意关键词即可订阅"
							type="search"
						/>
					</div>
				</div>

				<div
					className="searchW"
					ref={(el)=>{this.searchWhat=el}}
				>
				</div>

				<div
					className="searchList"
					ref={(el)=>{this.searchList=el}}
				>
				</div>
			</div>
		);
	}
}

export default SubscribeSearch;
