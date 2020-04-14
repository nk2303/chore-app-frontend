import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { api } from '../services/api';

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


render() {
    return (
    <div>
    <Container>
        Signup
        
      <form onSubmit={event => this.handleSubmit(event)}>
        <Row>
        <label name='username'>Username:</label>
        <input
          type="text"
          name="username"
          onChange={event => this.handleChange(event)}
          value={this.state.fields.username}
        />
        </Row>
        <Row>
        <label name='first_name'>First Name:</label>
        <input
          type="text"
          name="first_name"
          onChange={event => this.handleChange(event)}
          value={this.state.fields.first_name}
        />
        </Row>
        <Row>
        <label name='last_name'>Last Name:</label>
        <input
          type="text"
          name="last_name"
          onChange={event => this.handleChange(event)}
          value={this.state.fields.last_name}
        />
        </Row>
        <Row>
        <label name='email'>Email Address:</label>
        <input
          type="text"
          name="email"
          onChange={event => this.handleChange(event)}
          value={this.state.fields.email}
        />
        </Row>
        <Row>
        <label name='password'>Password:</label>
        <input
          type="password"
          name="password"
          onChange={event => this.handleChange(event)}
          value={this.state.fields.password}
        />
        </Row>
        <Row>
        <label name='password_confirmation'>Confirm Password:</label>
        <input
          type="password"
          name="password_confirmation"
          onChange={event => this.handleChange(event)}
          value={this.state.fields.password_confirmation}
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
