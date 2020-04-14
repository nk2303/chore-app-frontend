import React, { Component } from 'react';
import { api } from '../services/api';
import Button from 'react-bootstrap/Button'

const user = {
  username: 'kim2',
  first_name: 'Kim',
  last_name: 'Khong',
  email: 'kim@gmail.com'
}

export default class Account extends Component {

  // Container to display a new users options to create new house, or join a house

  state = {
      data: {}
  }

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
      <div id='sideBar' class="container-fluid row">
        <sidebar class='left-side-menu col-2'>
          <Button href="#" variant="outline-secondary" block>See my chore this week</Button>
          <br/><br/>
          <Button variant="outline-secondary" block>Create new household</Button>
        </sidebar>

        <main id="mainbar" class="col-10">
            <div>
              <h5>Your account info: </h5>
              Your username: {this.state.data.username} <br/>
              Your name: <br/>
              Your email: <br/>
              Your house: <br/>
              Your admin: <br/>
              Your housemates: <br/>
            </div>
        </main>
        
      </div>
    )
  }
} 
