import React, { Component } from "react";
import Chore from "../components/Chore";
// import broom from "../assets/broom.png";
import paperBackground from "../assets/recyclepaper.jpg";

// const chore = [
//   {
//     name: "Sweep",
//     description: "Sweep floors upstairs and in the kitchen.",
//     location: "3102 E Cherry St.",
//     user: "Jonny",
//     day: "Thursday",
//     icon: broom,
//     completed: true,
//   },
// ];

export default class UnassignedChoresContainer extends Component {
  // Inherit chores
  // map through and create Chores for each

  findUnassignedChores = () => {
      return this.props.chores.filter(chore => chore.user === null)
  }

  displayChores = (chores) => {
    return chores.map((chore) => {
      return (
        <Chore chore={chore} authUser={this.props.authUser} onCompleteChore={this.props.onCompleteChore} isAdmin={this.props.isAdmin} users={this.props.users} />
      );
    });
  };

  // Unassigned chores / descriptions live here

  render() {
    var backgroundImg = {
      backgroundImage: `url(${paperBackground})`,
      backgroundSize: "cover",
    };
    return (
      <div style={backgroundImg}>
        <div>
          Unassigned Chores
          {this.displayChores(this.props.chores)}
        </div>
      </div>
    );
  }
}
