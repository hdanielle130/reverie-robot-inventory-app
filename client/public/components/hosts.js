import React, { Component } from 'react';
import './hosts.css';

class Hosts extends Component {
  constructor() {
    super();
    this.state = {
      hosts: []
    };
  }

  componentDidMount() {
    fetch('/reverie/hosts')
      .then(res => res.json())
      .then(hosts => this.setState({hosts}, () => console.log('Hosts fetched...', hosts)));
  }

  render() {
    return (
      <div>
        <h2>Hosts</h2>
        <ul>
        {this.state.hosts.map(hosts => 
          <li key={host.id}> {host.current_name} </li>
        )}
        </ul>
      </div>
    );
  }
}

export default Hosts;