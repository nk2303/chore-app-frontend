import React, { Component } from "react";
import paperBackground from "../assets/recycling-texture.JPG";
import Chore from "../components/Chore";
import { Accordion } from "react-bootstrap";

export default class UserChoreContainer extends Component {
  state = {
    currentUserChores: [],
  };

  findAssignedChores = () => {
    setTimeout(() => {
      //   console.log("timeout");
      let userChores = this.props.chores.filter((chore) => {
        return chore.user_id === this.props.authUser.id;
      });
      this.setState({
        currentUserChores: userChores,
      });
    }, 200);
  };

  componentDidMount() {
    this.findAssignedChores();
  }

  render() {
    var backgroundImg = {
      backgroundImage: `url(${paperBackground})`,
      backgroundSize: "cover",
    };


    return (
      <div style={backgroundImg}>
        <Accordion>
          {!this.state.currentUserChores == []
            ? this.state.currentUserChores.map((chore) => (
                <Chore chore={chore} onDrag={(choreName) => console.log('dragging' + choreName)}
                  draggable
                  
                />
              ))
            : null}
          Your Current Chores
        </Accordion>
      </div>
    );
  }
}
