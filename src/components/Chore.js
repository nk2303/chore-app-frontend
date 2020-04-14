import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Modal from 'react-bootstrap/Modal'


// Display Chore details: on click, setState to send clicked chore


export default class Chore extends Component {

    render(){
        const { name, description, location, user, day, icon, completed, showChoreDetail } = this.props
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        
        return(
            <Accordion>
                <Card className='text-center' style={{width: '5rem'}}>
                    <Accordion.Toggle as={Card.Header} eventKey='0'>
                        <Card.Img  src={icon} />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Subtitle>{description}</Card.Subtitle>
                    </Accordion.Collapse>


                    <Card.Title onClick={() => showChoreDetail(this.props)}>{name}</Card.Title>
                </Card>
            </Accordion>
        )
    }
}