import React from "react";
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'


// Account, House, Contact, About, Logout

export default function NavBar(props) {
  const loggedIn = () => {
    return props.authUser.id ? true : false
  }
  const titleStyle = {
    'fontSize': '30px',
    opacity: '0.7',
    'fontFamily': 'Chalkduster',
  };

  return (
    <div>
      <header id='topbar' className="row">
        {loggedIn() ? <div className="col-1">
          <Dropdown>
            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
              Navigate
                </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to='/account'>Account</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to='/house'>Your house</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to='/about'>About</Link>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => {
                props.handleLogout();
              }}><Link to='/'>Logout</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div> : null}
        <div className="col-2">
          Made by Diana, Jonny and Kim
            </div>

        <div className="col-4" style={titleStyle}>
          Choreganizer!
            </div>

        {loggedIn() ? <div id="greeting" className="col-5">
          Welcome {props.authUser.first_name}!
            </div> : null}

      </header>
    </div>
  )
}
