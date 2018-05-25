import React, { Component } from 'react';
import uuid from 'uuid';
import logo from './logo.png';
import './App.css';
import Hosts from './components/Hosts';
import AddHost from './components/AddHost';

class App extends Component {

  state = {
    response: ''
  };

  constructor(){
    super();
    this.state = {
      newHost:{},
      hosts: []
    }
  }

  static defaultProps = {
    intelligence_metrics: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  }

  componentWillMount(){
    this.getHosts();
  }
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({response: res.express}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/reverie/hosts');
    const body = await response.json();

    if(response.status !== 200) throw Error(body.message);

    return body;
  };

  getHosts(){
    this.setState({hosts: [
    ]});
  }

  handleAddHost(host){
    let hosts = this.state.hosts;
    hosts.push(host);
    this.setState({host:hosts});
  }

  handleUpdateHost(id){
    let hosts = this.state.hosts;
    let index = hosts.findIndex(x => x.id === id);
    hosts.splice(index, 1);
    this.setState({hosts:hosts});
  }

  handleDeleteHost(id){
    let hosts = this.state.hosts;
    let index = hosts.findIndex(x => x.id === id);
    hosts.splice(index, 1);
    this.setState({hosts:hosts});
  }

  handleSubmit(e){
    if(this.refs.current_name.value === ''){
      alert('First and last name are required');
    } else {
      this.setState({newHost:{
        //id: uuid.v4(),
        date_added: new Date.now(),
        first_active: this.refs.first_active.value,
        current_name: this.refs.current_name.value,
        height: this.refs.height.value,
        weight: this.refs.weight.value,
        intelligence_metric: this.refs.category.value
      }}, function(){
        //console.log(this.state);
        this.props.addHost(this.state.newHost);
      });
    }
    e.preventDefault();
  }

  render() {
    let intelligenceOptions = this.props.intelligence_metrics.map(intelligence_metric => {
      return <option key={intelligence_metric} value={intelligence_metric}>{intelligence_metric}</option>
    }); 
    let hosts = this.state.hosts.map(host_object => {
      return <div>
        <h3 key={host_object.id} value={host_object.current_name}>{host_object}</h3>
      </div>
    })

    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Reverie Inventory System</h1>
      </header>
      <div class="navbar">
        <a href="/reverie/hosts">Home</a>
        <div class="dropdown">
          <button class="dropbtn">View 
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="/reverie/hosts/getHosts">View Hosts</a>
            <a href="/reverie/hosts/getHostForm">Find Host</a>
          </div>
        </div> 
        <div class="dropdown">
          <button class="dropbtn">Actions 
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="/reverie/hosts/addHost">Create Host</a>
            <a href="/reverie/hosts/updateHostForm">Update Host</a>
            <a href="/reverie/hosts/deleteHostForm">Delete Host</a>
          </div>
        </div> 
      </div>
      <div className="App">
        <AddHost addHost={this.handleAddHost.bind(this)} />
        <Hosts hosts={this.state.hosts} onDelete={this.handleDeleteHost.bind(this)} />
        <hr />
      </div>
     
      <p classname="App.intro">{this.state.response}</p>
        <div className="App">
        <h3>Update Existing Host</h3>
        <form onSubmit={this.handleSubmit.bind(this)} method="/reverie/hosts/addHost">
        <div>
          <label>Activation Date: </label>
          <input ref="first_active" placeholder="MM/DD/YYYY"/>
        </div>
          <div>
            <label>First Name: </label>
            <input ref="first_name" placeholder="Anthony"/>
          </div>
            <div>
            <label>Last Name: </label>
            <input ref="last_name" placeholder="Hopkins"/>
          </div>
          <div>
            <label>Height: </label>
            <span><input type="text" placeholder="68.0" ref="current_name"/> inches</span>
          </div>
          <div>
            <label>Weight: </label>
            <span><input type="text"  placeholder="180.0" ref="current_name"/> pounds</span>
          </div>
          <div>
            <label>Intelligence Level: </label>
            <select ref="intelligence_metric">
              {intelligenceOptions}
            </select>
          </div>
          <br />
          <input type="submit" value="Submit" />
          <br />
        </form>
        </div>
      </div>
      
    );
  }
}


export default App;