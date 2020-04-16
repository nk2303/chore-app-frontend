import React from "react";
import Chore from "../components/Chore";
// import broom from "../assets/broom.png";
import paperBackground from "../assets/recyclepaper.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function UnassignedChoresContainer(props) {
  // Inherit chores
  // map through and create Chores for each
  const { chores, authUser, onCompleteChore, isAdmin, users, onDeleteChore } = props;

  const displayChores = (chores) => {
    return chores.map((chore) => {
      return (
        <Chore
          chore={chore}
          authUser={authUser}
          onCompleteChore={onCompleteChore}
          isAdmin={isAdmin}
          users={users}
          onDeleteChore={onDeleteChore} />
      );
    });
  };

  // Unassigned chores / descriptions live here


  const backgroundImg = {
    backgroundImage: `url(${paperBackground})`,
    backgroundSize: "cover",
  };
  return (
    <div style={backgroundImg}>
      <div>
          Unassigned Chores
          {displayChores(chores)}
      </div>
    </div>
  );
}
