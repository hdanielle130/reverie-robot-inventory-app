import React, { Component } from 'react';
import Host from './Host';
import './hosts.css';

class Hosts extends Component {
  constructor() {
    super();
    this.state = {
      hosts: []
    };
  }

  deleteProject(id){
    this.props.onDelete(id);
  }

  componentDidMount() {
    fetch('/reverie/hosts')
      .then(res => res.json())
      .then(hosts => this.setState({hosts}, () => console.log('Hosts fetched...', hosts)));
  }
  render() {
    /*return (
      <div>
        <h2>Reverie Hosts</h2>
        <ul>
        {this.state.hosts.map(host => 
          <li key={host.id}>{host.current_name}</li>
        )}
        </ul>
      </div>*/
        let hosts;
        if(this.props.hosts){
          hosts = this.props.hosts.map(host => {
            //console.log(project);
            return (
              <Host onDelete={this.deleteProject.bind(this)} key={host.current_name} host={host} />
            );
          });
        }
        return (
          <div className="Hosts">
            <h3>Existing Hosts</h3>
            {hosts}
          </div>
        );
  }
}

/*Hosts.propTypes = {
  hosts: React.props.array,
  onDelete: React.props.func
}*/

export default Hosts;