import React, { useState, Fragment } from "react";
import { Button, Modal, Card, Accordion } from "react-bootstrap";

// Display Chore details: on click, setState to send clicked chore

const Chore = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    name,
    description,
    location,
    user,
    day,
    icon,
    completed,
    showChoreDetail,
  } = props;

  return (
    <Accordion>
      <Card className="text-center" style={{ width: "5rem" }}>
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
              <h2>{name}</h2>
              <p>{description}</p>
              <h5>Assigned to: {user}</h5>
              <h5>Schedule on: {day}</h5>
              {completed ? <p>Finished!</p> : <p>Incomplete</p>}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
    </Accordion>
  );
};

export default Chore;
