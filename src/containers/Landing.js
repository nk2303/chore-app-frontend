import React, { Component } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { api } from '../services/api';
import background from '../assets/recycling-texture.JPG';
import Card from 'react-bootstrap/Card'


export default class Landing extends Component {

  // Container to login, signup, and info about app


  componentDidMount() {
    if (localStorage.getItem("token")) {
      api.auth.getCurrentUser().then((data) => {
        if (data.error) {
          console.log(data.error)
          //remain on this page and display the error message in some useful way
        } else {
          this.props.onReturningUser(data);
          if (data.user.location_id) {
            // make fetch to location show and route to /house
            // set state to include all returned info
            this.props.history.push('/house');
          } else {
            this.props.history.push('/account')
          }
        }
      });
    }
  }


  render() {
    return (
      <div>
        <span>
            <Card className="text-center opacity-60">
            <Card.Body>
              <Card.Title>About Chore Oganizer App</Card.Title>
              <Card.Text>
                We will write here if we have time. <br/>
                With supporting text below as a natural lead-in to additional content.<br/>
                Apparently we don't...
              </Card.Text>
            </Card.Body>
            </Card>
        </span>
        <br/><br/>
        <div class="row">
          <div class="col-2"></div>
          <div class="col-3">
            <Login onLogin={this.props.onLogin} history={this.props.history} />
          </div>
          <div class="col-2"></div>
          <div class="col-3">
            <Signup onSignin={this.props.onLogin} history={this.props.history} />
          </div>
          <div class="col-2"></div>
        </div>
    </div>
    )
  }
}