import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import logo from './logo.svg';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

export default App;
