import React from "react";
import Chore from "../components/Chore";
import { Container } from "react-bootstrap";
import translucentBackground from "../assets/translucent.png";


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
    backgroundImage: `url(${translucentBackground})`,
    backgroundSize: "cover",
  };

  return (
    <div style={backgroundImg}>
      Your Chores
      <Container className="minHeight-300" onDragOver={e => e.preventDefault()} onDrop={() => props.onDrop(null, authUser.id)}>
          <div className="row">
            {/* <Accordion> */}
            {displayChores(chores)}
            {/* </Accordion> */}
          </div>
      </Container>
      
    </div>
  );
}
