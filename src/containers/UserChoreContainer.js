import React from "react";
import Chore from "../components/Chore";
// import broom from "../assets/broom.png";
import paperBackground from "../assets/recyclepaper.jpg";
import { Accordion } from "react-bootstrap";


export default function UserChoreContainer(props) {
  // Inherit chores
  // map through and create Chores for each
  const { chores, authUser, onCompleteChore, isAdmin, users, onDeleteChore, onDragStart } = props;

  const displayChores = (chores) => {
    return chores.map((chore) => {
      return (
        <Chore
          key={chore.id}
          chore={chore}
          authUser={authUser}
          onCompleteChore={onCompleteChore}
          isAdmin={isAdmin}
          users={users}
          onDeleteChore={onDeleteChore}
          onDragStart={onDragStart}
          draggable
          />
      );
    });
  };



  const backgroundImg = {
    backgroundImage: `url(${paperBackground})`,
    backgroundSize: "cover",
  };
  return (
    <div style={backgroundImg}>
      <div onDragOver={e => e.preventDefault()} onDrop={() => props.onDrop(null, authUser.id)}>
          Your Chores
          <Accordion>
            {displayChores(chores)}
          </Accordion>
      </div>
    </div>
  );
}
