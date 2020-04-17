import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { api } from '../services/api';

class EditUser extends Component {
  state = {
    show: false,
    validated: false,
    fields: this.props.authUser,
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      this.setState({ validated: true });
    } else {
      event.preventDefault();
      const user = { user: this.state.fields };
      api.user.updateUser(user).then(resp => {
        if (!resp.error) {
          this.props.onEditUser(resp);
          this.handleClose();
        } else {
          this.setState({
            error: resp.error,
            validated: false,
            fields: this.props.authUser,
          })
        }
      });
    }
  };



  render() {
    return (
      <div>
        <Button variant="outline-secondary" onClick={this.handleShow}>
          Edit your profile
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit your profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
              <Form.Group >
                <Form.Label>Current username: </Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={event => this.handleChange(event)}
                  value={this.state.fields.username}
                />
                <Form.Control.Feedback type="invalid">
                  You must enter a username.
            </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>First name:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="first_name"
                  placeholder="First name"
                  onChange={event => this.handleChange(event)}
                  value={this.state.fields.first_name}
                />
                <Form.Control.Feedback type="invalid">
                  You must enter a first name.
            </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Last name:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                  onChange={event => this.handleChange(event)}
                  value={this.state.fields.last_name}
                />
                <Form.Control.Feedback type="invalid">
                  You must enter a last name.
            </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email address:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="email"
                  placeholder="Enter email"
                  onChange={event => this.handleChange(event)}
                  value={this.state.fields.email}
                />
                <Form.Control.Feedback type="invalid">
                  You must enter an email.
                </Form.Control.Feedback>
                {this.state.error ? <Form.Text> {this.state.error} </Form.Text> : null}
              </Form.Group>
              <Modal.Footer>
                <Button variant="secondary" type="submit" block>
                  Update Account
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default EditUser