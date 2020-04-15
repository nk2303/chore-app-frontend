import React, { Component } from 'react';
import paperBackground from '../assets/recycling-texture.JPG'
import Chore from '../components/Chore'



export default class UserChoreContainer extends Component {
    state = {
        currentUserChores: []
    }
    // Container to display the users assigned chores
    
    findAssignedChores = () => {
        console.log(this.props.authUser)
        console.log(this.props)
        let userChores = this.props.chores.filter(chore => chore.user_id === this.props.authUser.id)
        this.setState({
            currentUserChores: userChores
        })
    }
    componentDidMount(){
        let userChores = this.props.chores.filter(chore => chore.user_id === this.props.authUser.id)
        console.log(userChores)
        this.findAssignedChores()
    }
    
    render(){
    
        var backgroundImg = {
            backgroundImage: `url(${paperBackground})`,
            'background-size':'cover'
          };
        return(
            <div style={backgroundImg}>
                <div>
                    Your Current Chores
                    <Chore chore={this.props.chores}/>
                </div>

            </div>
        )
    }
}
