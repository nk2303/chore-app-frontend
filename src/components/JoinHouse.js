import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const JoinHouse = props => {

    return(
        <div>
            <Form onSubmit={event => console.log(event)}>
                <Form.Group>
                    <Form.Control
                    type="text"
                    label="location_id"
                    placeholder="Enter your house id..."
                    onChange={event => console.log(event)}
                    value={''}
                    />
                </Form.Group>
                <Button variant="outline-secondary" type="submit" block>
                    Join a house
                </Button>
            </Form>
        </div>
    );
}

export default JoinHouse