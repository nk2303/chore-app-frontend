import React from 'react';
import Table from 'react-bootstrap/Table'

const users = [
    {
        id: 1,
        name: "Jonny"
    },
    {
        id: 2,
        name: "Kim"
    },
    {
        id: 3,
        name: "Diana"
    }
]

// Messing around with trying to create a grid and make chore cards...not successful.

// const Chore = () => {
//     return(
//         <Card style={{ width: '5rem' }}>
//                 <Card.Img variant="top" src="holder.js/100px180" />
//                 <Card.Title>Chore Title</Card.Title>
//                 </Card>
//     )
// }

//props will be passed down and we can use its information
const Schedule = (props) => {
    // const {users} = props
    const transBG = {
        backgroundColor: 'transparent',
    };

    return(
        <div>
        <Table striped bordered hover variant="dark" >
            <thead className="chalk-font text-align-center" style={transBG}>
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
            <tbody className="chalk-font">
                {users.map((user, id) => <tr key={user.id}><td>{user.name}</td></tr>)}
            </tbody>
            </Table>
        </div>
    )
    }

    export default Schedule