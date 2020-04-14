import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { api } from '../services/api';
import '../App.css';

// Signup page, styling copied from Login page

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
      }  
    };
  }


  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.fields.password !== this.state.fields.password_confirmation) {
      console.log('password and password confirmation do not match')
      this.setState(prev => {
        return({
          fields: {
            ...prev.fields, password: '', password_confirmation: '',
            }
        })
      })
    } else {
      const user = {user: this.state.fields};
      api.user.newUser(user).then(resp => {
        if (!resp.error) {
          this.props.onSignin(resp);
          this.props.history.push('/account');
        } else {
          this.setState({ error: true });
          console.log(resp.error)
          //do something useful if there's an error
          this.setState({
            fields: {
              username: '',
              first_name: '',
              last_name: '',
              email: '',
              password: '',
              password_confirmation: '',
            } 
          })
        }
      });
    }  
  };

//<Form.Label> is <label>
//<Form.Control> is <input>
//<Form.Group> is <row>
//<Form> is <form>
render() {
    return (
    <div>
    <Container>
      <Form.Label>Don't have an account?</Form.Label>
      <br/>
      <br/>
      <Form onSubmit={event => this.handleSubmit(event)}>
        <Form.Group controlId="validationCustomUsername">
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            onChange={event => this.handleChange(event)}
            value={this.state.fields.username}
          />
          </Form.Group>
        <Form.Group>
        {/* <Form.Label>First Name:</Form.Label> */}
        <Form.Control
          type="text"
          name="first_name"
          placeholder="First name"
          onChange={event => this.handleChange(event)}
          value={this.state.fields.first_name}
        />
        </Form.Group>
        <Form.Group>
        {/* <Form.Label>Last Name:</Form.Label> */}
        <Form.Control
          type="text"
          name="last_name"
          placeholder="Last name"
          onChange={event => this.handleChange(event)}
          value={this.state.fields.last_name}
        />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control
          type="text"
          name="email"
          placeholder="Enter email"
          onChange={event => this.handleChange(event)}
          value={this.state.fields.email}
        />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
        {/* <Form.Label>Password</Form.Label> */}
        <Form.Control 
          type="password"
          name="password"
          placeholder="Password"
          onChange={event => this.handleChange(event)}
          value={this.state.fields.password}
        />
        </Form.Group>
        <Form.Group>
        {/* <Form.Label>Confirm Password:</Form.Label> */}
        <Form.Control
          type="password"
          name="password_confirmation"
          placeholder="Confirm password"
          onChange={event => this.handleChange(event)}
          value={this.state.fields.password_confirmation}
        />
        </Form.Group>
        <Form.Group>
        <Button variant="secondary" type="submit" block>
            Create account
        </Button>
        </Form.Group>
      </Form>
        
    </Container>
    </div>
  )
  }
}
