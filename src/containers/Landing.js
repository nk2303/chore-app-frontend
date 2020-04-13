import React, { Component } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

export default class Landing extends Component {

    // Container to login, signup, and info about app

    render(){
        return(
            <div>
                <Login onLogin={this.props.onLogin} history={this.props.history} />
                {/* <Signup /> */}
            </div>
        )
    }
}