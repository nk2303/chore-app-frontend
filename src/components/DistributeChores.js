import React from "react";
import { Button } from "react-bootstrap";
import { api } from "../services/api";

const DistributeChores = (props) => {
  const { chores, users } = props;

  const userIds = users.map((user) => user.id);

  const distributeChores = () => {
    let assignedChores = chores;
    let j = 0;
    for (let i = 0; i < assignedChores.length; i++) {
      if (j === userIds.length - 1) {
        assignedChores[i].user_id = userIds[j];
        j = 0;
      } else {
        assignedChores[i].user_id = userIds[j];
        j++;
      }
      console.log(assignedChores[i])
      api.chore
        .updateChore({
          chore: assignedChores[i],
        })
        .then((resp) => {
          props.onAssignChore(resp);
        });
    }
  };

  return (
    <div>
      <Button onClick={distributeChores}>Distribute Unassigned Chores</Button>
    </div>
  );
};

export default DistributeChores;
