import React, { Component } from 'react';
import UserChores from '../components/UserChores'
import ChoresContainer from './ChoresContainer'
import Schedule from './Schedule'
import CommentContainer from '../components/CommentContainer'

export default class HouseContainer extends Component {

    // landing page after login? Should display the current week schedule, your assigned chores, comments box, full figma main page

    render(){
        return(
            <div>
                <UserChores/>
                <ChoresContainer/>
                <Schedule/>
                <CommentContainer/>
            </div>
        )
    }
}