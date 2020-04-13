import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { api } from '../services/api';

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


render() {
  return (
    <div>
    <Container>
        Login
        
      <form onSubmit={event => this.handleSubmit(event)}>
        <Row>
        Username:<input
          type="text"
          label="username"
          onChange={event => this.handleUsernameChange(event)}
          value={this.state.username}
        />
        </Row>
        <Row>
        Password:<input
          type="password"
          onChange={event => this.handlePasswordChange(event)}
          value={this.state.password}
        />
        </Row>
        <Row>
        <input type="submit"/>
        </Row>
      </form>
        
    </Container>
    </div>
  )
  }
}
