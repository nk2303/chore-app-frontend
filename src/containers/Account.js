import React, { Component } from 'react';
import { api } from '../services/api';
import Button from 'react-bootstrap/Button';
import CreateHouse from '../components/CreateHouse';
import EditUser from '../components/EditUser'

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
      <div id='sideBar' className="container-fluid row">
        <div className='left-side-menu col-2'>
          <Button href="#" variant="outline-secondary" block>See my chore this week</Button>
          <br/><br/>
          {<CreateHouse history={this.props.history} authUser={this.props.authUser}/>}
        </div>

        <main id="mainbar" className="col-10">
            <div>
              <h5>Your account info: </h5>
              Your username: {this.props.authUser.username}<br/>
              Your name: {this.props.authUser.first_name} {this.props.authUser.last_name} <br/>
              Your email: {this.props.authUser.email}<br/>
              Your house: {this.props.authUser.location_id? 'House here' : 'You currently belongs to no house.'}<br/>
              {/* Your admin: {}<br/>
              Your housemates: {} <br/> */}
            </div>
              <br/>
            <div>
                {/* <EditUser userInfo={this.props.authUser}/> */}
            </div> 
        </main>
        
      </div>
    )
  }
} 
