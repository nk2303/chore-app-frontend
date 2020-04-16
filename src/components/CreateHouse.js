import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { api } from '../services/api';

class CreateHouse extends Component {
  state = {
    show: false,
    name: ''
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  handleSubmit = () => {
    const newLocation = {
      location: {
        name: this.state.name,
        creator: this.props.authUser.id
      }
    }
    api.location.createLocation(newLocation)
      .then(resp => {
        if (!resp.error) {
          const userUpdatedLocation = {
            user: {
              ...this.props.authUser, location_id: resp.location.id
            }
          }
          api.user.updateUser(userUpdatedLocation)
            .then(resp => {
              this.props.onAddHouse(resp);
              this.props.history.push('/house');
            })

        } else {
          this.setState({ error: true });
          console.log(resp.error)
        }
      });
  }

  setName = name => {
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <Button variant="outline-secondary" onClick={this.handleShow} block>
          Create new house
                </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create a new house</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  label="housename"
                  placeholder="Enter house name"
                  onChange={event => this.setName(event.target.value)}
                  value={this.state.name}
                />
              </Form.Group>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleSubmit}>
                  Create a house!
                                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>

        </Modal>
      </div>
    );
  }
}

export default CreateHouse