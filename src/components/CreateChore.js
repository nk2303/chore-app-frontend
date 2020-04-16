import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { api } from '../services/api';

class CreateChore extends Component {
  state = {
    show: false,
    fields: {
      name: '',
      description: '',
      icon: null,
    }
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  handleSubmit = () => {
    const newChore = {
      chore: {
        name: this.state.fields.name,
        description: this.state.fields.description,
        icon: this.state.fields.icon,
        location_id: this.props.locationId,
      }
    }
    api.chore.createChore(newChore)
    .then(resp => {
      if (!resp.error) {
        this.props.onAddChore(resp);
        this.handleClose();
      }
    })
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  render() {
    return (
      <div>
        <Button variant="outline-secondary" onClick={this.handleShow} block>
          Add new chore
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
                  name="name"
                  placeholder="Enter chore name"
                  onChange={event => this.handleChange(event)}
                  value={this.state.fields.name}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="Chore description"
                  onChange={event => this.handleChange(event)}
                  value={this.state.fields.description}
                />
              </Form.Group>
              <Form.Group controlId="icon">
                <Form.Control
                  as="select"
                  name='icon'
                  value={this.state.fields.icon}
                  onChange={event => this.handleChange(event)}>
                  <option>Select an icon...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </Form.Control>
              </Form.Group>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleSubmit}>
                  Add new chore!
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>

        </Modal>
      </div>
    );
  }
}

export default CreateChore