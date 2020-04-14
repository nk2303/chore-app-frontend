import React, { Component } from 'react';
import paperBackground from '../assets/recyclepaper.jpg'


export default class UserChoreContainer extends Component {

    // Container to display the users assigned chores

    render(){
        var backgroundImg = {
            backgroundImage: `url(${paperBackground})`,
            'background-size':'cover'
          };
        return(
            <div style={backgroundImg}>
                <div>
                    Your Current Chores
                </div>

            </div>
        )
    }
}
