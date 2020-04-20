import React, { Component } from 'react';
import AssignChore from "../components/AssignChore";
import '../App.css';

// Comment section- should display comments made by any user of the house.


export default class CommentContainer extends Component {

    render(){
        return(

            <div id="bottom-row" className="container-fluid row padding-top-25">
                <div className="left-side-menu col-2">
                    <AssignChore />
                </div>
                <main id="comment-bar" className="col-10 ">
                    
                    <div className="white-trans-bg minHeight-300">Comments</div>
                    
                </main>

            </div>
        )
    }
}

