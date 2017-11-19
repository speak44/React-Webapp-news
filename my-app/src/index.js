import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import Profile from './components/userinfo/Profile'
import Login from './components/userinfo/Login';
import SearchPage from './components/SearchPage/SearchPage';
import Manage from './components/manage/Manage';
import SubscribeManage from './components/SubscribeManage/SubscribeManage';
import SubscribeSearch from './components/SubscribeSearch/SubscribeSearch';
ReactDOM.render(
  <Router>
		<div>
			<Route exact path='/' component={App}/>
			<Route path="/profile" component={Profile}/>
			<Route path="/login" component={Login}/>
			<Route path="/searchpage" component={SearchPage}/>
			<Route path="/manage" component={Manage}/>
			<Route path="/subscribe/manage" component={SubscribeManage}/>
			<Route path="/subscribe/search" component={SubscribeSearch}/>
		</div>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
