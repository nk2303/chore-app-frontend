import React, { Component } from 'react';
import UserChoreContainer from './UserChoreContainer'
import UnassignedChoresContainer from './ChoresContainer'
import Schedule from './Schedule'
import CommentContainer from './CommentContainer'
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
            api.location.getLocation(this.props.authUser.location_id).then(data => {
              this.props.updateState(data)
            })
          }
        });
      }
    }

    render(){
        return(
            <div id='sideBar' class="container-fluid row">
                <sidebar class='left-side-menu col-2'>
                    <UserChoreContainer/>
                </sidebar>
                {/* <UnassignedChoresContainer/> */}
                <main id="mainbar" class="col-10">
                    <Schedule/>
                    <CommentContainer/>
                </main>
            </div>
        )
    }
}