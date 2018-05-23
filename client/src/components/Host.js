import React, { Component } from 'react';
import './hosts.css';

class Host extends Component {
  deleteHost(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Host">
        <strong>{this.props.host.current_name}</strong> <a href="#" onClick={this.deleteHost.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

Host.propTypes = {
  host: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default Host;