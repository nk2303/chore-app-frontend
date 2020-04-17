import React from "react";
import Chore from "../components/Chore";
import translucentBackground from "../assets/translucent.png";
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


  const backgroundImg = {
    backgroundImage: `url(${translucentBackground})`,
    backgroundSize: "cover",
  };
  return (
    <div style={backgroundImg} >
      Unassigned Chores
      <Container className="minHeight-300" >
          <div className="row">
          {/* <Accordion className="width-2px"> */}
            {displayChores(chores)}
          {/* </Accordion> */}
          </div>
      </Container>
    </div>
  );
}
