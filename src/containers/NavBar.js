import React from "react";
import { Link } from 'react-router-dom'

// Account, House, Contact, About, Logout

export default class NavBar extends React.Component {
    render() {
        const titleStyle = {
            'font-size': '30px',
            opacity: '0.7', 
            'font-family': 'Chalkduster',
        };
        return (
            <div>
            <header id='topbar' class="row">
                <Link/>
                <div class="col-3">
                    Made by Diana, Johnny and Kim
                </div>
                <div class="col-4" style={titleStyle}>
                    Choreganizer!
                </div>
                <div id="greeting" class="col-4">
                    Welcome, ...
                </div>
                <div class="input-group-append">
                    <button id="login" class="btn btn-outline-secondary" type="input">Profile</button>
                </div>

            </header>
            </div>
        )
    }
}
