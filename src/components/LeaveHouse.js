import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { api } from "../services/api";



class LeaveHouse extends Component {
  state = {
    show: false,
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  handleSubmit = () => {
    const user = { user: { ...this.props.authUser, location_id: null } };
    api.user.updateUser(user).then(resp => {
      if (!resp.error) {
        this.props.onLeaveHouse(resp);
        this.handleClose();
      }
    })
  }

  render() {
    return (
      <div>
        <Button variant="danger" onClick={this.handleShow} block>
          Leave your house
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to leave your house?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <Modal.Footer> */}
            <Button variant="danger" onClick={this.handleSubmit}>
              Yes I want to leave!
                </Button>
            <Button variant="secondary" onClick={this.handleClose}>
              Nope, I want to stay
                </Button>
            {/* </Modal.Footer> */}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default LeaveHouse