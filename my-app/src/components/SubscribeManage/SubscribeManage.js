import React,{Component} from 'react';
import './style/SubscribeManage.css';

import {Link} from 'react-router-dom';


class SubscribeManage extends Component{

	constructor(){
		super();
	}


	render(){

		return(
			<div>
				<div className='smHeader'>
					<Link to="/" className="goBack"></Link>
					<div className="title">订阅管理</div>
					<Link to="/manage" className="done">完成</Link>
				</div>

				<div className="num">
					已有1个订阅
				</div>

				<section>
          <div className="sec">
            <div>
              <span
                className="del"
                onClick={this.delLS}
              ></span>
              财经网
            </div>
          </div>
				</section>
			</div>
		);
	}
}

export default SubscribeManage;
