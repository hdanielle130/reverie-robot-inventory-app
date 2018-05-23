import React, { Component } from 'react';
import uuid from 'uuid';
import './hosts.css';

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
        date_added: new Date.now,
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
    return (
      <div>
        <h3>Create Host</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Host Name</label><br />
            <input type="text" ref="current_name" />
          </div>
          <div>
            <button>Activate</button>
            <select>
                ["Activate", "Deactivate"]
            </select>
            if(this.select == "Activate" && this.ref.first_active == ""){
                
            }else if(this.select == "Activate"){
                this.ref.first_active = new Date.now
            }else{
                
            }
          </div>
          <div>
            <label>Height</label><br />
            <input type="text" defaultValue='0.0' ref="current_name" inches/>
          </div>
          <div>
            <label>Weight</label><br />
            <input type="text"  defaultValue='0.0' ref="current_name" pounds/>
          </div>
          <div>
            <label>Intelligence Level</label><br />
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

AddHost.propTypes = {
  intelligence_metrics: React.PropTypes.array,
  addProject: React.PropTypes.func
}

export default AddHost;