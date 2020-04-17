import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class LeaveHouse extends Component {
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
                <Button variant="danger" onClick={''} block>
                    Leave your house
                </Button>
            </div>
        );
    }
}

export default LeaveHouse