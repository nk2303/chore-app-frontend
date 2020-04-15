import React, { Component } from "react";
import Switch from "react-switch";
 
export default class AssignChore extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    this.setState({ checked });
  }
 
  render() {
    return (
      <label>
        {(this.state.checked) ? <div>Auto assigning chores</div> : <div>Stop auto assigning chores</div>}
        <Switch onChange={this.handleChange} checked={this.state.checked} />
      </label>
    );
  }
}