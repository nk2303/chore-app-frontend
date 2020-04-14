import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { api } from '../services/api';
import '../App.css';

// Login page. Poor bootstrap styling..

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      username: '',
      password: ''
    };
  }


handleUsernameChange = event => {
  this.setState({
    username: event.target.value
  })
}

handlePasswordChange = event => {
  this.setState({
    password: event.target.value
  })
}


handleSubmit = event => {
  event.preventDefault()
  const user = {user: 
    {username: this.state.username,
     password: this.state.password,
  }}
  api.auth.login(user).then(resp => {
    if (!resp.error) {
      this.props.onLogin(resp);
      if (resp.user.location_id) {
        // make fetch to location show and route to /house
        // set state to include all returned info
        this.props.history.push('/house');
      } else {
        this.props.history.push('/account');
      }
    } else {
      this.setState({ error: true });
      console.log(resp.error)
      //do something useful if there's an error
    }
  });
};


//<Form.Label> is <label>
//<Form.Control> is <input>
//<Form.Group> is <row>
//<Form> is <form>
render() {
  return (
    <div>
    <Container>
        <Form.Label>Have an account?</Form.Label>
        <br/>
        <br/>
        <Form onSubmit={event => this.handleSubmit(event)}>
          <Form.Group controlId="validationCustomUsername">
          {/* <Form.Label>Username</Form.Label> */}
            <Form.Control
              type="text"
              label="username"
              placeholder="Username"
              onChange={event => this.handleUsernameChange(event)}
              value={this.state.username}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control 
            type="password"
            placeholder="Password"
            onChange={event => this.handlePasswordChange(event)}
            value={this.state.password}
          />
          </Form.Group>
          <Button variant="secondary" type="submit" className="text-align-center" >
            Log in 
          </Button>
      </Form>
    </Container>
    </div>
  )
  }
}
