import React from "react";
import Dropdown from 'react-bootstrap/Dropdown'


// Account, House, Contact, About, Logout

export default class NavBar extends React.Component {
  loggedIn = () => {
    return this.props.authUser.id ? true : false
  }
  
  render() {
    const titleStyle = {
      fontSize: '30px',
      opacity: '0.7',
      fontFamily: 'Chalkduster',
    };

    return (
      <div>
        <header id='topbar' className="row">
            {this.loggedIn() ? <div className="col-1">
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
                this.props.handleLogout();
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

            {this.loggedIn() ? <div id="greeting" className="col-5">
          Welcome {this.props.authUser.first_name}!
            </div> : null}

      </header>
    </div>
  )
}
