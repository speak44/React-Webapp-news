import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './style/SearchPage.css';
// import fetch from 'react-fetch';
// var fetch = require('fetch');
// import fetch from 'fetch'
require('es6-promise').polyfill();
require('isomorphic-fetch');
console.log(fetch)
class SearchPage extends Component{

	constructor(){
		super();
		this.state = {
			loadingHide:false,
			viewShow:false
		};
	}
	//搜索新闻
	searchNews = () => {
    fetch('http://api.jisuapi.com/news/search?keyword=姚明&appkey=719df17f4e283de9').then(function (response) {
      return response.json();
    }).then(function (jsonData) {
      console.log(jsonData);
    }).catch(function () {
      console.log('出错了');
    });
  }


	componentDidMount(){
		this.setState({
			viewShow:true
		});
	}

	goTop = () => {
		//ReactDom.findDOMNode(this).scrollIntoView();
		//ReactDom.findDOMNode(this).scrollTop = 0;
		this.view.scrollIntoView();
	}

	render(){

		return(
			<div
				className={this.state.viewShow?'viewshow':'view'}
				ref={(el)=>{this.view=el}}
			>
				<div className="searchHeader">
					<Link to="/"></Link>
					<span>搜新闻</span>
				</div>
				<div className="searchBox_Box">
					<div className="searchBox">
						<input type="search" ref={(el)=>{this.search=el}} />
						<span onClick={this.searchNews} >百度一下</span>
					</div>
				</div>
				<div
					className="result_num"
					ref={(el)=>{this.newsLength=el}}>
				</div>
				<div
					className="newsBox"
					ref={(el)=>{this.newsBox=el}}>
				</div>

				<div
					className={this.state.loadingHide?'loading_hide':'loading'}
				>
					<div className="loading_logo"></div>
					<div className="loading_anim"></div>
				</div>

				<div
					className='goTop'
					onClick={this.goTop}
					ref={(el)=>{this.goTopEle=el}}
				>
				</div>

			</div>
		);
	}
}

export default SearchPage;
