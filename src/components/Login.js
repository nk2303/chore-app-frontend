import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Login page. Poor bootstrap styling..

export default class Login extends Component {
    state = {
        username: "",
        password: "",
        submittedData: []
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
  let formData = { username: this.state.username, password: this.state.password }
  let dataArray = this.state.submittedData.concat(formData)
  this.setState({submittedData: dataArray})
}

listOfSubmissions = () => {
  return this.state.submittedData.map(data => {
    return <div><span>{data.Username}</span> <span>{data.password}</span></div>
  })
}

render(){
  return (
    <div>
    <Container>
        Sign Up
        <Row>
      <form onSubmit={event => this.handleSubmit(event)}>
        Username:<input
          type="text"
          label="username"
          onChange={event => this.handleUsernameChange(event)}
          value={this.state.username}
          /></form>
        </Row>
        <Row>
        <form>
        Password:<input
          type="password"
          onChange={event => this.handlePasswordChange(event)}
          value={this.state.password}
        />
      </form>
        </Row>
        <Row>
        <input type="submit"/>
        </Row>
    </Container>
    </div>
  )
  }
}
