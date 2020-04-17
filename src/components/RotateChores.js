import React from "react";
import { Button } from "react-bootstrap";
import { api } from "../services/api";

const RotateChores = (props) => {
  const { chores, users } = props;

  const userIds = users.map((user) => user.id);

  // [3,6,7,8,9]
  // find current chore's user_id in array of current user ids?
  // assign it the next one
  const rotateChores = () => {
    let assignedChores = chores;
    for (let i = 0; i < assignedChores.length; i++) {
      if (userIds.indexOf(assignedChores[i].user_id) === userIds.length - 1) {
        assignedChores[i].user_id = userIds[0]
        assignedChores[i].day = null
        assignedChores[i].completed = false
      } else {
        assignedChores[i].user_id = userIds[userIds.indexOf(assignedChores[i].user_id)+1]
        assignedChores[i].day = null
        assignedChores[i].completed = false

      }
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
      <Button variant="info" onClick={rotateChores} block >Rotate Chores</Button>
    </div>
  );
};

export default RotateChores;
