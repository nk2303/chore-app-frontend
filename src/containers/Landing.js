import React, { Component } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { api } from '../services/api';

export default class Landing extends Component {

  // Container to login, signup, and info about app


  componentDidMount() {
    if (localStorage.getItem("token")) {
      api.auth.getCurrentUser().then((data) => {
        if (data.error) {
          console.log(data.error)
          //remain on this page and display the error message in some useful way
        } else {
          this.props.onReturningUser(data);
          if (data.user.location_id) {
            // make fetch to location show and route to /house
            // set state to include all returned info
            this.props.history.push('/house');
          } else {
            this.props.history.push('/account')
          }
        }
      });
    }
  }


  render() {
    return (
      <div>
        <Login onLogin={this.props.onLogin} history={this.props.history} />
        <Signup onSignin={this.props.onLogin} history={this.props.history} />
      </div>
    )
  }
}