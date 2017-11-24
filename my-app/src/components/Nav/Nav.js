import React,{Component} from 'react';
import './style/Nav.css';
import '../../components/common.css';
class Nav extends Component{
  constructor(){
		super();
    this.state={
			navData : [
				{title:"推荐",checked:true,show:true},
				{title:"新闻",checked:false,show:true},
				{title:"财经",checked:false,show:true},
				{title:"体育",checked:false,show:true},
				{title:"娱乐",checked:false,show:true},
				{title:"教育",checked:false,show:true},
				{title:"军事",checked:false,show:true},
				{title:"科技",checked:false,show:true},
				{title:"NBA",checked:false,show:false},
				{title:"股票",checked:false,show:false},
				{title:"星座",checked:false,show:false},
				{title:"女性",checked:false,show:false},
				{title:"健康",checked:false,show:false},
				{title:"育儿",checked:false,show:false}
			]
		}
  }
  render(){
    return(
      <div className="NavCont">
        <div className="scrollMenu">
          <p className="lgrad"></p>
          <ul className="menuske">
            <li><a href={'javascript:;'}>推荐</a></li>
            <li><a href={'javascript:;'}>新闻</a></li>
            <li><a href={'javascript:;'}>财经</a></li>
            <li><a href={'javascript:;'}>体育</a></li>
            <li><a href={'javascript:;'}>娱乐</a></li>
            <li><a href={'javascript:;'}>教育</a></li>
            <li><a href={'javascript:;'}>军事</a></li>
            <li><a href={'javascript:;'}>科技</a></li>
            <li><a href={'javascript:;'}>NBA</a></li>
          </ul>
          <p className="rgrad"></p>
          <p className="more">
            <i className="i"></i>
          </p>
        </div>
        <div className="allMenu">
          <div className="mask"></div>
          <div className="menusArea">
            <div className="title">
              切换栏目
              <a href={'javascript:;'} className="less">
                <i className="i"></i>
              </a>
            </div>
            <div className="menusbg">
              <ul className="menus clearfixqxk">
                <li><a href={'javascript:;'}>推荐</a></li>
                <li><a href={'javascript:;'}>新闻</a></li>
                <li><a href={'javascript:;'}>财经</a></li>
                <li><a href={'javascript:;'}>体育</a></li>
                <li><a href={'javascript:;'}>娱乐</a></li>
                <li><a href={'javascript:;'}>教育</a></li>
                <li><a href={'javascript:;'}>军事</a></li>
                <li><a href={'javascript:;'}>科技</a></li>
                <li><a href={'javascript:;'}>NBA</a></li>
              </ul>
            </div>
            <ul className="btmMenu">
              <li>
                <a href={'javascript:;'}>管理我的订阅</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Nav
