import React, { Component } from 'react';
import UserChoreContainer from './UserChoreContainer'
import UnassignedChoresContainer from './UnassignedChoresContainer'
import Schedule from './Schedule'
import CommentContainer from './CommentContainer'
import CreateChore from '../components/CreateChore'
import { api } from '../services/api'


export default class HouseContainer extends Component {

  // landing page after login? Should display the current week schedule, your assigned chores, comments box, full figma main page

  // Unassigned chores shrinks as unassigned chores are assigned / "No Chores to Assign!"
  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/");
    } else {
      api.auth.getCurrentUser().then(data => {
        if (data.error || this.props.authUser.id !== data.user.id) {
          this.props.history.push("/");
        } else {
          if (this.props.authUser.location_id) {
            api.location.getLocation(this.props.authUser.location_id).then(data => {
              this.props.setLocationInfo(data)
            })
          }
        }
      });
    }
  }

  render() {
    return (<>{this.props.authUser.location_id ?
        <div id='sideBar' className="container-fluid row">
          <div className='left-side-menu col-2'>
            <UserChoreContainer />
            <br/>
            <UnassignedChoresContainer/>
            <br/>
            <CreateChore/>
          </div>
          <main id="mainbar" className="col-10">
            <Schedule />
            <CommentContainer />
          </main>
        </div> : <h1>Join or Create a household on your account page!</h1>
    }</>)
  }
}