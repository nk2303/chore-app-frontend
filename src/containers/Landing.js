import React, { Component } from 'react';
import Login from '../components/Login'

export default class Landing extends Component {

    // Container to login, signup, and info about app

    render(){
        return(
            <div>
                <Login/>
            </div>
        )
    }
}