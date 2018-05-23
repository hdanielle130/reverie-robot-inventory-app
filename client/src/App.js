import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Hosts from './components/hosts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Reverie Inventory System</h1>
        </header>
        <Hosts />
        <div class="navbar">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <div class="dropdown">
          <button class="dropbtn">Actions 
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#addHost">Create Host</a>
            <a href="#">Update Host</a>
            <a href="#deleteHost">Delete Host</a>
          </div>
        </div> 
      </div>
      </div>
    );
  }
}

export default App;