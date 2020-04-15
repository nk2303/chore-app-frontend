import React, { Component } from 'react';
import paperBackground from '../assets/recycling-texture.JPG';

export default class UnassignedChoresContainer extends Component {

    // Unassigned chores / descriptions live here

    render(){
        var backgroundImg = {
            backgroundImage: `url(${paperBackground})`,
            backgroundSize:'cover'
          };
        return(
            <div style={backgroundImg}>
                <div>
                    Unassigned Chores
                </div>

            </div>
        )
    }
}

