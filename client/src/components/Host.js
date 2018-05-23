import React, { Component } from 'react';
import './hosts.css';

class Host extends Component {
  deleteHost(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <div>
        <li className="Host">
            <strong>{this.props.host.current_name}</strong> 
        </li>
      </div>
    );
  }
}

/*Host.propTypes = {
    project: React.PropTypes.object,
    onDelete: React.PropTypes.func
}*/
/*<a href="#" onClick={this.deleteHost.bind(this, this.props.project.id)}>X</a>*/

export default Host;