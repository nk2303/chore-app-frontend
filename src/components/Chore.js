import React, { Component, useState } from "react";

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
    draggable,
    onDrag
  } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const dragStart = e => {
    const target = e.target;

    setTimeout(() => {
      target.style.display = "none";
    },0);
  }

  const dragOver = e => {
    e.stopPropagation();
  }

  return (
    <Card className="text-center" style={{ width: "5rem" }} draggable={draggable} onDrag={() => onDrag(props.name)}>
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
            <h5>Assigned to: {user}</h5>
            <h5>Schedule on: {day}</h5>
            {completed ? <p>Finished!</p> : <p>Incomplete</p>}
          </div>
        </Modal.Body>
      </Modal>
    </Card>
  );
};

export default Chore;
