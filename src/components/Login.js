import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { api } from '../services/api';
import '../App.css';

// Login page. Poor bootstrap styling..

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      validated: false,
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
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      this.setState({validated: true});
    } else {
      event.preventDefault()
      const user = {
        user:
        {
          username: this.state.username,
          password: this.state.password,
        }
      }
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
          this.setState({ 
            error: resp.error,
            validated: false,
            username: '',
            password: '' 
          });
        }
      });
    }
  };

  render() {
    return (
      <div>
        <Container>
          <Form.Label>Have an account?</Form.Label>
          <br />
          <br />
          <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Control
                required
                type="text"
                label="username"
                placeholder="Username"
                onChange={event => this.handleUsernameChange(event)}
                value={this.state.username}
              />
              <Form.Control.Feedback type="invalid">
                You must enter a username.
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                onChange={event => this.handlePasswordChange(event)}
                value={this.state.password}
              />
              <Form.Control.Feedback type="invalid">
                  Enter your password.
            </Form.Control.Feedback>
            {this.state.error ? <Form.Text> {this.state.error} </Form.Text> : null}
            </Form.Group>
            <Button variant="secondary" type="submit" block>
              Log in
          </Button>
          </Form>
        </Container>
      </div>
    )
  }
}
