import React from "react";
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'


// Account, House, Contact, About, Logout

export default class NavBar extends React.Component {
  render() {
    const titleStyle = {
      fontSize: '30px',
      opacity: '0.7',
      fontFamily: 'Chalkduster',
    };

    return (
      <div>
        <header id='topbar' className="row">
            <div className="col-1">
                <Dropdown>
                <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                    Navigate
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Your house</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">About</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Log out</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="col-2">
                Made by Diana, Jonny and Kim
            </div>

            <div className="col-4" style={titleStyle}>
                Choreganizer!
            </div>

            <div id="greeting" className="col-5">
                Welcome, ...
            </div>

        </header>
      </div>
    )
  }
}
