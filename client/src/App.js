import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Hosts from './components/Hosts';
/*import uuid from 'uuid';
import AddHost from './components/AddHost';*/

class App extends Component {

  constructor(){
    super();
    this.state = {
      hosts: [],
    }
  } 

  getHosts(){
    /*this.setState({hosts: [
      {
        id:uuid.v4(),
        title: 'Business Website',
        category: 'Web Deisgn'
      },
      {
        id:uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id:uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});*/
  }

  componentWillMount(){
    this.getHosts();
  }

  handleAddHost(host){
    let hosts = this.state.hosts;
    hosts.push(host);
    this.setState({host:hosts});
  }

  handleDeleteHost(id){
    let hosts = this.state.hosts;
    let index = hosts.findIndex(x => x.id === id);
    hosts.splice(index, 1);
    this.setState({hosts:hosts});
  }
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
            <a href={this.handleAddHost.bind(this)}>Create Host</a>

          </div>
        </div> 
      </div>
      </div>
    );
  }
}

/*            <a href="#">Update Host</a>
            <a href="#">Delete Host</a>*/

export default App;