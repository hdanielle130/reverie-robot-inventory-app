import React, { Component } from 'react';
import uuid from 'uuid';

class AddHost extends Component {
  constructor(){
    super();
    this.state = {
      newHost:{}
    }
  }

  static defaultProps = {
    intelligence_metrics: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  }

  handleSubmit(e){
    if(this.refs.current_name.value === ''){
      alert('First and last name are required');
    } else {
      this.setState({newHost:{
        id: uuid.v4(),
        date_added: new Date.now(),
        first_active: this.refs.first_active.value,
        current_name: this.refs.current_name.value,
        height: this.refs.height.value,
        weight: this.refs.weight.value,
        intelligence_metric: this.refs.category.value
      }}, function(){
        console.log(this.state);
        this.props.addHost(this.state.newHost);
      });
    }
    e.preventDefault();
  }

  render() {
    let intelligenceOptions = this.props.intelligence_metrics.map(intelligence_metric => {
      return <option key={intelligence_metric} value={intelligence_metric}>{intelligence_metric}</option>
    });
    return (
      <div className="App" id="addHost">
        <h3>Create New Host</h3>
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
    );
  }
}

/*AddHost.propTypes = {
  intelligence_metrics: React.PropTypes.array,
  addProject: React.PropTypes.func
}*/

export default AddHost;