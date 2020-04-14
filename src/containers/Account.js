import React, { Component } from 'react';
import { api } from '../services/api';

export default class Account extends Component {

  // Container to display a new users options to create new house, or join a house

  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/");
    } else {
      api.auth.getCurrentUser().then(data => {
        if (data.error || this.props.authUser.id !== data.user.id) {
          this.props.history.push("/");
        }
      });
    }
  }

  render() {
    return (
      <div>
        Your Account!
      </div>
    )
  }
} 