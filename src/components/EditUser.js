import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class EditUser extends Component {
    state = {
        show: false,
        username: ''
    }

    handleClose = () => {
        this.setState({show: false});
    }

    handleShow = () => {
        this.setState({show: true});
    }

    handleSubmit = () => {
        
    }

    setName = username => {
        this.setState({username});
    }
    
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
                        <Form>
                        <Form.Group >
                            <Form.Label>Current username: {this.props.userInfo.username} </Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                placeholder="Username"
                                // onChange={event => this.handleChange(event)}
                                // value={this.state.fields.username}
                            />
                            </Form.Group>
                                <Form.Group>
                                <Form.Label>Current first name: {this.props.userInfo.first_name}</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="first_name"
                                    placeholder="First name"
                                    // onChange={event => this.handleChange(event)}
                                    // value={this.state.fields.first_name}
                                />
                                </Form.Group>
                                <Form.Group>
                                <Form.Label>Current last name: {this.props.userInfo.last_name}</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="last_name"
                                    placeholder="Last name"
                                    // onChange={event => this.handleChange(event)}
                                    // value={this.state.fields.last_name}
                                />
                                </Form.Group>
                                <Form.Group>
                                <Form.Label>Current email address: {this.props.userInfo.email}</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    placeholder="Enter email"
                                    // onChange={event => this.handleChange(event)}
                                    // value={this.state.fields.email}
                                />
                                </Form.Group>
                            
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleSubmit}>
                                    Submit
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