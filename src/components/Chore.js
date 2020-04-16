import React, { Component, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal, Accordion, Card, Button } from "react-bootstrap";

// Display Chore details: on click, setState to send clicked chore

const Chore = (props) => {
  const {
    name,
    description,
    user,
    day,
    icon,
    completed,
    showChoreDetail,
  } = props.chore;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // this hook below toggled "completed" boolean
  const [complete, setComplete] = useState(completed);
 

  return (
    <Accordion>
      <Card className="chore-card" text='dark' style={{ width: "5rem" }}>
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
              <h5>Assigned to: {user}</h5>
              <h5>Schedule on: {day}</h5>
              <p>Status: {complete ? "Finished!" : "Incomplete"} </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>setComplete(!complete)}>Mark Complete!</Button>
            <Button>Delete</Button>
          </Modal.Footer>
        </Modal>
      </Card>
    </Accordion>
  );
};

export default Chore;
