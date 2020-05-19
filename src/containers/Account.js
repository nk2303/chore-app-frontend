import React, { Component } from 'react';
import { api } from '../services/api';
import Button from 'react-bootstrap/Button';
import CreateHouse from '../components/CreateHouse';
import { Link } from 'react-router-dom';
import EditUser from '../components/EditUser';
import JoinHouse from '../components/JoinHouse';
import DeleteUser from '../components/DeleteUser';
import AccountFooter from "../components/AccountFooter";

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
    const { username, first_name, last_name, email, location_id } = this.props.authUser;
    const { isAdmin, location, users, history, authUser } = this.props;
    return (
      <div id='sideBar' className="container-fluid row">
        <div className='left-side-menu col-2 text-center'>
          {(location_id) ?
            (<div>
              <Button variant="outline-secondary" block>
                <Link to='/house'>See the Calendar</Link>
              </Button>
            
            </div>)
            :
            (<div>Join an Existing Household:
              <JoinHouse history={history} authUser={authUser} onJoinHouse={this.props.onUpdateUser} />
              <br />----- Or -----<br /><br />
              <CreateHouse history={history} authUser={authUser} onAddHouse={this.props.onUpdateUser} />
            </div>)
          }
          
        </div>


        <main id="mainbar" className="col-7">
          <div className="white-trans-bg">
            <h5>Your account info: </h5>
              Your username: {username}<br />
              Your name: {first_name} {last_name} <br />
              Your email: {email}<br />
              Your house: {location_id ? location.name : 'You do not belong to a house.'} <br />
              Your admin: {location.id ? users.find(user => user.id === location.creator).first_name : 'Create a house to become an admin'} <br />
              Your household members: {users.map(user => user.first_name).join(', ')} <br />
              <div>
              <br />
              <EditUser authUser={this.props.authUser} onEditUser={this.props.onUpdateUser}/><br />
              {isAdmin ? null : <DeleteUser authUser={authUser} onDeleteUser={this.props.handleLogout} history={history}/>}
          </div>
          </div>
          
        </main>
        {isAdmin ?
          <div className='col-3 white-trans-bg'>
            <h5>Your House ID: {location.id} </h5>
            <h6>Your housemates can use this ID to join your household.</h6>
          </div> : null}
        <AccountFooter isAdmin={isAdmin} authUser={authUser} onUpdateUser={this.props.onUpdateUser}/>
        
      </div>
    )
  }
} 
