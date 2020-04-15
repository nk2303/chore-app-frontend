import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Chore from "../components/Chore"
import Cell from "../components/Cell"

const Schedule = (props) => {
  const { authUser, chores, location, users } = props;

  const buildSchedule = (users) => {
    return users.map((user) => renderUserRows(user, chores));
  };
  const renderUserRows = (user) => {
    return (
      <tr>
        <td id={user}>{user.first_name}</td>
        <td value="MON"><Cell/></td>
        <td value="TUE"><Cell/></td>
        <td value="WED"><Cell/></td>
        <td value="THU"><Cell/></td>
        <td value="FRI"><Cell/></td>
        <td value="SAT"><Cell/></td>
        <td value="SUN"><Cell/></td>
        {/* made a td with ${user.id + chore.day} id if it does not exist */}
      </tr>
    );
  };

  // find <td> by ID and insert chore?

  const renderAssignedChores = (chores) => {
    chores.map((chore) => (chore.day ? console.log(chore) : null));
  };

  const transBG = {
    "background-color": "transparent",
  };
  return (
    <div>
      <Table striped bordered hover variant="dark">
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
          {buildSchedule(users)}
          {renderAssignedChores(users)}
          <tr>
            <tr></tr>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Schedule;

// let userChores = chores.filter(chore=> chore.user_id == user.id)
// let week = []
// {userChores.map(chore => chore.day? week.push(<td value={chore.day} id={`${user.id + chore.day}`}><Chore chore={chore}/></td>) : null)}
// check chore if user_id == user.id
// if yes, check chore.day and find its corresponding <td>
// when found, include a <Chore chore=chore>
// ${user.id + chore.day}
