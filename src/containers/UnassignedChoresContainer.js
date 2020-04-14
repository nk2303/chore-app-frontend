import React, { Component } from 'react';
import Chore from '../components/Chore'
import broom from '../assets/broom.png';

const chore = [{
    name: "Sweep",
    description: "Sweep floors upstairs and in the kitchen.",
    location: "3102 E Cherry St.",
    user: "Jonny",
    day: "Thursday",
    icon: broom,
    completed: true
}]

export default class UnassignedChoresContainer extends Component {

    // Inherit chores
    // map through and create Chores for each

    displayChores = (chores) => {
        return chores.map(chore => {
            return <Chore showChoreDetail={this.props.showChoreDetail} name={chore.name} description={chore.description} location={chore.location} user={chore.user} day={chore.day} icon={chore.icon} completed={chore.completed}/>
        })
    }

    // Unassigned chores / descriptions live here

    render(){
        return(
            <div>
                {this.displayChores(chore)}
            </div>
        )
    }
}