import React, { Component } from 'react';
import paperBackground from '../assets/recycling-texture.JPG'
import Chore from '../components/Chore'



export default class UserChoreContainer extends Component {
    state = {
        currentUserChores: [this.props.chores.filter(chore => chore.user_id === this.props.authUser.id)]
    }
    // Container to display the users assigned chores
    
    findAssignedChores = () => {
        setTimeout(() => {
        console.log("timeout")
        let userChores = this.props.chores.filter(chore => chore.user_id === this.props.authUser.id)
        this.setState({
            currentUserChores: [userChores]
        })
        }, 200)
    }
    componentDidMount(){
        this.findAssignedChores()
    }
    
    render(){
        var backgroundImg = {
            backgroundImage: `url(${paperBackground})`,
            backgroundSize:'cover'
          };


          
        return(
            <div style={backgroundImg}>
                <div>
                    {!this.state.currentUserChores==[]? this.state.currentUserChores[0].map(chore=><Chore name={chore.name} description={chore.description} location={chore.location} user={chore.user} day={chore.day} icon={chore.icon} completed={chore.completed}/>) : null }
                    Your Current Chores
                </div>

            </div>
        )
    }
}
