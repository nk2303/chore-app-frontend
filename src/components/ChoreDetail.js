import React, {Component} from 'react'

const ChoreDetail = props => {

    let { name, description, name, description, location, user, day, icon, completed } = this.props

    return(
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <h5>Assigned to: {user}</h5>
            <h5>Schedule on: {day}</h5>
            {completed? <p>Finished!</p> : <p>Incomplete</p>}
        </div>
    );
}

export default ChoreDetail