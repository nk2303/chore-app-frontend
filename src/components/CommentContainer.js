import React, { Component } from 'react';

// Comment section- should display comments made by any user of the house.

const Comment = () => {
    return (
        <p>This is a Comment</p>
    )
}

export default class CommentContainer extends Component {

    render(){
        return(
            <div>
                <Comment />
                <Comment />
                <Comment />
            </div>
        )
    }
}