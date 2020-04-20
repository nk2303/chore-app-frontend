import React, { Component } from "react";
import UserChoreContainer from "./UserChoreContainer";
import UnassignedChoresContainer from "./UnassignedChoresContainer";
import Schedule from "./Schedule";
import CommentContainer from "./CommentContainer";
import DistributeChores from "../components/DistributeChores";
import CreateChore from "../components/CreateChore";
import RotateChores from "../components/RotateChores"
import { api } from "../services/api";
import '../App.css';
import chalkboardImg from "../assets/chalkboardbackground.jpg"


export default class HouseContainer extends Component {
  // landing page after login? Should display the current week schedule, your assigned chores, comments box, full figma main page

  // Unassigned chores shrinks as unassigned chores are assigned / "No Chores to Assign!"
  // landing page after login? Should display the current week schedule, your assigned chores, comments box, full figma main page

  // Unassigned chores shrinks as unassigned chores are assigned / "No Chores to Assign!"
  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/");
    } else {
      api.auth.getCurrentUser().then((data) => {
        if (data.error || this.props.authUser.id !== data.user.id) {
          this.props.history.push("/");
        } else {
          if (this.props.authUser.location_id) {
            api.location
              .getLocation(this.props.authUser.location_id)
              .then((data) => {
                this.props.setLocationInfo(data);
              });
          }
        }
      });
    }
  }

  filterUnassignedChores = () => {
    return this.props.chores.filter((chore) => chore.user_id === null);
  };

  filterAssignedChores = () => {
    return this.props.chores.filter(chore => {
      return (chore.user_id === this.props.authUser.id) && (chore.day === null)
    });
  };

  filterScheduledChores = () => {
    return this.props.chores.filter(chore => {
      return (chore.day !== null)
    });
  };

  scheduleStyle = {
    backgroundImage: `url(${chalkboardImg})`,
    backgroundSize: 'cover'
  };


  render() {
    const { onDragStart, onDrop } = this.props;
    return (
      <>
        {this.props.authUser.location_id ? (
          <div id="sideBar" className="container-fluid row">
            <div className="left-side-menu col-2">
              <UserChoreContainer
                chores={this.filterAssignedChores()}
                users={this.props.users}
                authUser={this.props.authUser}
                onCompleteChore={this.props.onCompleteChore}
                onDeleteChore={this.props.onDeleteChore}
                onDragStart={onDragStart}
                isAdmin={this.props.isAdmin}
                onDrop={onDrop}
              />
              <br />
              <UnassignedChoresContainer
                chores={this.filterUnassignedChores()}
                users={this.props.users}
                authUser={this.props.authUser}
                onCompleteChore={this.props.onCompleteChore}
                onDeleteChore={this.props.onDeleteChore}
                onDragStart={onDragStart}
                isAdmin={this.props.isAdmin} />
              <br />
              {this.props.isAdmin ? (
                <div>
                  <CreateChore
                    locationId={this.props.authUser.location_id}
                    onAddChore={this.props.onAddChore}
                  />
                  <br />
                  
                  <RotateChores
                  users={this.props.users}
                  chores={this.filterScheduledChores()}
                  onAssignChore={this.props.onCompleteChore}
                  />
                  <br />
                  <DistributeChores
                    users={this.props.users}
                    chores={this.filterUnassignedChores()}
                    onAssignChore={this.props.onCompleteChore}
                  />
                </div>
                
              ) : null}
            </div>
          
            <main id="mainbar" className="col-10">
              <Schedule
                users={this.props.users}
                chores={this.props.chores}
                authUser={this.props.authUser}
                onCompleteChore={this.props.onCompleteChore}
                onDeleteChore={this.props.onDeleteChore}
                isAdmin={this.props.isAdmin}
                onDragStart={onDragStart}
                onDrop={onDrop}/>
              
            </main>
            <CommentContainer />
          </div>
          
        ) : (
          <div className='text-center'>
            <h3>Join or Create a household on your account page!</h3>
          </div>
        )}
      </>
    );
  }
}
