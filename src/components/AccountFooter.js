import React, { Component } from 'react';
import '../App.css';
import LeaveHouse from './LeaveHouse'


export default class AccountFooter extends Component {

    render(){
        return(

            <div id="bottom-row" className="container-fluid row minHeight-300 padding-top-25">
                <div className="left-side-menu col-2">
                    {this.props.isAdmin ? null : <LeaveHouse authUser={this.props.authUser} onLeaveHouse={this.props.onUpdateUser}/>}
                    
                </div>
                <main id="comment-bar" className="col-10">
                    
                </main>

            </div>
        )
    }
}

