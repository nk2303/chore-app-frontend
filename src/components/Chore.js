import React, { Component, useState } from "react";

import { Modal, Accordion, Card, Button } from "react-bootstrap";
import { api } from '../services/api';

// Display Chore details: on click, setState to send clicked chore

const Chore = (props) => {
  const {
    name,
    description,
    user_id,
    day,
    icon,
    completed
  } = props.chore;

  const {
    showChoreDetail,
    draggable,
    onDrag
  } = props;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // const dragStart = e => {
  //   const target = e.target;

  //   setTimeout(() => {
  //     target.style.display = "none";
  //   },0);
  // }

  // const dragOver = e => {
  //   e.stopPropagation();
  // }
  // this hook below toggled "completed" boolean
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

  const assignedUser = (user_id) => {
    return (user_id ? props.users.find(user => user.id === user_id).first_name : null)
  }

  return (
    <Accordion>
      <Card className="text-center dark" style={{ width: "5rem" }}>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <Card.Img src={icon} />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Subtitle>{description}</Card.Subtitle>
        </Accordion.Collapse>
        <Card.Title onClick={handleShow}>{name}</Card.Title>
        <Modal
          className="text-center"
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
              <h5>Schedule on: {day}</h5>
              <p>Status: {complete ? "Finished!" : "Incomplete"} </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClickComplete}>{complete ? "No I didn't!" : "Mark Complete!"}</Button> 
            {props.isAdmin ? <Button>Delete</Button> : null}
          </Modal.Footer>
        </Modal>
      </Card>
    </Accordion> )

};

export default Chore;
