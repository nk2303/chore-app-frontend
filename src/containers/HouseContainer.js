import React, { Component } from 'react';
import UserChoreContainer from './UserChoreContainer'
import UnassignedChoresContainer from './ChoresContainer'
import Schedule from './Schedule'
import CommentContainer from './CommentContainer'

export default class HouseContainer extends Component {

    // landing page after login? Should display the current week schedule, your assigned chores, comments box, full figma main page

    // Unassigned chores shrinks as unassigned chores are assigned / "No Chores to Assign!"

    // 

    render(){
        return(
            <div>
                <UserChoreContainer/>
                <UnassignedChoresContainer/>
                <Schedule/>
                <CommentContainer/>
            </div>
        )
    }
}