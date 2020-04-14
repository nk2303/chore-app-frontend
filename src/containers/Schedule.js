import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

// Messing around with trying to create a grid and make chore cards...not successful.

const Chore = () => {
  return (
    <Card style={{ width: "5rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Title>Chore Title</Card.Title>
    </Card>
  );
};

const buildSchedule = (props) => {
  props.users.map(user => renderUserRows(user))
}
// house.users.map(user => renderUserRows(user))
const renderUserRows = (user) => {
  return(
    <tr>
      <td>{user.first_name}</td>
      <td value="monday"></td>
      <td value="tuesday"></td>
      <td value="wednesday"></td>
      <td value="thursday"></td>
      <td value="friday"></td>
      <td value="saturday"></td>
      <td value="sunday"></td>
    </tr>
  )
}

//props will be passed down and we can use its information
const Schedule = (props) => {
        const transBG = {
            'background-color': 'transparent',
        };
        return(
            <div>
            <Table striped bordered hover variant="dark" >
                <thead class="chalk-font text-align-center" style={transBG}>
                    <tr>
                    <th></th>
                    <th>MON</th>
                    <th>TUE</th>
                    <th>WED</th>
                    <th>THUR</th>
                    <th>FRI</th>
                    <th>SAT</th>
                    <th>SUN</th>
                    </tr>
                </thead>
                {/* And below is rendering */}
                {/* render rows based on users in house */}
                {/* each user row renders 5 <td>s with value equal to each day */}
                {/* chores are checked for user and assigned day and are rendered on correspondings <td> */}
                <tbody class="chalk-font">
                    <tr>
                    <tr>
      <td>Jonny</td>
      <td value="monday"></td>
      <td value="tuesday"></td>
      <td value="wednesday"></td>
      <td value="thursday"></td>
      <td value="friday"></td>
      <td value="saturday"></td>
      <td value="sunday"></td>
    </tr>
                    </tr>
                    <tr>
                        <td>KIM</td>
                    </tr>
                    <tr>
                        <td>DIANA</td>
                    </tr>
                </tbody>
                </Table>
            </div>
        )
    }

export default Schedule;
