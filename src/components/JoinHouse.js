import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { api } from '../services/api';
const JoinHouse = props => {
  const { authUser, onJoinHouse, history } = props;

  const [id, setId] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      const userUpdatedLocation = {
        user: {
          ...authUser, location_id: id
        }
      }
      api.user.updateUser(userUpdatedLocation)
        .then(resp => {
          onJoinHouse(resp);
          history.push('/house');
        })
    }
    setValidated(true);
  }

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            required
            type="text"
            label="location_id"
            placeholder="Enter the house id..."
            onChange={event => setId(event.target.value)}
            value={id}
          />
          <Form.Control.Feedback type="invalid">
            You must enter a house id.
            </Form.Control.Feedback>
        </Form.Group>
        <Button variant="outline-secondary" type="submit" block>
          Join House
                </Button>
      </Form>
    </div>
  );
}
export default JoinHouse