import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'


// Messing around with trying to create a grid and make chore cards...not successful.

const Chore = () => {
    return(
        <Card style={{ width: '5rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Title>Chore Title</Card.Title>
                </Card>
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
                <tbody class="chalk-font">
                    <tr>
                        <td>JONNY</td>
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

    export default Schedule