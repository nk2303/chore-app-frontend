import React, { Component } from "react";
import UserChoreContainer from "./UserChoreContainer";
import UnassignedChoresContainer from "./UnassignedChoresContainer";
import Schedule from "./Schedule";
import CommentContainer from "./CommentContainer";
import AssignChore from "../components/AssignChore"
import CreateChore from "../components/CreateChore";
import { api } from "../services/api";

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
            api.location.getLocation(this.props.authUser.location_id).then(data => {
              this.props.setLocationInfo(data)
            })
          }
        }
      });
    }
  }

  filterUnassignedChores = () => {
    return this.props.chores.filter(chore => chore.user_id === null)
  }

  filterAssignedChores = () => {
    return this.props.chores.filter(chore => chore.user_id === this.props.authUser.id && chore.day === null)
  }

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
              {(this.props.isAdmin) ?
                (<div>
                  <CreateChore
                    locationId={this.props.authUser.location_id}
                    onAddChore={this.props.onAddChore} /><br />
                  <AssignChore />
                </div>)
                :
                null}
            </div>
            <main id="mainbar" className="col-10">
              <Schedule
                users={this.props.users}
                chores={this.props.chores}
                authUser={this.props.authUser}
                onCompleteChore={this.props.onCompleteChore}
                isAdmin={this.props.isAdmin}
                onDrop={onDrop}/>
              <CommentContainer />
            </main>
          </div>
        ) : (
            <h1>Join or Create a household on your account page!</h1>
          )}
      </>
    );
  }
}
