import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { api } from '../services/api';

class CreateChore extends Component {
    state = {
        show: false,
        name: ''
    }

    handleClose = () => {
        this.setState({show: false});
    }

    handleShow = () => {
        this.setState({show: true});
    }

    handleSubmit = () => {
    
    }

    setName = name => {
        this.setState({name});
    }
    
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
                                label="housename"
                                placeholder="Enter chore name"
                                // onChange={event => this.setName(event.target.value)}
                                // value={this.state.name}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                type="text"
                                label="description"
                                placeholder="Chore description"
                                // onChange={event => this.setName(event.target.value)}
                                // value={this.state.name}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                type="text"
                                label="icon"
                                placeholder="Chore icon url"
                                // onChange={event => this.setName(event.target.value)}
                                // value={this.state.name}
                                />
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