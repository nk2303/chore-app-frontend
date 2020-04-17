import React, { Component } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { api } from '../services/api';
import { Card } from 'react-bootstrap'


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
              <Card.Title>Welcome to Choreganizer!</Card.Title>
              <Card.Subtitle>Less Mess is Best</Card.Subtitle>
              <Card.Text>
                <br></br>
                Choreganizer is a simple solution to the delegation of household chores to your and your housemates.<br></br> Create a house, add members, create chores, and have them tracked weekly in one convenient place.<br></br> Login today!
              </Card.Text>
            </Card.Body>
            </Card>
        </span>
        <br/><br/>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-3">
            <Login onLogin={this.props.onLogin} history={this.props.history} />
          </div>
          <div className="col-2"></div>
          <div className="col-3">
            <Signup onSignin={this.props.onLogin} history={this.props.history} />
          </div>
          <div className="col-2"></div>
        </div>
    </div>
    )
  }
}