import React from "react";
import Chore from "../components/Chore";
import { Container } from "react-bootstrap";



export default function UnassignedChoresContainer(props) {
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
          draggable />
      );
    });
  };

  // Unassigned chores / descriptions live here

  return (
    <div className="white-trans-bg">
      <Container className="minHeight-300 ontop" >
        Unassigned Chores
          <div className="row">
          {/* <Accordion className="width-2px"> */}
            {displayChores(chores)}
          {/* </Accordion> */}
          </div>
      </Container>
    </div>
  );
}
