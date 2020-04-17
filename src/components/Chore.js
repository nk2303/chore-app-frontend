import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal, Accordion, Card, Button } from "react-bootstrap";
import { api } from '../services/api';

// Display Chore details: on click, setState to send clicked chore

const Chore = (props) => {

  const {
    draggable,
    onDragStart,
    chore,
    onDeleteChore
  } = props;

  const {
    id,
    name,
    description,
    user_id,
    day,
    icon,
    completed
  } = chore;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [complete, setComplete] = useState(completed);
 
  const handleClickComplete = () => {
    setComplete(!complete)
    let newChore = {...props.chore, completed: complete}
    api.chore.updateChore({chore: newChore})
    .then(resp => {
      props.onCompleteChore(resp);
      handleClose();
    })
  }

  const handleClickDelete = () => {
    api.chore.deleteChore(id)
    .then(resp => {
      onDeleteChore(id);
      handleClose();
    })
  }

  const assignedUser = (user_id) => {
    return (user_id ? props.users.find(user => user.id === user_id).first_name : "Not assigned yet")
  }

  return (
      <Card className="chore-card" text='dark' style={{ width: "5rem" }} draggable={draggable} onDragStart={() => onDragStart(chore)}>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <Card.Img src={null}></Card.Img>
          <FontAwesomeIcon icon={icon} size="2x"/>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Subtitle>{description}</Card.Subtitle>
        </Accordion.Collapse>
        <Card.Title onClick={handleShow}>{name}</Card.Title>
        <Modal
          className="text-centered"
          show={show}
          onHide={handleClose}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <p>{description}</p>
              <h5>Assigned to: {assignedUser(user_id)}</h5>
              <h5>Scheduled on: {day ? day : "Not scheduled yet"}</h5>
              <p>Status: {complete ? "Finished!" : "Incomplete"} </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            {user_id === props.authUser.id ? <Button onClick={handleClickComplete}>{complete ? "No I didn't!" : "Mark Complete!"}</Button> :
            null }
            {props.isAdmin ? <Button onClick={handleClickDelete}>Delete</Button> : null}
          </Modal.Footer>
        </Modal>
      </Card>
  );

};

export default Chore;
