import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { api } from "../services/api";



class DeleteUser extends Component {
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
    api.user.deleteUser(this.props.authUser.id).then(resp => {
      if (!resp.error) {
        this.props.onDeleteUser();
        this.handleClose();
        this.props.history.push('/');
      }
    })
  }

  render() {
    return (
      <div>
        <Button variant="danger" onClick={this.handleShow} >
          Delete Account
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to delete your account?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button variant="danger" onClick={this.handleSubmit}>
              Yes delete my account!
                </Button>
            <Button variant="secondary" onClick={this.handleClose}>
              Nope, take me back
                </Button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default DeleteUser